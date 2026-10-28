import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  resumeDefaultVariant,
  type ResumeVariant,
} from "../../src/features/resume/data/variants";
import {
  loadTailoredVariants,
  tailoredVariantsDir,
} from "../../src/features/resume/data/tailored-variants";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));

export const PROJECT_ROOT = resolve(SCRIPT_DIR, "..", "..");
export const PUBLIC_DIR = resolve(PROJECT_ROOT, "public");

// Same file `next build` reads, so scripts and pages see the same variants.
const ENV_FILE = resolve(PROJECT_ROOT, ".env.local");
if (existsSync(ENV_FILE)) {
  process.loadEnvFile(ENV_FILE);
}

export type ResumeVariantPaths = {
  variant: ResumeVariant;
  pdfPath: string;
  hashPath: string;
};

// The base CV is published from public/. Tailored PDFs stay next to their
// private JSON so they never reach the deployed site.
export function getVariantPaths(variant: ResumeVariant): ResumeVariantPaths {
  const dir =
    variant === resumeDefaultVariant ? PUBLIC_DIR : tailoredVariantsDir();
  if (!dir) {
    throw new Error(`No output folder for variant ${variant.slug}`);
  }
  return {
    variant,
    pdfPath: resolve(dir, variant.pdfFileName),
    hashPath: resolve(dir, variant.hashFileName),
  };
}

export const RESUME_VARIANTS: ResumeVariant[] = [
  resumeDefaultVariant,
  ...loadTailoredVariants(),
];

export const VARIANT_PATHS: ResumeVariantPaths[] =
  RESUME_VARIANTS.map(getVariantPaths);

export const DEFAULT_VARIANT_PATHS: ResumeVariantPaths =
  getVariantPaths(resumeDefaultVariant);

export function findVariant(slug: string): ResumeVariant | undefined {
  return RESUME_VARIANTS.find((variant) => variant.slug === slug);
}

export function computeVariantHash(variant: ResumeVariant): string {
  return createHash("sha256")
    .update(JSON.stringify(variant.data))
    .digest("hex");
}
