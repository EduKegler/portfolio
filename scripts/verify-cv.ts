import { readFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import { resumeData } from "../src/features/resume/data/resume-data";
import { PDF_PATH } from "./lib/paths";

type Check = {
  name: string;
  run: (text: string, numpages: number) => string | null;
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
    run: (text) => {
      const normalizedText = text.replace(/\s+/g, " ");
      const allBullets = resumeData.jobs.flatMap((job) => job.bullets ?? []);
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
    run: (text) => {
      const normalized = text.replace(/\s+/g, " ");
      const expected = [
        resumeData.contact.email,
        resumeData.contact.phone.replace(/\s+/g, " "),
        resumeData.contact.portfolio.label,
        resumeData.contact.linkedin.label,
        resumeData.contact.github.label,
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
    run: (text) => {
      const normalized = text.replace(/\s+/g, " ");
      const missing = resumeData.jobs
        .map((job) => job.company)
        .filter((company) => !normalized.includes(company));
      if (missing.length > 0) {
        return `missing companies: ${missing.join(", ")}`;
      }
      return null;
    },
  },
];

async function main(): Promise<void> {
  const buffer = await readFile(PDF_PATH);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  let textResult;
  try {
    textResult = await parser.getText();
  } finally {
    await parser.destroy();
  }

  const results = checks.map((check) => ({
    name: check.name,
    error: check.run(textResult.text, textResult.total),
  }));

  let failed = 0;
  for (const result of results) {
    if (result.error === null) {
      console.log(`[verify-cv] PASS  ${result.name}`);
    } else {
      console.error(`[verify-cv] FAIL  ${result.name}`);
      console.error(`  ${result.error}`);
      failed += 1;
    }
  }

  if (failed > 0) {
    console.error(`\n[verify-cv] ${failed} check(s) failed.`);
    process.exit(1);
  }

  console.log(`\n[verify-cv] All ${results.length} checks passed.`);
}

main().catch((error) => {
  console.error("[verify-cv] Failed:", error);
  process.exit(1);
});
