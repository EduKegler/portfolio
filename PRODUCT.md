# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal weight, both arriving with a link they already have rather than from search:

- Clients and platform matchers (Toptal, Lemon.io and similar) evaluating Eduardo as a remote contractor. Matchers open external links to verify skills and check that the site, CV and profiles agree.
- Hiring managers for full-time remote roles who liked the CV or LinkedIn profile and want to confirm it.

Both scan quickly. Their job is to confirm the CV is real and decide whether to talk to him. AI assistants (ChatGPT) also read the site and send visitors to it, so the content has to be complete in the server-rendered HTML.

## Product Purpose

kegler.dev is the public home of Eduardo Kegler's work and CV. It exists to confirm, not to be discovered: a visitor who already has the link should leave convinced the claims are real and know how to reach him. Success is a visitor who checks the site and then replies, books a call, or moves him forward in a process.

## Positioning

Senior product engineer, frontend-leaning, who works on the backend when a feature needs it. 8 years of experience, the last 5 in crypto and fintech (Coinbase, Liquid Labs/GTE, NG.cash). The claim a neighbor cannot copy is ownership of whole products with measured outcomes: sole frontend engineer taking GTE from zero to a public testnet with over 1 million users, Unified Signup 2.0 at Coinbase with +35% sign-up conversion, and a nearly solo end-to-end delivery at NG.cash.

Open decision: the site, base CV and LinkedIn headline still say "Senior Frontend Engineer". Moving them to the product engineer framing is a content change that must happen in `profile/HISTORY.md`-backed copy across all three, not on the site alone.

## Operating Context

- The base CV lives at `/resume` with its PDF at `/cv.pdf`. Both come from `src/features/resume/data/resume-data.ts`, which also feeds the home's experience and skills sections.
- Tailored CV variants per job are private and never deployed. See the CV pipeline section in `CLAUDE.md`.
- The LinkedIn Featured section, GitHub profile and Toptal profile link here.

## Capabilities and Constraints

- Next.js 16 on Vercel, static where possible, light and dark themes.
- Everything shown must be true and match the CV data. Numbers come only from the CV data.
- Nothing from NG.cash beyond what fits a public CV: no code, screenshots, internal metrics, tickets or architecture.
- Coinbase and Liquid Labs work is shown through the existing screenshots in `src/assets/projects` and public facts only.
- Personal projects (RangeDeck, Daylog, breaker) stay on GitHub and do not appear on the site.
- Copy is in English.

## Brand Commitments

- Name: Eduardo Kegler. Domain: kegler.dev. GitHub: EduKegler.
- Voice: first person, short and plain, facts and numbers over adjectives. No buzzwords such as "passionate" or "driving innovation".

## Evidence on Hand

- Measured outcomes in `resume-data.ts`: over 1 million testnet users at GTE (public figure), +35% sign-up conversion and -20% auth flow load time at Coinbase, around 200,000 daily sign-in users at Coinbase (estimate), 0.45% cross-product engagement lift on the App Switcher (A/B), 151 to 22 Lambda instances at NG.cash.
- Project screenshots: GTE, App Switcher, Sign In, Unified Sign Up, IntelliAgent (`src/assets/projects`).
- Live product link: gte.xyz.
- No testimonials, recommendations, case study write-ups, talks or articles exist. Do not invent them.

## Product Principles

- Proof first. Lead with what was built and what changed, before who he is.
- One source of truth. The site never states a fact the CV data does not.
- Readable without JavaScript and without scrolling tricks. Matchers, crawlers and assistants must see the full content.
- Less is more convincing. Cut sections that do not help a visitor confirm the claim.

## Accessibility & Inclusion

WCAG AA contrast and semantic headings in both themes. Respect reduced motion.
