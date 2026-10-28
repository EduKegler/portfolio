import type {
  ResumeJobOverride,
  ResumeOverrides,
} from "@/features/resume/data/types";

type Fields = Record<string, unknown>;

const OVERRIDE_KEYS = ["title", "summary", "jobs", "skills"];
const JOB_KEYS = ["role", "stack", "bullets"];

function isFields(value: unknown): value is Fields {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function checkKeys(fields: Fields, allowed: string[], fail: (message: string) => never, where: string): void {
  for (const key of Object.keys(fields)) {
    if (!allowed.includes(key)) {
      fail(where ? `${where} has unknown key ${key}` : `unknown key ${key}`);
    }
  }
}

function optionalString(fields: Fields, key: string, fail: (message: string) => never, where: string): string | undefined {
  const value = fields[key];
  if (value === undefined) return undefined;
  if (typeof value !== "string") fail(`${where}${key} must be a string`);
  return value;
}

function optionalStringList(fields: Fields, key: string, fail: (message: string) => never, where: string): string[] | undefined {
  const value = fields[key];
  if (value === undefined) return undefined;
  if (!isStringList(value)) fail(`${where}${key} must be a list of strings`);
  return value;
}

function withoutUndefined<T extends object>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as T;
}

// Variants are JSON read from outside the repo, so their shape is checked here once.
export function parseOverrides(value: unknown, source: string): ResumeOverrides {
  const fail = (message: string): never => {
    throw new Error(`${source}: ${message}`);
  };
  if (!isFields(value)) fail("expected an object");
  const fields = value as Fields;
  checkKeys(fields, OVERRIDE_KEYS, fail, "");

  let jobs: Record<string, ResumeJobOverride> | undefined;
  if (fields.jobs !== undefined) {
    if (!isFields(fields.jobs)) fail("jobs must be an object");
    jobs = {};
    for (const [company, job] of Object.entries(fields.jobs as Fields)) {
      const where = `jobs.${company}`;
      if (!isFields(job)) fail(`${where} must be an object`);
      const jobFields = job as Fields;
      checkKeys(jobFields, JOB_KEYS, fail, where);
      jobs[company] = withoutUndefined({
        role: optionalString(jobFields, "role", fail, `${where}.`),
        stack: optionalStringList(jobFields, "stack", fail, `${where}.`),
        bullets: optionalStringList(jobFields, "bullets", fail, `${where}.`),
      });
    }
  }

  let skills: Record<string, string[]> | undefined;
  if (fields.skills !== undefined) {
    if (!isFields(fields.skills)) fail("skills must be an object");
    skills = {};
    for (const [label, items] of Object.entries(fields.skills as Fields)) {
      if (!isStringList(items)) fail(`skills.${label} must be a list of strings`);
      skills[label] = items as string[];
    }
  }

  return withoutUndefined({
    title: optionalString(fields, "title", fail, ""),
    summary: optionalString(fields, "summary", fail, ""),
    jobs,
    skills,
  });
}
