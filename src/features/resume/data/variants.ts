import { applyOverrides } from "@/features/resume/lib/apply-overrides";
import { resumeData } from "./resume-data";
import type { ResumeData, ResumeOverrides } from "./types";
import { primexOverrides } from "./variants/primex";

export type ResumeVariant = {
  slug: string;
  route: string;
  pdfFileName: string;
  hashFileName: string;
  data: ResumeData;
};

function defineVariant(slug: string, overrides: ResumeOverrides): ResumeVariant {
  return {
    slug,
    route: `/resume/${slug}`,
    pdfFileName: `cv-${slug}.pdf`,
    hashFileName: `cv-${slug}.hash`,
    data: applyOverrides(resumeData, overrides),
  };
}

export const resumeDefaultVariant: ResumeVariant = {
  slug: "default",
  route: "/resume",
  pdfFileName: "cv.pdf",
  hashFileName: "cv.hash",
  data: resumeData,
};

// New variant: add an overrides file in ./variants and register it here.
export const TAILORED_VARIANTS: ResumeVariant[] = [
  defineVariant("primex", primexOverrides),
];

export const RESUME_VARIANTS: ResumeVariant[] = [
  resumeDefaultVariant,
  ...TAILORED_VARIANTS,
];

export function findVariant(slug: string): ResumeVariant | undefined {
  return RESUME_VARIANTS.find((variant) => variant.slug === slug);
}
