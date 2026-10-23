import { readFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import { resumeData } from "../src/features/resume/data/resume-data";
import type { ResumeData } from "../src/features/resume/data/types";
import { findVariant } from "../src/features/resume/data/variants";
import {
  compareKeywords,
  DEFAULT_KEYWORDS,
  findKeywords,
  mergeKeywords,
} from "./lib/keywords";
import { computeVariantHash, getVariantPaths } from "./lib/paths";

// Usage: pnpm match:jd <variant-slug> <job-description-file>
// Compares the keywords of a job description with the variant's PDF text.

function resumeTerms(data: ResumeData): string[] {
  return [
    ...data.jobs.flatMap((job) => job.stack ?? []),
    ...data.skills.flatMap((group) => group.items),
  ];
}

function resumeText(data: ResumeData): string {
  return [
    data.title,
    data.summary,
    ...data.jobs.flatMap((job) => [job.role, ...(job.stack ?? []), ...(job.bullets ?? [])]),
    ...data.skills.flatMap((group) => group.items),
  ].join("\n");
}

async function readPdfText(pdfPath: string): Promise<string> {
  const buffer = await readFile(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  try {
    return (await parser.getText()).text;
  } finally {
    await parser.destroy();
  }
}

async function main(): Promise<void> {
  const [slug, jobFile] = process.argv.slice(2);
  if (!slug || !jobFile) {
    console.error("Usage: pnpm match:jd <variant-slug> <job-description-file>");
    process.exit(1);
  }

  const variant = findVariant(slug);
  if (!variant) {
    console.error(`[match-jd] Unknown variant: ${slug}`);
    process.exit(1);
  }

  const { pdfPath, hashPath } = getVariantPaths(variant);
  const storedHash = (await readFile(hashPath, "utf8").catch(() => "")).trim();
  if (storedHash !== computeVariantHash(variant)) {
    console.error(
      `[match-jd] ${variant.pdfFileName} is stale or missing. Run: pnpm build:cv`,
    );
    process.exit(1);
  }

  const jobText = await readFile(jobFile, "utf8");
  const cvText = await readPdfText(pdfPath);
  const keywords = mergeKeywords(DEFAULT_KEYWORDS, resumeTerms(resumeData));
  const result = compareKeywords(jobText, cvText, keywords);

  const inBase = new Set(findKeywords(resumeText(resumeData), keywords));
  const missingInVariant = result.missing.filter((name) => inBase.has(name));
  const missingEverywhere = result.missing.filter((name) => !inBase.has(name));

  console.log(`[match-jd] Variant: ${variant.slug} (${variant.pdfFileName})`);
  console.log(
    `[match-jd] Coverage: ${Math.round(result.coverage * 100)}% (${result.matched.length}/${result.inJob.length} job keywords found in the PDF)`,
  );
  console.log(`\nMatched: ${result.matched.join(", ") || "none"}`);
  console.log(
    `\nMissing, but the base CV has it (pull into the variant): ${missingInVariant.join(", ") || "none"}`,
  );
  console.log(
    `\nMissing everywhere (add only if it is true, check profile/HISTORY.md): ${missingEverywhere.join(", ") || "none"}`,
  );
}

main().catch((error) => {
  console.error("[match-jd] Failed:", error);
  process.exit(1);
});
