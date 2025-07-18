"use client";
import TextTitle1 from "@/primitives/TextTitle1";
import { memo } from "react";
import Project, { ProjectProps } from "./Project";
import Divider from "@/primitives/Divider";
import AppSwitcher from "@/assets/projects/app-switcher.png";
import SignIn from "@/assets/projects/sign-in.png";
import SignUp from "@/assets/projects/sign-up.png";
import GTE from "@/assets/projects/gte.png";
import Fathom from "@/assets/projects/fathom.png";
import { motion } from "motion/react";

const projects: Omit<ProjectProps, "order">[] = [
  {
    name: "DEX",
    company: "GTE",
    image: GTE,
    description: (
      <>
        gte.xyz is an all-in-one DeFi platform built on the MegaETH network,
        combining a portfolio tracker, AMM, token launchpad, central limit order
        book (CLOB), and perpetuals trading into a unified interface.
        <br />
        <br />
        I led the front-end development using React, TypeScript, and Web3
        technologies, delivering modular components and seamless wallet
        connectivity. The platform provides real-time insights into wallet
        balances, PnL, and open positions, while enabling users to trade, swap,
        and explore new tokens, all in one place.
        <br />
        <br />
        This integrated experience enhances accessibility to advanced DeFi tools
        while maintaining performance and usability.
      </>
    ),
    tags: ["React", "Typescript", "Javascript", "Web3", "Next.js", "Viem", "Privy"],
  },
  {
    name: "App Switcher",
    company: "Coinbase",
    image: AppSwitcher,
    description: (
      <>
        <strong>App Switcher</strong> is an innovative tool designed to enhance
        user navigation across various Coinbase products, including HelpCenter,
        Coinbase Tracer, and Commerce. Developed using React and TypeScript, it
        offers an intuitive and responsive interface, simplifying access to
        multiple services within the Coinbase ecosystem.
        <br />
        <br />
        Since its launch, approximately{" "}
        <strong>0.45% of Coinbase&apos;s</strong> retail web users have utilized
        the App Switcher to seamlessly transition between products, thereby
        boosting cross-product engagement and providing a more integrated user
        experience.
        <br />
        <br />
        In addition to leading its development, I collaborated with multiple
        teams to ensure the App Switcher was effectively integrated across the
        platform, meeting the specific needs of each product and delivering a
        cohesive user experience.
      </>
    ),
    tags: ["React", "Typescript", "Javascript", "GraphQL"],
  },
  {
    name: "Sign In with Wallet",
    company: "Coinbase",
    image: SignIn,
    description: (
      <>
        This project aimed to align with Coinbase Identity&apos;s vision of
        bridging the gap between <strong>Web3 and the traditional web</strong>,
        ensuring seamless integration and user experience.
        <br />
        <br />
        I led the front-end implementation of third-party OAuth authentication,
        enabling login with Apple and Google. Developed using React, TypeScript,
        and Web3 standards, this solution empowers users to securely log in via
        popular crypto wallets like Coinbase Wallet, MetaMask, or WalletConnect.
        <br />
        <br />
        The system offers a streamlined onboarding process with a user-friendly
        interface, enhancing accessibility for decentralized applications while
        maintaining robust security protocols.
      </>
    ),
    tags: ["React", "Typescript", "Javascript", "Web3", "OAuth", "Wagmi", "Viem"],
  },
  {
    name: "Unified Sign Up",
    company: "Coinbase",
    image: SignUp,
    description: (
      <>
        Unified Sign Up 2.0 was designed to unify and simplify the account
        creation process across all Coinbase products, ensuring a consistent and
        seamless experience for users.
        <br />
        <br />I led the development of Unified Sign Up 2.0, integrating{" "}
        <strong>Sign Up with Google</strong> and{" "}
        <strong>Sign Up with Apple</strong> to offer secure and flexible
        onboarding options. Built with React and TypeScript, the system delivers
        an intuitive, responsive interface and supports scalability to
        accommodate Coinbase&apos;s extensive suite of products, such as
        Coinbase Wallet, Coinbase Commerce, and more.
        <br />
        <br />
        This unified solution reflects Coinbase&apos;s vision of providing a
        cohesive user journey, enhancing accessibility, and streamlining the
        onboarding process for its global user base.
      </>
    ),
    tags: ["React", "Typescript", "Javascript"],
  },
  {
    name: "IntelliAgent",
    company: "Fathom Realty",
    image: Fathom,
    description: (
      <>
        IntelliAgent is a real estate operations platform built for agents at
        Fathom Realty in North Carolina.
        <br />
        <br />
        It streamlines the full transaction workflow. Client prospecting, fee
        tracking, and end-to-end deal management, tailored to the daily needs of
        real estate professionals.
        <br />
        <br />I designed and implemented the entire design system and led the
        front-end architecture using React and TypeScript, creating reusable
        components and consistent UI patterns to support scalability, usability,
        and team collaboration.
      </>
    ),
    tags: ["React", "Typescript", "Javascript", "Redux", "Tailwind"],
  },
];
function SectionProjects() {
  return (
    <section className="px-4 lg:px-20 flex flex-col gap-10 lg:gap-20 overflow-hidden">
      <TextTitle1>Projects</TextTitle1>
      <div className="flex flex-col overflow-hidden">
        {projects.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
              transform: `translateX(${index % 2 === 0 ? -200 : 200}px)`,
            }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ willChange: "transform" }}
            key={project.name}
            className="flex flex-col"
          >
            {index !== 0 && <Divider className="my-20" />}
            <Project
              name={project.name}
              image={project.image}
              company={project.company}
              description={project.description}
              tags={project.tags}
              order={index % 2 === 0 ? "left" : "right"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default memo(SectionProjects);
