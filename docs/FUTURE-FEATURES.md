# Future Features

Improvements that require design or content decisions and are not direct technical fixes.
These were identified during the portfolio audit on 2026-03-12.

---

## Content & UX

### Add links to projects (demo / repo / live site)

No project currently links to a demo, repository, or live URL. Visitors see descriptions but cannot explore further. Depends on deciding which links to expose (some projects may be internal/private).

### Shorten project descriptions to case study format

Each project has 3 dense paragraphs. Best practice is **Problem → Process → Result** in a concise format. Current descriptions read like reports, not engaging case studies. Requires editorial rewriting.

### Stronger hero section

- Add a scroll indicator (chevron / animation)
- Add availability status ("Open to work" or similar)
- Replace "Download Resume" with a more engaging CTA
- Add personality to the bio

### Visual timeline for Experience section

Currently 4 cards in a grid. A connected timeline would be more visually interesting and tell a career story.

### Footer with social links and final CTA

Currently only shows "Eduardo Kegler 2026" with a copyright icon. Could include social links and a closing call-to-action.

### Rethink Skills section

Listing "React, TypeScript, Next.js" is what every developer does. More impactful alternatives:

- Visual proficiency levels
- Remove the section entirely and let project tags speak for themselves

---

## Design & Interactions

### Dark / Light mode toggle

Site is light-only. A toggle with `prefers-color-scheme` support would improve UX for dark mode users.

### Micro-interactions on project cards

Project cards currently have no hover effect. Consider: subtle scale, shadow lift, or image parallax on hover.

### Custom font (Geist or similar)

Currently using system font stack. A custom font would strengthen the visual identity.

### Bento Grid / creative layout

A more creative layout for sections (bento grid, asymmetric cards) would make the portfolio stand out.

---

## Infrastructure

### Extract spacing token (`px-4 lg:px-20`)

This pattern appears in 8+ components. Could be abstracted into a shared utility class or Tailwind plugin for consistency.

---

## References

### What top portfolios do (2025-2026 trends)

- **Structured case studies**: Problem → Process → Result
- **Dark mode as default** with toggle
- **Oversized typography** for dramatic hierarchy (already present)
- **Rich micro-interactions**: hover effects on cards, cursor effects, scroll-driven reveals
- **Scroll storytelling**: content revealed progressively
- **Live links**: every project linking to demo/repo
- **Impeccable performance**: Lighthouse 90+ across all categories
- **Personality**: the portfolio reflects who you are

### Reference portfolios

- **Bruno Simon** (bruno-simon.com) — 3D interactive, creativity reference
- **Mason Ty Wong** — bold colors, interactive cursor
- **Mees Verberne** — parallax + smooth scroll animations
- Collections: Awwwards Portfolios, Muzli Top 100 2025

### Relevant stats

- **87% of hiring managers** consider portfolios more valuable than resumes
- Sites with micro-interactions have **37% more engagement**
- **60% of recruiters** prefer 4-10 curated projects (current: 5 — good)
