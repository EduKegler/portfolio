import { readFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import { resumeData } from "../src/features/resume/data/resume-data";
import { PDF_PATH } from "./lib/paths";

const OLD_PDF = "/tmp/cv-old.pdf";
const NEW_PDF = PDF_PATH;

type ParsedPdf = {
  label: string;
  bytes: number;
  pages: number;
  text: string;
  info: Record<string, unknown>;
};

async function parsePdf(label: string, path: string): Promise<ParsedPdf> {
  const buffer = await readFile(path);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  try {
    const text = await parser.getText();
    const info = await parser.getInfo();
    return {
      label,
      bytes: buffer.byteLength,
      pages: text.total,
      text: text.text,
      info: info as unknown as Record<string, unknown>,
    };
  } finally {
    await parser.destroy();
  }
}

type Check = {
  name: string;
  run: (pdf: ParsedPdf) => { ok: boolean; detail: string };
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
    name: "Extraction yields non-empty text",
    run: (pdf) => ({
      ok: pdf.text.trim().length > 500,
      detail: `${pdf.text.length} chars extracted`,
    }),
  },
  {
    name: "All canonical section headers present",
    run: (pdf) => {
      const lowered = pdf.text.toLowerCase();
      const missing = SECTION_TITLES.filter(
        (t) => !lowered.includes(t.toLowerCase()),
      );
      return {
        ok: missing.length === 0,
        detail:
          missing.length === 0
            ? `5/5 sections found`
            : `missing: ${missing.join(", ")}`,
      };
    },
  },
  {
    name: "Sections in expected order",
    run: (pdf) => {
      const lowered = pdf.text.toLowerCase();
      const indices = SECTION_TITLES.map((t) =>
        lowered.indexOf(t.toLowerCase()),
      );
      if (indices.some((i) => i === -1))
        return { ok: false, detail: "section missing, can't order-check" };
      for (let i = 1; i < indices.length; i += 1) {
        if (indices[i] < indices[i - 1]) {
          return {
            ok: false,
            detail: `"${SECTION_TITLES[i]}" before "${SECTION_TITLES[i - 1]}"`,
          };
        }
      }
      return { ok: true, detail: "summary → experience → skills → edu → lang" };
    },
  },
  {
    name: "All bullets preserved (≥40-char substring match)",
    run: (pdf) => {
      const norm = pdf.text.replace(/\s+/g, " ");
      const bullets = resumeData.jobs.flatMap((j) => j.bullets ?? []);
      const missing = bullets.filter((b) => {
        const snippet = b.slice(0, 40).replace(/\s+/g, " ");
        return !norm.includes(snippet);
      });
      return {
        ok: missing.length === 0,
        detail: `${bullets.length - missing.length}/${bullets.length} bullets recognized`,
      };
    },
  },
  {
    name: "Contact fields as selectable text",
    run: (pdf) => {
      const norm = pdf.text.replace(/\s+/g, " ");
      const fields = [
        { label: "email", value: resumeData.contact.email },
        {
          label: "phone",
          value: resumeData.contact.phone.replace(/\s+/g, " "),
        },
        { label: "portfolio", value: resumeData.contact.portfolio.label },
        { label: "linkedin", value: resumeData.contact.linkedin.label },
        { label: "github", value: resumeData.contact.github.label },
      ];
      const missing = fields.filter((f) => !norm.includes(f.value));
      return {
        ok: missing.length === 0,
        detail:
          missing.length === 0
            ? `5/5 contacts extractable`
            : `missing: ${missing.map((m) => m.label).join(", ")}`,
      };
    },
  },
  {
    name: "Every company name extractable",
    run: (pdf) => {
      const norm = pdf.text.replace(/\s+/g, " ");
      const missing = resumeData.jobs
        .map((j) => j.company)
        .filter((c) => !norm.includes(c));
      return {
        ok: missing.length === 0,
        detail:
          missing.length === 0
            ? `4/4 companies found`
            : `missing: ${missing.join(", ")}`,
      };
    },
  },
  {
    name: "No ligature/encoding corruption (ﬁ ﬂ → fi fl)",
    run: (pdf) => {
      const suspect = /[ﬀ-ﬆ]/.test(pdf.text);
      return {
        ok: !suspect,
        detail: suspect
          ? "ligatures leaked through (fi/fl/ff)"
          : "no problematic ligatures",
      };
    },
  },
  {
    name: "No stray whitespace artifacts (zero-width, tabs, etc.)",
    run: (pdf) => {
      const zw = /[​-‍﻿]/.test(pdf.text);
      return {
        ok: !zw,
        detail: zw ? "zero-width chars present" : "clean whitespace",
      };
    },
  },
  {
    name: "Accented characters preserved (Florianópolis, Itajaí)",
    run: (pdf) => {
      const norm = pdf.text;
      const hasAccents =
        norm.includes("Florianópolis") && norm.includes("Itajaí");
      return {
        ok: hasAccents,
        detail: hasAccents
          ? "Portuguese diacritics preserved"
          : "accents lost / replaced",
      };
    },
  },
  {
    name: "Reasonable length (1-3 pages)",
    run: (pdf) => ({
      ok: pdf.pages >= 1 && pdf.pages <= 3,
      detail: `${pdf.pages} page${pdf.pages === 1 ? "" : "s"}`,
    }),
  },
];

function format(ok: boolean): string {
  return ok ? "PASS" : "FAIL";
}

async function main(): Promise<void> {
  const [oldPdf, newPdf] = await Promise.all([
    parsePdf("OLD (LaTeX)", OLD_PDF),
    parsePdf("NEW (HTML→Puppeteer)", NEW_PDF),
  ]);

  console.log("=".repeat(72));
  console.log(`${"".padEnd(48)}${oldPdf.label.padEnd(12)}${newPdf.label}`);
  console.log("=".repeat(72));

  console.log(
    `${"File size".padEnd(48)}${String(oldPdf.bytes).padEnd(12)}${newPdf.bytes}`,
  );
  console.log(
    `${"Pages".padEnd(48)}${String(oldPdf.pages).padEnd(12)}${newPdf.pages}`,
  );
  console.log(
    `${"Text chars extracted".padEnd(48)}${String(oldPdf.text.length).padEnd(
      12,
    )}${newPdf.text.length}`,
  );
  console.log("-".repeat(72));

  let oldPass = 0;
  let newPass = 0;
  for (const check of checks) {
    const oldResult = check.run(oldPdf);
    const newResult = check.run(newPdf);
    if (oldResult.ok) oldPass += 1;
    if (newResult.ok) newPass += 1;
    console.log(
      `${check.name.padEnd(48)}${format(oldResult.ok).padEnd(
        12,
      )}${format(newResult.ok)}`,
    );
    if (!oldResult.ok || !newResult.ok) {
      console.log(`  old: ${oldResult.detail}`);
      console.log(`  new: ${newResult.detail}`);
    }
  }
  console.log("-".repeat(72));
  console.log(
    `${"TOTAL".padEnd(48)}${`${oldPass}/${checks.length}`.padEnd(
      12,
    )}${newPass}/${checks.length}`,
  );
  console.log("=".repeat(72));

  // Raw metadata dump
  console.log("\n--- OLD metadata ---");
  console.log(JSON.stringify(oldPdf.info, null, 2).slice(0, 600));
  console.log("\n--- NEW metadata ---");
  console.log(JSON.stringify(newPdf.info, null, 2).slice(0, 600));
}

main().catch((err) => {
  console.error("[ats-benchmark] failed:", err);
  process.exit(1);
});
