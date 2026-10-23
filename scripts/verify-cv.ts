import { readFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import type { ResumeData } from "../src/features/resume/data/types";
import { VARIANT_PATHS } from "./lib/paths";

type Check = {
  name: string;
  run: (
    text: string,
    numpages: number,
    data: ResumeData,
  ) => string | null;
};

const SECTION_TITLES = [
  "Professional Summary",
  "Work Experience",
  "Skills",
  "Education",
  "Languages",
];

const checks: Check[] = [
  {
    name: "PDF has 2-3 pages (ATS-friendly length)",
    run: (_text, numpages) =>
      numpages >= 2 && numpages <= 3
        ? null
        : `expected 2-3 pages, got ${numpages}`,
  },
  {
    name: "Sections appear in expected order",
    run: (text) => {
      // Case-insensitive: the PDF renders headings in UPPERCASE via CSS
      // text-transform, but modern ATS parsers normalize case when matching
      // canonical section names. Accept both.
      const lowered = text.toLowerCase();
      const indices = SECTION_TITLES.map((title) => ({
        title,
        index: lowered.indexOf(title.toLowerCase()),
      }));
      const missing = indices.filter((entry) => entry.index === -1);
      if (missing.length > 0) {
        return `missing sections: ${missing.map((m) => m.title).join(", ")}`;
      }
      for (let i = 1; i < indices.length; i += 1) {
        if (indices[i].index < indices[i - 1].index) {
          return `section out of order: "${indices[i].title}" before "${indices[i - 1].title}"`;
        }
      }
      return null;
    },
  },
  {
    name: "All bullets preserved",
    run: (text, _numpages, data) => {
      const normalizedText = text.replace(/\s+/g, " ");
      const allBullets = data.jobs.flatMap((job) => job.bullets ?? []);
      const missing = allBullets
        .map((bullet) => bullet.slice(0, 40).replace(/\s+/g, " "))
        .filter((snippet) => !normalizedText.includes(snippet));
      if (missing.length > 0) {
        return `missing bullet snippets:\n  - ${missing.join("\n  - ")}`;
      }
      return null;
    },
  },
  {
    name: "Contact details (email, phone, portfolio) present as text",
    run: (text, _numpages, data) => {
      const normalized = text.replace(/\s+/g, " ");
      const expected = [
        data.contact.email,
        data.contact.phone.replace(/\s+/g, " "),
        data.contact.portfolio.label,
        data.contact.linkedin.label,
        data.contact.github.label,
      ];
      const missing = expected.filter((value) => !normalized.includes(value));
      if (missing.length > 0) {
        return `missing contact fields: ${missing.join(", ")}`;
      }
      return null;
    },
  },
  {
    name: "Every company name present",
    run: (text, _numpages, data) => {
      const normalized = text.replace(/\s+/g, " ");
      const missing = data.jobs
        .map((job) => job.company)
        .filter((company) => !normalized.includes(company));
      if (missing.length > 0) {
        return `missing companies: ${missing.join(", ")}`;
      }
      return null;
    },
  },
];

async function verifyVariant(
  pdfPath: string,
  data: ResumeData,
  slug: string,
): Promise<number> {
  const buffer = await readFile(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  let textResult;
  try {
    textResult = await parser.getText();
  } finally {
    await parser.destroy();
  }

  const results = checks.map((check) => ({
    name: check.name,
    error: check.run(textResult.text, textResult.total, data),
  }));

  let failed = 0;
  for (const result of results) {
    if (result.error === null) {
      console.log(`[verify-cv] [${slug}] PASS  ${result.name}`);
    } else {
      console.error(`[verify-cv] [${slug}] FAIL  ${result.name}`);
      console.error(`  ${result.error}`);
      failed += 1;
    }
  }

  return failed;
}

async function main(): Promise<void> {
  let totalFailed = 0;
  let totalChecks = 0;
  for (const { variant, pdfPath } of VARIANT_PATHS) {
    const failed = await verifyVariant(pdfPath, variant.data, variant.slug);
    totalFailed += failed;
    totalChecks += checks.length;
  }

  if (totalFailed > 0) {
    console.error(`\n[verify-cv] ${totalFailed} check(s) failed.`);
    process.exit(1);
  }

  console.log(`\n[verify-cv] All ${totalChecks} checks passed.`);
}

main().catch((error) => {
  console.error("[verify-cv] Failed:", error);
  process.exit(1);
});
