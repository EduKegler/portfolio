import { readFile } from "node:fs/promises";
import { computeResumeHash, HASH_PATH } from "./lib/paths";

async function main(): Promise<void> {
  const currentHash = computeResumeHash();

  let storedHash: string;
  try {
    storedHash = (await readFile(HASH_PATH, "utf8")).trim();
  } catch (error) {
    console.error(
      `[check-cv] Could not read ${HASH_PATH}. Run \`pnpm build:cv\` to generate it.`,
    );
    console.error(error);
    process.exit(1);
  }

  if (currentHash !== storedHash) {
    console.error("[check-cv] CV data changed but cv.pdf was not regenerated.");
    console.error(`  expected hash: ${storedHash}`);
    console.error(`  current hash:  ${currentHash}`);
    console.error("  Run: pnpm build:cv");
    process.exit(1);
  }

  console.log("[check-cv] OK — cv.pdf matches current resume data.");
}

main().catch((error) => {
  console.error("[check-cv] Failed:", error);
  process.exit(1);
});
