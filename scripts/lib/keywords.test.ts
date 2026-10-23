import { describe, expect, it } from "vitest";
import {
  compareKeywords,
  findKeywords,
  mergeKeywords,
  type Keyword,
} from "./keywords";

const dictionary: Keyword[] = [
  { name: "React", aliases: ["ReactJS", "React.js"] },
  { name: "React Native", aliases: ["RN"] },
  { name: "TypeScript", aliases: [] },
  { name: "Node.js", aliases: ["NodeJS", "Node"] },
  { name: "C#", aliases: [] },
  { name: "CI/CD", aliases: [] },
];

describe("findKeywords", () => {
  it("matches names and aliases without caring about case", () => {
    expect(findKeywords("We use reactjs and typescript.", dictionary)).toEqual([
      "React",
      "TypeScript",
    ]);
  });

  it("does not match a term inside a longer word", () => {
    expect(findKeywords("Reactive streams, TypeScripting", dictionary)).toEqual(
      [],
    );
  });

  it("does not read the suffix of a dotted name as its own term", () => {
    const withJs: Keyword[] = [...dictionary, { name: "JavaScript", aliases: ["JS"] }];
    expect(findKeywords("Built with Next.js and Node.js", withJs)).toEqual([
      "Node.js",
    ]);
  });

  it("handles terms with symbols", () => {
    expect(
      findKeywords("Experience with C#, Node.js and CI/CD pipelines", dictionary),
    ).toEqual(["Node.js", "C#", "CI/CD"]);
  });

  it("matches terms across line breaks and extra spaces", () => {
    expect(findKeywords("React\n  Native apps", dictionary)).toEqual([
      "React",
      "React Native",
    ]);
  });
});

describe("compareKeywords", () => {
  it("lists what the job asks for and the CV lacks", () => {
    const result = compareKeywords(
      "Senior React and TypeScript engineer, Node.js a plus",
      "Built apps with React and Node",
      dictionary,
    );
    expect(result.inJob).toEqual(["React", "TypeScript", "Node.js"]);
    expect(result.matched).toEqual(["React", "Node.js"]);
    expect(result.missing).toEqual(["TypeScript"]);
    expect(result.coverage).toBeCloseTo(2 / 3);
  });

  it("reports full coverage when the job names no known keyword", () => {
    const result = compareKeywords("Great team, fast pace", "React", dictionary);
    expect(result.inJob).toEqual([]);
    expect(result.coverage).toBe(1);
  });
});

describe("mergeKeywords", () => {
  it("adds resume terms that the dictionary does not know", () => {
    const merged = mergeKeywords(dictionary, ["Privy", "react", "Viem"]);
    expect(merged.map((keyword) => keyword.name)).toEqual([
      ...dictionary.map((keyword) => keyword.name),
      "Privy",
      "Viem",
    ]);
  });
});
