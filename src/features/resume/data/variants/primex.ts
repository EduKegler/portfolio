import type { ResumeOverrides } from "@/features/resume/data/types";

// Product engineer angle: API design, data modeling, onchain state.
export const primexOverrides: ResumeOverrides = {
  title: "Senior Product Engineer",
  summary:
    "Senior Product Engineer (8 years) specializing in real-time trading interfaces, API design, and data modeling. Shipped measurable outcomes at scale (+35% signup conversion, −20% auth flow load time at Coinbase) and led Web3 wallet-connected DeFi surfaces (AMM, CLOB, perps) with latency-sensitive UIs at Liquid Labs.",
  jobs: {
    "Liquid Labs": {
      stack: ["React", "TypeScript", "Next.js", "Zustand", "TanStack Query", "Storybook", "React Hook Form", "Zod", "Viem", "Privy", "Vitest", "WebSockets", "REST", "Amplitude", "Monorepo", "pnpm"],
      bullets: [
        "As the sole frontend engineer, built 5 core trading surfaces (AMM, CLOB, perpetuals, token launchpad, and portfolio tracking), delivering the platform frontend from zero to a public testnet used by 700k+ users in under a year.",
        "Built and owned the internal design system with 20+ Storybook components, using Zustand for client state, TanStack Query for server cache, and React Hook Form + Zod for schema-validated forms.",
        "Implemented wallet connectivity and onchain state using Privy and Viem, supporting wallet login, session handling, multicall reads, and transaction flows from signing to settlement confirmation.",
        "Built real-time portfolio and trading UIs powered by WebSocket streams for balances, PnL, positions, and order execution, co-designing API contracts and data models with the backend team and defining normalization rules for high-frequency updates.",
        "Used Codex and Claude Code for scaffolding, refactors, and test coverage across the monorepo, with production changes reviewed and 90%+ frontend test coverage maintained via Vitest and React Testing Library.",
      ],
    },
    "Coinbase": {
      stack: ["React", "TypeScript", "GraphQL", "REST", "OAuth/OIDC", "Jest", "Vite", "Cypress", "React Testing Library", "Storybook", "i18n", "Feature Flags", "Datadog", "Amplitude", "Turborepo", "Monorepo"],
    },
  },
  skills: {
    "Frontend": ["React", "React Native", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Storybook", "Vite", "HTML", "CSS"],
    "API/Backend": ["API Design", "Data Modeling", "REST APIs", "GraphQL", "WebSockets", "Node.js"],
    "AI Tools": ["Codex", "Claude Code", "LLM Integration"],
    "Web3/Trading": ["Viem", "Privy", "Wagmi", "DeFi", "AMM", "CLOB", "Perpetuals", "Multicall", "Transaction Flows", "Real-time Data UIs"],
  },
};
