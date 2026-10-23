import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  RESUME_VARIANTS,
  resumeDefaultVariant,
  type ResumeVariant,
} from "../../src/features/resume/data/variants";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));

export const PROJECT_ROOT = resolve(SCRIPT_DIR, "..", "..");
export const PUBLIC_DIR = resolve(PROJECT_ROOT, "public");

export type ResumeVariantPaths = {
  variant: ResumeVariant;
  pdfPath: string;
  hashPath: string;
};

export function getVariantPaths(variant: ResumeVariant): ResumeVariantPaths {
  return {
    variant,
    pdfPath: resolve(PUBLIC_DIR, variant.pdfFileName),
    hashPath: resolve(PUBLIC_DIR, variant.hashFileName),
  };
}

export const VARIANT_PATHS: ResumeVariantPaths[] =
  RESUME_VARIANTS.map(getVariantPaths);

export const DEFAULT_VARIANT_PATHS: ResumeVariantPaths =
  getVariantPaths(resumeDefaultVariant);

export function computeVariantHash(variant: ResumeVariant): string {
  return createHash("sha256")
    .update(JSON.stringify(variant.data))
    .digest("hex");
}
