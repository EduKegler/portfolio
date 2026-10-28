import { applyOverrides } from "@/features/resume/lib/apply-overrides";
import { resumeData } from "./resume-data";
import type { ResumeData, ResumeOverrides } from "./types";

export type ResumeVariant = {
  slug: string;
  route: string;
  pdfFileName: string;
  hashFileName: string;
  data: ResumeData;
};

export function defineVariant(slug: string, overrides: ResumeOverrides): ResumeVariant {
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
