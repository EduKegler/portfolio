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
    "Senior Frontend Engineer (8 years) specializing in authentication/onboarding and real-time trading interfaces. At Coinbase, raised sign-up conversion by 35% and cut auth flow load time by 20%. At Liquid Labs, built wallet-connected DeFi surfaces (AMM, CLOB, perps) with latency-sensitive UIs as the sole frontend engineer.",
  jobs: [
    {
      company: "NG.cash",
      companyDetail: "Brazilian fintech",
      role: "Senior Software Engineer",
      location: "Remote",
      period: "05/2026 - Present",
      stack: ["React Native", "TypeScript", "React", "Next.js", "Feature Flags", "PostHog", "Datadog", "AWS Lambda", "AWS CDK", "GitLab CI"],
      bullets: [
        "Delivered a new home navigation experience end to end in React Native, nearly solo, from RFC and design-system component to grid engine, skeleton loading, A/B experiment, feature flags, and observability, rolled out to 100% of adult users.",
        "Ported a full web e-commerce product to the mobile app, covering purchase flow, logged-in area, OTP login with auth guard, signup, and identity verification.",
        "Traced 3 of the top login errors to a single root cause in credential storage after password reset and shipped the fix; root-caused a biometric autologin failure by reading react-native-keychain internals.",
        "Cut AWS Lambda provisioned concurrency from 151 to 22 instances after finding paid capacity no service used, with a CDK rollout that kept a fallback in place.",
        "Removed ~40% of an onboarding web app's codebase and upgraded all dependencies, clearing open CVEs.",
      ],
    },
    {
      company: "Liquid Labs",
      companyDetail: "GTE / gte.xyz",
      role: "Senior Frontend Engineer (Contract)",
      location: "Remote",
      period: "03/2025 - 02/2026",
      stack: ["React", "TypeScript", "Next.js", "Zustand", "TanStack Query", "Storybook", "React Hook Form", "Zod", "Viem", "Privy", "Vitest", "WebSockets", "Amplitude", "Monorepo", "pnpm"],
      bullets: [
        "As the sole frontend engineer, built 5 core trading surfaces (AMM, CLOB, perpetuals, token launchpad, and portfolio tracking), delivering the platform frontend from zero to a public testnet used by over 1 million users in under a year.",
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
        "Reviewed code and wrote RFCs across a Turborepo monorepo, and interviewed frontend engineering candidates.",
      ],
    },
    {
      company: "Tech6",
      role: "Software Engineer",
      location: "Brazil",
      period: "06/2019 - 08/2021",
      stack: ["React", "TypeScript", "GraphQL", "JavaScript", "Storybook"],
      bullets: [
        "Developed and maintained a real estate platform used by 3,000 users, built with React, TypeScript, and GraphQL.",
        "Achieved UI consistency across 3 platforms by designing and building an internal design system with responsive design and cross-browser support, and supporting a redesign of the main website.",
        "Implemented an automated invoice generation system for transaction participants, replacing a manual process for every transaction.",
      ],
    },
    {
      company: "Todobit",
      role: "Junior Software Engineer",
      location: "Brazil",
      period: "12/2018 - 06/2019",
    },
    {
      company: "UFSC Telemedicine Lab",
      role: "Software Engineering Intern",
      location: "Brazil",
      period: "08/2018 - 12/2018",
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React", "React Native", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "Redux", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Storybook", "Vite", "Webpack", "HTML", "CSS"],
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
      items: ["Design Systems", "Accessibility (WCAG)", "SSR/SSG", "Caching Strategies", "Internationalization (i18n)", "Feature Flags", "RFC Authoring"],
    },
    {
      label: "Quality & Observability",
      items: ["Jest", "Vitest", "Cypress", "React Testing Library", "Core Web Vitals", "Datadog", "Amplitude", "PostHog"],
    },
    {
      label: "Delivery",
      items: ["CI/CD", "GitHub Actions", "GitLab CI", "Vercel", "Monorepo", "Turborepo", "pnpm"],
    },
    {
      label: "AI Tools",
      items: ["Claude Code", "Codex", "Prompt Engineering", "MCP"],
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
