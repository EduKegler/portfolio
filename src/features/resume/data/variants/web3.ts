import type { ResumeOverrides } from "@/features/resume/data/types";

// Web3 frontend angle: trading surfaces, wallets and real-time data first.
export const web3Overrides: ResumeOverrides = {
  title: "Senior Frontend Engineer, Web3 & Trading",
  summary:
    "Senior Frontend Engineer (8 years), the last 5 in crypto and fintech. Sole frontend engineer at Liquid Labs (GTE), building 5 wallet-connected trading surfaces (AMM, CLOB, perps, token launchpad, portfolio) on real-time WebSocket data, from zero to a public testnet with over 1 million users. Before that, 3.5 years at Coinbase on sign-in and sign-up, with +35% signup conversion and −20% auth flow load time.",
  jobs: {
    "NG.cash": {
      bullets: [
        "Delivered a new home navigation experience end to end in React Native, nearly solo, from RFC and design-system component to grid engine, skeleton loading, A/B experiment, feature flags, and observability, rolled out to 100% of adult users.",
        "Traced 3 of the top login errors to a single root cause in credential storage after password reset and shipped the fix; root-caused a biometric autologin failure by reading react-native-keychain internals.",
        "Cut AWS Lambda provisioned concurrency from 151 to 22 instances after finding paid capacity no service used, with a CDK rollout that kept a fallback in place.",
      ],
    },
  },
  skills: {
    "Web3/Trading": ["Viem", "Wagmi", "Privy", "Wallet Connectivity", "Transaction Flows", "DeFi", "AMM", "CLOB", "Perpetuals", "Token Launchpad", "Real-time Data UIs"],
  },
};
