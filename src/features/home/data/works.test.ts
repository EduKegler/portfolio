import { describe, expect, it } from "vitest";
import { resumeData } from "@/features/resume/data/resume-data";
import { highlightsByCompany, works } from "./works";

function cvText(company: string): string {
  const job = resumeData.jobs.find((item) => item.company === company);
  return [job?.bullets?.join(" "), resumeData.summary].join(" ");
}

function numbers(claim: string): string[] {
  return claim.match(/\d[\d,.]*/g) ?? [];
}

const claims = [
  ...works.map((work) => ({ company: work.company, claim: work.outcome })),
  ...Object.entries(highlightsByCompany).flatMap(([company, items]) => items.map((claim) => ({ company, claim }))),
];

describe("home claims", () => {
  it.each(works)("$title belongs to a company in the CV", (work) => {
    expect(resumeData.jobs.map((job) => job.company)).toContain(work.company);
  });

  it.each(claims)("$company: every number in '$claim' is in the CV", ({ company, claim }) => {
    for (const value of numbers(claim)) {
      expect(cvText(company)).toContain(value);
    }
  });
});
