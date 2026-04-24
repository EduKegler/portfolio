import type { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "Eduardo Kegler",
  title: "Senior Frontend Engineer",
  contact: {
    location: "Florianópolis, Santa Catarina, Brazil",
    phone: "+55 48 98414-8966",
    email: "eduardokegler1@gmail.com",
    linkedin: {
      label: "linkedin.com/in/eduardokegler",
      url: "https://www.linkedin.com/in/eduardokegler/",
    },
    github: {
      label: "github.com/EduKegler",
      url: "https://github.com/EduKegler",
    },
    portfolio: {
      label: "kegler.dev",
      url: "https://kegler.dev/",
    },
  },
  summary:
    "Senior Frontend Engineer (7+ years) specializing in authentication/onboarding and real-time trading interfaces. Shipped measurable outcomes at scale (+35% signup conversion, −20% auth flow load time at Coinbase) and led Web3 wallet-connected DeFi surfaces (AMM, CLOB, perps) with latency-sensitive UIs at Liquid Labs.",
  jobs: [
    {
      company: "Liquid Labs",
      companyDetail: "GTE / gte.xyz",
      role: "Senior Frontend Engineer (Contract)",
      location: "Remote",
      period: "03/2025 - 02/2026",
      stack: ["React", "TypeScript", "Next.js", "Zustand", "TanStack Query", "Storybook", "React Hook Form", "Zod", "Viem", "Privy", "Vitest", "WebSockets", "Amplitude", "Monorepo", "pnpm"],
      bullets: [
        "As the sole frontend engineer, built 5 core trading surfaces (AMM, CLOB, perpetuals, token launchpad, and portfolio tracking), delivering the platform frontend from zero to a public testnet used by 700k+ users in under a year.",
        "Built and owned the internal design system with 20+ Storybook components, using Zustand for client state, TanStack Query for server cache, and React Hook Form + Zod for schema-validated forms.",
        "Implemented wallet connectivity and authentication using Privy and Viem, supporting wallet login, session handling, and transaction flows across the trading platform.",
        "Built real-time portfolio and trading UIs powered by WebSocket streams for balances, PnL, open positions, and order execution, improving large-dataset rendering and Core Web Vitals on live trading screens.",
        "Used Codex and Claude Code for scaffolding, refactors, and test coverage across the monorepo, with production changes reviewed and 90%+ frontend test coverage maintained via Vitest and React Testing Library.",
      ],
    },
    {
      company: "Coinbase",
      role: "Software Engineer, Frontend",
      location: "San Francisco, CA, USA",
      period: "08/2021 - 03/2025",
      stack: ["React", "TypeScript", "GraphQL", "OAuth/OIDC", "Jest", "Vite", "Cypress", "React Testing Library", "Storybook", "i18n", "Feature Flags", "Datadog", "Amplitude", "Turborepo", "Monorepo"],
      bullets: [
        "Reduced auth friction for 200,000 daily users by implementing accessible (WCAG), responsive, cross-browser sign-in flows with OAuth for Apple, Google, and Ethereum Wallet.",
        "Shipped the App Switcher across Coinbase Help Center, Tracer, and Commerce with i18n and Amplitude analytics, increasing cross-product engagement among retail web users by 0.45%.",
        "Led Unified Signup 2.0, A/B-testing sign-in and sign-up flows for Apple and Google behind feature flags, resulting in a 35% increase in sign-up conversion rate.",
        "Optimized Core Web Vitals in key authentication flows, reducing load times by 20% through targeted rendering and caching improvements.",
        "Drove quality through code review and RFC authoring across a Turborepo monorepo, and contributed to hiring through frontend engineering interviews.",
      ],
    },
    {
      company: "Tech6",
      role: "Software Engineer",
      location: "Brazil",
      period: "06/2019 - 08/2021",
      stack: ["React", "TypeScript", "GraphQL", "JavaScript", "Storybook"],
      bullets: [
        "Improved performance and user experience for 3,000 users by developing and maintaining a real estate platform using TypeScript, React, and GraphQL.",
        "Achieved UI consistency across 3 platforms by designing and building an internal design system with responsive design and cross-browser support, and supporting a redesign of the main website.",
        "Increased operational efficiency by 30% by implementing an automated invoice generation system for transaction participants.",
      ],
    },
    {
      company: "Todobit",
      role: "Junior Software Engineer",
      location: "Brazil",
      period: "08/2018 - 06/2019",
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "Redux", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Storybook", "Vite", "Webpack", "HTML", "CSS"],
    },
    {
      label: "API/Backend",
      items: ["GraphQL", "Node.js", "REST APIs", "WebSockets"],
    },
    {
      label: "Auth/Identity",
      items: ["OAuth", "OIDC", "Wallet Connectivity"],
    },
    {
      label: "Architecture",
      items: ["Design Systems", "Responsive Design", "Accessibility (WCAG)", "Cross-browser Compatibility", "SSR/SSG", "Caching Strategies", "Internationalization (i18n)", "Feature Flags", "RFC Authoring"],
    },
    {
      label: "Quality & Observability",
      items: ["Jest", "Vitest", "Cypress", "React Testing Library", "Automated Testing", "Code Review", "Interviewing/Hiring", "Core Web Vitals", "Datadog", "Amplitude", "Analytics & Telemetry"],
    },
    {
      label: "Delivery",
      items: ["CI/CD", "GitHub Actions", "Vercel", "Git", "Monorepo", "Turborepo", "pnpm", "Systems Design"],
    },
    {
      label: "AI Tools",
      items: ["Codex", "Claude Code", "Embeddings", "LLM Integration", "Prompt Engineering"],
    },
    {
      label: "Web3/Trading",
      items: ["Viem", "Privy", "Wagmi", "DeFi", "AMM", "CLOB", "Perpetuals", "Real-time Data UIs"],
    },
  ],
  education: [
    {
      school: "Universidade do Vale do Itajaí",
      degree: "Bachelor's Degree in Computer Science",
      period: "2017 - 2021",
      location: "Brazil",
    },
  ],
  languages: "Portuguese (Native), English (Advanced)",
};
