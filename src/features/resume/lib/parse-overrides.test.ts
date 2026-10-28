import { describe, expect, it } from "vitest";
import { parseOverrides } from "./parse-overrides";

describe("parseOverrides", () => {
  it("accepts a full override", () => {
    const value = {
      title: "Senior Product Engineer",
      summary: "Summary.",
      jobs: { Acme: { role: "Lead", stack: ["React"], bullets: ["Built A."] } },
      skills: { Frontend: ["React"] },
    };
    expect(parseOverrides(value, "acme.json")).toEqual(value);
  });

  it("accepts an empty object", () => {
    expect(parseOverrides({}, "empty.json")).toEqual({});
  });

  it("rejects a non-object", () => {
    expect(() => parseOverrides([], "list.json")).toThrow("list.json");
  });

  it("rejects an unknown top-level key", () => {
    expect(() => parseOverrides({ titel: "x" }, "typo.json")).toThrow(
      "typo.json: unknown key titel",
    );
  });

  it("rejects a job override with a wrong type", () => {
    expect(() =>
      parseOverrides({ jobs: { Acme: { bullets: "Built A." } } }, "acme.json"),
    ).toThrow("acme.json: jobs.Acme.bullets must be a list of strings");
  });

  it("rejects a job override that changes the period", () => {
    expect(() =>
      parseOverrides({ jobs: { Acme: { period: "2020" } } }, "acme.json"),
    ).toThrow("acme.json: jobs.Acme has unknown key period");
  });

  it("rejects a skill group that is not a list of strings", () => {
    expect(() =>
      parseOverrides({ skills: { Frontend: [1] } }, "acme.json"),
    ).toThrow("acme.json: skills.Frontend must be a list of strings");
  });
});
