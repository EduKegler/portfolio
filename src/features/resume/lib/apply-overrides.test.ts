import { describe, expect, it } from "vitest";
import type { ResumeData } from "@/features/resume/data/types";
import { applyOverrides } from "./apply-overrides";

const base: ResumeData = {
  name: "Ana",
  title: "Frontend Engineer",
  contact: {
    location: "Brazil",
    email: "ana@example.com",
    linkedin: { label: "in/ana", url: "https://linkedin.com/in/ana" },
    github: { label: "gh/ana", url: "https://github.com/ana" },
    portfolio: { label: "ana.dev", url: "https://ana.dev" },
  },
  summary: "Base summary.",
  jobs: [
    {
      company: "Acme",
      role: "Engineer",
      location: "Remote",
      period: "01/2024 - Present",
      stack: ["React"],
      bullets: ["Built A.", "Built B."],
    },
    {
      company: "Globex",
      role: "Intern",
      location: "Brazil",
      period: "01/2023 - 12/2023",
    },
  ],
  skills: [
    { label: "Frontend", items: ["React", "CSS"] },
    { label: "Backend", items: ["Node.js"] },
  ],
  education: [],
  languages: "English",
};

describe("applyOverrides", () => {
  it("returns the base unchanged when there are no overrides", () => {
    expect(applyOverrides(base, {})).toEqual(base);
  });

  it("replaces title and summary", () => {
    const result = applyOverrides(base, {
      title: "Product Engineer",
      summary: "Tailored summary.",
    });
    expect(result.title).toBe("Product Engineer");
    expect(result.summary).toBe("Tailored summary.");
    expect(result.jobs).toEqual(base.jobs);
  });

  it("overrides only the named fields of the named job", () => {
    const result = applyOverrides(base, {
      jobs: { Acme: { stack: ["React", "REST"] } },
    });
    expect(result.jobs[0]).toEqual({ ...base.jobs[0], stack: ["React", "REST"] });
    expect(result.jobs[1]).toEqual(base.jobs[1]);
  });

  it("keeps dates and companies from the base so the timeline never drifts", () => {
    const result = applyOverrides(base, {
      jobs: { Acme: { bullets: ["Tailored A."] } },
    });
    expect(result.jobs.map((job) => [job.company, job.period])).toEqual(
      base.jobs.map((job) => [job.company, job.period]),
    );
  });

  it("replaces items of a skill group and keeps group order", () => {
    const result = applyOverrides(base, {
      skills: { Backend: ["API Design", "Node.js"] },
    });
    expect(result.skills).toEqual([
      { label: "Frontend", items: ["React", "CSS"] },
      { label: "Backend", items: ["API Design", "Node.js"] },
    ]);
  });

  it("throws when an override names a company that is not in the base", () => {
    expect(() =>
      applyOverrides(base, { jobs: { Initech: { bullets: [] } } }),
    ).toThrow(/Initech/);
  });

  it("throws when an override names a skill group that is not in the base", () => {
    expect(() =>
      applyOverrides(base, { skills: { Mobile: ["React Native"] } }),
    ).toThrow(/Mobile/);
  });

  it("does not mutate the base", () => {
    const snapshot = structuredClone(base);
    applyOverrides(base, {
      title: "X",
      jobs: { Acme: { bullets: ["Y"] } },
      skills: { Frontend: ["Z"] },
    });
    expect(base).toEqual(snapshot);
  });
});
