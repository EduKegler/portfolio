import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { resumeData } from "../../src/features/resume/data/resume-data";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));

export const PROJECT_ROOT = resolve(SCRIPT_DIR, "..", "..");
export const PDF_PATH = resolve(PROJECT_ROOT, "public/cv.pdf");
export const HASH_PATH = resolve(PROJECT_ROOT, "public/cv.hash");

export function computeResumeHash(): string {
  return createHash("sha256")
    .update(JSON.stringify(resumeData))
    .digest("hex");
}
