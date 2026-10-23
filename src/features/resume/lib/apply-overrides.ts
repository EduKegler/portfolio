import type {
  ResumeData,
  ResumeOverrides,
} from "@/features/resume/data/types";

export function applyOverrides(
  base: ResumeData,
  overrides: ResumeOverrides,
): ResumeData {
  const jobOverrides = overrides.jobs ?? {};
  const skillOverrides = overrides.skills ?? {};

  const companies = new Set(base.jobs.map((job) => job.company));
  for (const company of Object.keys(jobOverrides)) {
    if (!companies.has(company)) {
      throw new Error(`Variant overrides unknown company: ${company}`);
    }
  }

  const labels = new Set(base.skills.map((group) => group.label));
  for (const label of Object.keys(skillOverrides)) {
    if (!labels.has(label)) {
      throw new Error(`Variant overrides unknown skill group: ${label}`);
    }
  }

  return {
    ...base,
    title: overrides.title ?? base.title,
    summary: overrides.summary ?? base.summary,
    jobs: base.jobs.map((job) => ({ ...job, ...jobOverrides[job.company] })),
    skills: base.skills.map((group) => ({
      ...group,
      items: skillOverrides[group.label] ?? group.items,
    })),
  };
}
