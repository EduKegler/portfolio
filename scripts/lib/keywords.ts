export type Keyword = {
  name: string;
  aliases: string[];
};

export type KeywordComparison = {
  inJob: string[];
  matched: string[];
  missing: string[];
  coverage: number;
};

// Terms an ATS usually scores in a tech job description. Aliases avoid
// plain English words ("rest", "express", "go") that would match by accident.
export const DEFAULT_KEYWORDS: Keyword[] = [
  { name: "JavaScript", aliases: ["JS", "ES6"] },
  { name: "TypeScript", aliases: [] },
  { name: "HTML", aliases: ["HTML5"] },
  { name: "CSS", aliases: ["CSS3"] },
  { name: "Sass", aliases: ["SCSS"] },
  { name: "React", aliases: ["ReactJS", "React.js"] },
  { name: "React Native", aliases: [] },
  { name: "Expo", aliases: [] },
  { name: "Next.js", aliases: ["NextJS"] },
  { name: "Vue.js", aliases: ["Vue", "VueJS"] },
  { name: "Angular", aliases: [] },
  { name: "Svelte", aliases: [] },
  { name: "Redux", aliases: [] },
  { name: "Zustand", aliases: [] },
  { name: "TanStack Query", aliases: ["React Query"] },
  { name: "React Hook Form", aliases: [] },
  { name: "Zod", aliases: [] },
  { name: "Tailwind CSS", aliases: ["Tailwind", "TailwindCSS"] },
  { name: "Storybook", aliases: [] },
  { name: "Webpack", aliases: [] },
  { name: "Vite", aliases: [] },
  { name: "Design Systems", aliases: ["design system"] },
  { name: "Accessibility", aliases: ["a11y", "WCAG"] },
  { name: "Core Web Vitals", aliases: ["web vitals"] },
  { name: "SSR", aliases: ["server-side rendering", "server side rendering"] },
  { name: "Micro-frontends", aliases: ["microfrontends", "micro frontends"] },
  { name: "i18n", aliases: ["internationalization", "localization"] },
  { name: "Mobile", aliases: [] },
  { name: "iOS", aliases: [] },
  { name: "Android", aliases: [] },
  { name: "Swift", aliases: [] },
  { name: "Kotlin", aliases: [] },
  { name: "Node.js", aliases: ["NodeJS", "Node"] },
  { name: "NestJS", aliases: [] },
  { name: "Express.js", aliases: ["ExpressJS"] },
  { name: "Python", aliases: [] },
  { name: "Django", aliases: [] },
  { name: "FastAPI", aliases: [] },
  { name: "Java", aliases: [] },
  { name: "Spring Boot", aliases: [] },
  { name: "Golang", aliases: [] },
  { name: "Rust", aliases: [] },
  { name: "Ruby on Rails", aliases: ["Rails"] },
  { name: "PHP", aliases: [] },
  { name: "Laravel", aliases: [] },
  { name: "C#", aliases: [] },
  { name: ".NET", aliases: [] },
  { name: "GraphQL", aliases: [] },
  { name: "REST APIs", aliases: ["RESTful", "REST API"] },
  { name: "tRPC", aliases: [] },
  { name: "WebSockets", aliases: ["WebSocket"] },
  { name: "API Design", aliases: [] },
  { name: "Data Modeling", aliases: ["data modelling"] },
  { name: "Microservices", aliases: ["microservice"] },
  { name: "System Design", aliases: ["systems design"] },
  { name: "SQL", aliases: [] },
  { name: "PostgreSQL", aliases: ["Postgres"] },
  { name: "MySQL", aliases: [] },
  { name: "MongoDB", aliases: [] },
  { name: "Redis", aliases: [] },
  { name: "DynamoDB", aliases: [] },
  { name: "Prisma", aliases: [] },
  { name: "Kafka", aliases: [] },
  { name: "AWS", aliases: ["Amazon Web Services"] },
  { name: "AWS Lambda", aliases: ["Lambda"] },
  { name: "AWS CDK", aliases: ["CDK"] },
  { name: "Serverless", aliases: [] },
  { name: "GCP", aliases: ["Google Cloud"] },
  { name: "Azure", aliases: [] },
  { name: "Docker", aliases: [] },
  { name: "Kubernetes", aliases: ["K8s"] },
  { name: "Terraform", aliases: [] },
  { name: "CI/CD", aliases: ["continuous integration"] },
  { name: "GitHub Actions", aliases: [] },
  { name: "Vercel", aliases: [] },
  { name: "Firebase", aliases: [] },
  { name: "Supabase", aliases: [] },
  { name: "Git", aliases: [] },
  { name: "Monorepo", aliases: ["monorepos"] },
  { name: "Turborepo", aliases: [] },
  { name: "Jest", aliases: [] },
  { name: "Vitest", aliases: [] },
  { name: "Cypress", aliases: [] },
  { name: "Playwright", aliases: [] },
  { name: "React Testing Library", aliases: ["Testing Library", "RTL"] },
  { name: "Unit Testing", aliases: ["unit tests", "unit test"] },
  { name: "E2E Testing", aliases: ["end-to-end", "end to end", "E2E"] },
  { name: "TDD", aliases: ["test-driven"] },
  { name: "Observability", aliases: ["monitoring"] },
  { name: "Datadog", aliases: [] },
  { name: "Sentry", aliases: [] },
  { name: "Grafana", aliases: [] },
  { name: "Feature Flags", aliases: ["feature flag", "feature toggles"] },
  { name: "A/B Testing", aliases: ["A/B test", "A/B tests", "experimentation"] },
  { name: "Analytics", aliases: [] },
  { name: "Amplitude", aliases: [] },
  { name: "Mixpanel", aliases: [] },
  { name: "PostHog", aliases: [] },
  { name: "Authentication", aliases: ["auth"] },
  { name: "OAuth", aliases: ["OAuth2", "OAuth 2.0"] },
  { name: "OIDC", aliases: ["OpenID Connect"] },
  { name: "SSO", aliases: ["single sign-on"] },
  { name: "Security", aliases: [] },
  { name: "Fintech", aliases: [] },
  { name: "Payments", aliases: [] },
  { name: "Stripe", aliases: [] },
  { name: "Crypto", aliases: ["cryptocurrency", "cryptocurrencies"] },
  { name: "Web3", aliases: [] },
  { name: "Blockchain", aliases: [] },
  { name: "Ethereum", aliases: ["EVM"] },
  { name: "Solidity", aliases: [] },
  { name: "Smart Contracts", aliases: ["smart contract"] },
  { name: "DeFi", aliases: [] },
  { name: "Wagmi", aliases: [] },
  { name: "Viem", aliases: [] },
  { name: "Ethers.js", aliases: ["ethers"] },
  { name: "Trading", aliases: [] },
  { name: "LLM", aliases: ["LLMs", "large language model", "large language models"] },
  { name: "Generative AI", aliases: ["GenAI", "gen AI"] },
  { name: "AI Agents", aliases: ["AI agent", "agentic"] },
  { name: "RAG", aliases: ["retrieval-augmented generation"] },
  { name: "MCP", aliases: ["Model Context Protocol"] },
  { name: "Prompt Engineering", aliases: [] },
  { name: "OpenAI", aliases: [] },
  { name: "Claude", aliases: [] },
  { name: "Figma", aliases: [] },
  { name: "Agile", aliases: [] },
  { name: "Scrum", aliases: [] },
  { name: "Code Review", aliases: ["code reviews"] },
  { name: "Mentoring", aliases: ["mentorship", "mentor"] },
  { name: "Technical Leadership", aliases: ["tech lead", "technical lead"] },
];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
}

function termPattern(term: string): RegExp {
  const body = term.trim().split(/\s+/).map(escapeRegExp).join("\\s+");
  return new RegExp(`(?<![\\p{L}\\p{N}.])${body}(?![\\p{L}\\p{N}])`, "iu");
}

export function findKeywords(text: string, keywords: Keyword[]): string[] {
  return keywords
    .filter((keyword) =>
      [keyword.name, ...keyword.aliases].some((term) =>
        termPattern(term).test(text),
      ),
    )
    .map((keyword) => keyword.name);
}

export function compareKeywords(
  jobText: string,
  cvText: string,
  keywords: Keyword[],
): KeywordComparison {
  const inJob = findKeywords(jobText, keywords);
  const inCv = new Set(findKeywords(cvText, keywords));
  const matched = inJob.filter((name) => inCv.has(name));
  const missing = inJob.filter((name) => !inCv.has(name));
  return {
    inJob,
    matched,
    missing,
    coverage: inJob.length === 0 ? 1 : matched.length / inJob.length,
  };
}

export function mergeKeywords(keywords: Keyword[], terms: string[]): Keyword[] {
  const known = new Set(
    keywords.flatMap((keyword) =>
      [keyword.name, ...keyword.aliases].map((term) => term.toLowerCase()),
    ),
  );
  const merged = [...keywords];
  for (const term of terms) {
    const lowered = term.toLowerCase();
    if (!known.has(lowered)) {
      known.add(lowered);
      merged.push({ name: term, aliases: [] });
    }
  }
  return merged;
}
