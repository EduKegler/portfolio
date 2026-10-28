import TextTitle1 from "@/components/ui/TextTitle1";
import Project, { ProjectProps } from "./Project";
import Divider from "@/components/ui/Divider";
import AppSwitcher from "@/assets/projects/app-switcher.png";
import SignIn from "@/assets/projects/sign-in.png";
import SignUp from "@/assets/projects/sign-up.png";
import GTE from "@/assets/projects/gte.png";
import Fathom from "@/assets/projects/fathom.png";

const projects: Omit<ProjectProps, "order">[] = [
  {
    name: "DEX",
    company: "GTE",
    image: GTE,
    description: (
      <>
        <a
          href="https://gte.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-60"
        >
          gte.xyz
        </a>{" "}
        is a DeFi trading platform on MegaETH: portfolio tracker, AMM,
        token launchpad, central limit order book (CLOB) and perpetuals in one
        app.
        <br />
        <br />
        As the <strong>sole frontend engineer</strong>, I built all 5 surfaces
        from zero to a public testnet used by{" "}
        <strong>over 1 million users</strong> in under a year.
        <br />
        <br />
        Wallet login and transactions run on Privy and Viem. Balances, PnL,
        positions and orders update in real time over WebSockets.
      </>
    ),
    tags: ["React", "TypeScript", "Next.js", "Viem", "Privy", "WebSockets", "Zustand", "TanStack Query"],
  },
  {
    name: "App Switcher",
    company: "Coinbase",
    image: AppSwitcher,
    description: (
      <>
        <strong>App Switcher</strong> lets Coinbase users move between products,
        like Help Center and Tracer, from a single menu.
        <br />
        <br />
        I built it in React and TypeScript, with i18n and Amplitude analytics,
        and worked with each product team to integrate it.
        <br />
        <br />
        An A/B test measured a <strong>0.45% lift</strong> in cross-product
        engagement among retail web users.
      </>
    ),
    tags: ["React", "TypeScript", "GraphQL", "i18n", "Amplitude"],
  },
  {
    name: "Sign In",
    company: "Coinbase",
    image: SignIn,
    description: (
      <>
        Coinbase sign-in for around <strong>200,000 daily users</strong>, with
        OAuth for Apple and Google and sign-in with an Ethereum wallet, such as
        Coinbase Wallet, MetaMask or WalletConnect.
        <br />
        <br />
        I built the flows in React and TypeScript, accessible (WCAG) and
        cross-browser.
        <br />
        <br />
        Rendering and caching work on these flows cut load time by{" "}
        <strong>20%</strong>.
      </>
    ),
    tags: ["React", "TypeScript", "OAuth/OIDC", "Wagmi", "Viem", "WCAG"],
  },
  {
    name: "Unified Sign Up",
    company: "Coinbase",
    image: SignUp,
    description: (
      <>
        Unified Signup 2.0 is one account creation flow shared across Coinbase
        products.
        <br />
        <br />
        I led it, adding sign-up with Apple and Google and A/B testing the new
        flows behind feature flags.
        <br />
        <br />
        Sign-up conversion went up <strong>35%</strong>.
      </>
    ),
    tags: ["React", "TypeScript", "Feature Flags", "A/B Testing", "Amplitude"],
  },
  {
    name: "IntelliAgent",
    company: "Tech6, for Fathom Realty",
    image: Fathom,
    description: (
      <>
        IntelliAgent is a real estate operations platform for Fathom Realty
        agents in North Carolina: prospecting, fee tracking and deal management
        in one place.
        <br />
        <br />
        I built it in React, TypeScript and GraphQL for about{" "}
        <strong>3,000 users</strong>, and designed the internal design system
        it shares with 2 other platforms.
        <br />
        <br />
        I also replaced a manual process with automatic invoice generation for
        every transaction.
      </>
    ),
    tags: ["React", "TypeScript", "GraphQL", "Redux", "Tailwind", "Storybook"],
  },
];

export default function SectionProjects() {
  return (
    <section className="px-4 lg:px-20 flex flex-col gap-10 lg:gap-20 overflow-hidden">
      <TextTitle1 as="h2">Projects</TextTitle1>
      <div className="flex flex-col overflow-hidden">
        {projects.map((project, index) => (
          <div key={project.name} className="flex flex-col">
            {index !== 0 && <Divider className="my-20" />}
            <Project
              name={project.name}
              image={project.image}
              company={project.company}
              description={project.description}
              tags={project.tags}
              order={index % 2 === 0 ? "left" : "right"}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
