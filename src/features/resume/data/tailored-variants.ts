import { readdirSync, readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { parseOverrides } from "@/features/resume/lib/parse-overrides";
import { defineVariant, type ResumeVariant } from "./variants";

// Tailored variants name the companies being applied to, so they live outside
// this public repo. CV_VARIANTS_DIR points at a folder of <slug>.json overrides
// and is set only on the owner's machine, never on the deployed site.
export function tailoredVariantsDir(): string | undefined {
  const dir = process.env.CV_VARIANTS_DIR;
  return dir ? resolve(process.cwd(), dir) : undefined;
}

export function loadTailoredVariants(): ResumeVariant[] {
  const dir = tailoredVariantsDir();
  if (!dir) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) =>
      defineVariant(
        basename(file, ".json"),
        parseOverrides(JSON.parse(readFileSync(resolve(dir, file), "utf8")), file),
      ),
    );
}

export function findTailoredVariant(slug: string): ResumeVariant | undefined {
  return loadTailoredVariants().find((variant) => variant.slug === slug);
}
