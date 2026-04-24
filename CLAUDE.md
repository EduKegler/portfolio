# Portfolio Project Conventions

Rules below override defaults when working in this repo.

## Directory Structure

```
src/
  app/                     # Next.js routes, layouts, route-local UI
  assets/                  # Images, static assets imported by components
  components/
    common/                # Shared composite components (Header, Footer, Menu, Providers, etc.)
    ui/                    # Design system atoms (TextBase, Divider, Tag, Text*)
  features/
    <feature>/
      components/          # Feature-only UI (e.g., ResumeJob, SectionJobs)
      data/                # Feature data + types (e.g., resume-data.ts)
      hooks/               # Feature-only hooks (create when needed)
      lib/                 # Feature-only utils (create when needed)
  hooks/                   # Reusable cross-feature hooks (create when needed)
  lib/                     # Cross-feature utils, formatters, adapters (create when needed)
  stores/                  # Zustand stores (create when needed)
  types/                   # Shared TypeScript types (colors.ts, etc.)

scripts/                   # Build-time scripts (NOT under src/)
  lib/                     # Shared script helpers (paths.ts)
```

**TS path alias**: `@/*` → `./src/*` (see `tsconfig.json`).

## File Naming

| Type | Convention | Example |
|---|---|---|
| React components | **PascalCase** | `Header.tsx`, `TextBase.tsx`, `ResumeJob.tsx` |
| Data / scripts / config / utils | **kebab-case** | `resume-data.ts`, `build-cv.ts`, `paths.ts` |
| CSS Modules | **kebab-case** + `.module.css` | `resume.module.css` |
| Folders | **lowercase** | `features/resume/`, `components/ui/` |
| Markdown docs | **UPPER-KEBAB-CASE** | `CLAUDE.md`, `DESIGN.md` |

**One component per file.** File name matches the component name (PascalCase) or export (kebab-case for non-components).

## Component Pattern

**React Compiler is enabled** (`next.config.ts` → `reactCompiler: true`). Do NOT use manual `memo()`, `useMemo`, or `useCallback` — the compiler handles memoization automatically.

Standard component shape:
```tsx
import clsx from "clsx";
import type { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

export default function MyComponent({ children }: MyComponentProps) {
  return <div>{children}</div>;
}
```

Rules:
- **Single default export** per component file.
- **`export default function X()`** — no intermediate `function X` + `export default X` unless needed.
- **No `memo()`** — React Compiler makes it dead code.
- **`"use client"`** only when the component actually uses client-side features (hooks, browser APIs, motion, event handlers triggering state). Default to server components.

## TypeScript

- **`type` over `interface`** — all props and data shapes use `type X = { ... }`.
- **`import type`** separate from value imports: `import type { ReactNode } from "react"`.
- **Props type naming**: `{ComponentName}Props`.
- **Strict mode** enabled (`tsconfig.json`).
- **Explicit return types on exported functions** (non-components).
- **Never use `!` non-null assertion** — narrow types with guards or early returns.

## Imports

- **`@/*` absolute** for cross-directory imports (maps to `src/*`).
- **Relative `./X`** for same-directory imports.
- **Cross-feature imports use `@/features/<feat>/...`** — never relative `../../features/`.
- **Scripts (outside `src/`) use relative paths** to reach into `src/` (e.g., `../src/features/resume/data/resume-data`).

## Styling

- **Tailwind first** via `className`.
- **`clsx` for conditional class composition** — never template literals (`` `${a} ${b}` ``).
- **CSS Modules only as fallback** when Tailwind can't express the design (currently only `resume.module.css` for PDF-quality rendering).
- **`:global()` in CSS Modules** is a documented escape hatch for theme/html targeting. Prefer not to add new ones.

## Feature Placement Decision Tree

Where does a new file go?

1. Only used by one feature (e.g., trading surface, resume section)? → `src/features/<feature>/components/` (or `data/`, `hooks/`, `lib/`).
2. Used across multiple features AND is a composite with domain/layout meaning? → `src/components/common/`.
3. Used across multiple features AND is a design system atom? → `src/components/ui/`.
4. Reusable TS type used across features? → `src/types/`.
5. Reusable non-UI logic (formatter, adapter, utility)? → `src/lib/`.
6. Cross-feature hook? → `src/hooks/`.
7. Zustand store? → `src/stores/`.
8. Build-time script (not in app bundle)? → `scripts/` (outside `src/`).

When unsure, prefer `features/<feat>/` — promoting later is cheaper than demoting.

## Scripts

- Live in `scripts/` at the project root (not `src/`) — they're build-time, not app code.
- Use **kebab-case** filenames (`build-cv.ts`, `verify-cv.ts`).
- Shared script helpers → `scripts/lib/` (e.g., `paths.ts`).
- Runner: `tsx` (see `package.json` scripts).

## Tests

- **Co-located** with source: `foo.ts` → `foo.test.ts`, `Bar.tsx` → `Bar.test.tsx`.
- Place in the same directory as the subject.

## Engineering Discipline

- **Reliability-first**: prefer battle-tested libs for generic infra (WS reconnect, rate limiting, HTTP retry, validation) over custom code.
- **Build + test before claiming done**: every change ends with `pnpm build` passing.
- **Regression rule**: every bug fix includes a test that reproduces the bug and verifies the fix.
- **TDD when possible**: write/update tests before implementing the fix/feature.

## CV Build Pipeline (feature: resume)

- `/resume` route renders from `src/features/resume/data/resume-data.ts`.
- `pnpm build:cv` → builds Next, spawns server, renders PDF via Puppeteer.
- `pnpm verify:cv` → 5 structural checks against `public/cv.pdf`.
- `pnpm check:cv` → guards that `public/cv.pdf` matches current `resume-data.ts` (via `public/cv.hash`).
- Any change to `resume-data.ts` must be followed by `pnpm build:cv` before commit.
