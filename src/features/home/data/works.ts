import type { StaticImageData } from "next/image";
import gte from "@/assets/works/gte.webp";
import signUp from "@/assets/works/sign-up.webp";
import signIn from "@/assets/works/sign-in.webp";
import appSwitcher from "@/assets/works/app-switcher.webp";
import intelliAgent from "@/assets/works/fathom.webp";

export type Work = {
  id: string;
  title: string;
  company: string;
  years: string;
  stack: string[];
  note: string;
  outcome: string;
  image: StaticImageData;
  alt: string;
  orientation: "landscape" | "portrait";
  link?: { url: string; label: string };
};

export const works: Work[] = [
  {
    id: "gte",
    title: "GTE",
    company: "Liquid Labs",
    years: "2025–2026",
    stack: ["React", "TypeScript", "Next.js", "Viem", "Privy", "WebSockets"],
    note: "Sole frontend engineer. Built the AMM, order book, perpetuals, token launchpad and portfolio tracker from zero to a public testnet in under a year.",
    outcome: "1M+ testnet users",
    image: gte,
    alt: "GTE trading screen with a price chart, live trades and a swap panel",
    orientation: "landscape",
    link: { url: "https://gte.xyz", label: "gte.xyz" },
  },
  {
    id: "unified-signup",
    title: "Unified Signup 2.0",
    company: "Coinbase",
    years: "2021–2025",
    stack: ["React", "TypeScript", "Feature Flags", "Amplitude"],
    note: "Led the rework of sign-in and sign-up, A/B testing new Apple and Google flows behind feature flags.",
    outcome: "+35% sign-up conversion",
    image: signUp,
    alt: "Coinbase account creation screen with email, Google and Apple options",
    orientation: "portrait",
  },
  {
    id: "sign-in",
    title: "Sign In",
    company: "Coinbase",
    years: "2021–2025",
    stack: ["React", "TypeScript", "OAuth/OIDC", "WCAG"],
    note: "Built accessible, responsive, cross-browser sign-in with OAuth for Apple, Google and Ethereum wallets.",
    outcome: "200,000 daily users",
    image: signIn,
    alt: "Coinbase wallet sign-in screen with a QR code",
    orientation: "landscape",
  },
  {
    id: "app-switcher",
    title: "App Switcher",
    company: "Coinbase",
    years: "2021–2025",
    stack: ["React", "TypeScript", "i18n", "Amplitude"],
    note: "Shipped across Coinbase Help Center, Tracer and Commerce, with i18n and Amplitude analytics.",
    outcome: "+0.45% cross-product engagement",
    image: appSwitcher,
    alt: "Coinbase home with the app switcher menu open",
    orientation: "landscape",
  },
  {
    id: "intelliagent",
    title: "IntelliAgent",
    company: "Tech6",
    years: "2019–2021",
    stack: ["React", "TypeScript", "GraphQL", "Storybook"],
    note: "Developed and maintained a real estate platform in React, TypeScript and GraphQL, and built its internal design system, shared by 3 platforms.",
    outcome: "3,000 users",
    image: intelliAgent,
    alt: "IntelliAgent dashboard with leads, activity and tasks",
    orientation: "landscape",
  },
];

export const highlightsByCompany: Record<string, string[]> = {
  "NG.cash": ["151 → 22 Lambda instances", "~40% of an onboarding app's code removed"],
  "Liquid Labs": ["1M+ testnet users", "5 trading products"],
  Coinbase: ["+35% sign-up conversion", "20% faster auth load"],
  Tech6: ["3,000 users", "Design system for 3 platforms"],
};
