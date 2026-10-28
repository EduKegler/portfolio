# kegler.dev

Source of [kegler.dev](https://kegler.dev), the portfolio and CV of Eduardo Kegler, Senior Frontend Engineer.

The site and the CV PDF come from the same data in `src/features/resume/data/resume-data.ts`. `pnpm build:cv` renders the PDF with Puppeteer, and `pnpm check:cv` fails when the data changed without a new PDF.

## Stack

Next.js 16 (App Router, React Compiler), TypeScript, Tailwind CSS 4, Vitest. Deployed on Vercel.

## Run

```bash
pnpm install
pnpm dev
```

`pnpm build`, `pnpm test` and `pnpm build:cv` cover the rest.
