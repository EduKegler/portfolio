import { readFile } from "node:fs/promises";
import { computeVariantHash, VARIANT_PATHS } from "./lib/paths";

async function main(): Promise<void> {
  const failures: string[] = [];

  for (const { variant, hashPath } of VARIANT_PATHS) {
    const currentHash = computeVariantHash(variant);

    let storedHash: string;
    try {
      storedHash = (await readFile(hashPath, "utf8")).trim();
    } catch (error) {
      console.error(
        `[check-cv] [${variant.slug}] Could not read ${hashPath}. Run \`pnpm build:cv\` to generate it.`,
      );
      console.error(error);
      failures.push(variant.slug);
      continue;
    }

    if (currentHash !== storedHash) {
      console.error(
        `[check-cv] [${variant.slug}] Resume data changed but ${variant.pdfFileName} was not regenerated.`,
      );
      console.error(`  expected hash: ${storedHash}`);
      console.error(`  current hash:  ${currentHash}`);
      console.error("  Run: pnpm build:cv");
      failures.push(variant.slug);
      continue;
    }

    console.log(
      `[check-cv] [${variant.slug}] OK — ${variant.pdfFileName} matches current resume data.`,
    );
  }

  if (failures.length > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("[check-cv] Failed:", error);
  process.exit(1);
});
