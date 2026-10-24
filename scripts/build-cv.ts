import { spawn, type ChildProcess } from "node:child_process";
import { writeFile } from "node:fs/promises";
import getPort from "get-port";
import puppeteer, { type Browser } from "puppeteer-core";
import {
  computeVariantHash,
  PROJECT_ROOT,
  VARIANT_PATHS,
  type ResumeVariantPaths,
} from "./lib/paths";

const SERVER_READY_TIMEOUT_MS = 30_000;
const SERVER_POLL_INTERVAL_MS = 500;

async function waitForServer(url: string, timeoutMs: number): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let lastError: unknown = null;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.status < 500) {
        return;
      }
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolveTimer) =>
      setTimeout(resolveTimer, SERVER_POLL_INTERVAL_MS),
    );
  }
  throw new Error(
    `Server did not become ready within ${timeoutMs}ms at ${url}. Last error: ${String(lastError)}`,
  );
}

async function killServer(server: ChildProcess): Promise<void> {
  if (server.exitCode !== null || server.killed) return;
  return new Promise((resolveKill) => {
    const onExit = () => resolveKill();
    server.once("exit", onExit);
    server.kill("SIGTERM");
    setTimeout(() => {
      if (!server.killed) server.kill("SIGKILL");
      resolveKill();
    }, 3000);
  });
}

async function renderVariant(
  browser: Browser,
  baseUrl: string,
  variantPaths: ResumeVariantPaths,
): Promise<void> {
  const { variant, pdfPath, hashPath } = variantPaths;
  const page = await browser.newPage();
  try {
    await page.goto(`${baseUrl}${variant.route}`, {
      waitUntil: "networkidle0",
    });
    await page.emulateMediaType("print");
    await page.pdf({
      path: pdfPath,
      printBackground: true,
      // Page size AND margins come from CSS @page so that per-page top
      // padding is honoured (a .root padding only applies to the first page).
      // When preferCSSPageSize is true, format/margin options are ignored.
      preferCSSPageSize: true,
    });
    console.log(`[build-cv] [${variant.slug}] PDF written to ${pdfPath}`);
  } finally {
    await page.close();
  }
  await writeFile(hashPath, `${computeVariantHash(variant)}\n`, "utf8");
  console.log(`[build-cv] [${variant.slug}] Hash written to ${hashPath}`);
}

async function main(): Promise<void> {
  const port = await getPort();
  const baseUrl = `http://127.0.0.1:${port}`;

  console.log(`[build-cv] Starting Next.js server on port ${port}...`);
  const server = spawn("pnpm", ["exec", "next", "start", "-p", String(port)], {
    cwd: PROJECT_ROOT,
    stdio: ["ignore", "pipe", "pipe"],
    env: process.env,
  });

  server.stdout?.on("data", (chunk: Buffer) => {
    process.stdout.write(`[next] ${chunk.toString()}`);
  });
  server.stderr?.on("data", (chunk: Buffer) => {
    process.stderr.write(`[next] ${chunk.toString()}`);
  });
  server.on("error", (error) => {
    console.error("[build-cv] Server spawn error:", error);
  });

  try {
    await waitForServer(baseUrl, SERVER_READY_TIMEOUT_MS);
    console.log(`[build-cv] Server ready at ${baseUrl}`);

    // Uses the locally installed Google Chrome; CHROME_PATH overrides it.
    const executablePath = process.env.CHROME_PATH;
    const browser = await puppeteer.launch(
      executablePath
        ? { headless: true, executablePath }
        : { headless: true, channel: "chrome" },
    );
    try {
      await Promise.all(
        VARIANT_PATHS.map((variantPaths) =>
          renderVariant(browser, baseUrl, variantPaths),
        ),
      );
    } finally {
      await browser.close();
    }
  } finally {
    await killServer(server);
    console.log("[build-cv] Server stopped.");
  }
}

main().catch((error) => {
  console.error("[build-cv] Failed:", error);
  process.exit(1);
});
