# Design System — kegler.dev

Single source of truth for the portfolio's visual language.
Every UI change **must** follow these tokens. No ad-hoc values.

---

## Color Palette

Defined in `app/globals.css` via Tailwind `@theme`. Used through Tailwind utilities (`text-level1`, `bg-level5`, `border-level2`, etc.) and the `TextColor` type in `constants/colors.ts`.

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| `level1` | `#2f314c` | `text-level1`, `border-level1` | Primary text, headings, borders, buttons |
| `level2` | `#444659` | `text-level2`, `border-level2` | Body text (default), secondary borders |
| `level3` | `#55576b` | `text-level3` | Tertiary text, menu items base color |
| `level4` | `#8b8ba7` | `text-level4` | Muted text, section subtitles, date labels |
| `level5` | `#e2e2e9` | `bg-level5`, `border-level5` | Backgrounds (tags), dividers, light borders |
| `white` | `#ffffff` | `bg-white` | Mobile nav background, skip-nav focus text |

### Background

```css
background: linear-gradient(
  133.07deg,
  rgba(255, 180, 176, 0.1) 0%,
  rgba(255, 221, 201, 0.1) 34.41%,
  rgba(207, 255, 223, 0) 44.95%,
  rgba(189, 238, 254, 0.1) 54.15%,
  rgba(191, 185, 255, 0.1) 63.12%
);
```

Light-only. No dark mode.

---

## Typography

**Font family:** `-apple-system, BlinkMacSystemFont, sans-serif` (system font stack).

All text primitives live in `primitives/`. They extend `TextBase` which applies color via Tailwind classes (`text-level*`). Default color: `level2`.

### Scale

| Primitive | Mobile | Desktop (lg) | Weight | Semantic Element |
|-----------|--------|-------------|--------|------------------|
| `TextDisplay1` | `24vw / 24vw` | `134px / 140px` | `semibold` | `h1` |
| `TextDisplay2` | `48px / 52px` | `64px / 72px` | `normal` | `h2` |
| `TextTitle1` | `24px / 28px` | `40px / 48px` | `normal` | `h3` |
| `TextTitle2` | `24px / 32px` | `32px / 38px` | `normal` | `span` |
| `TextTitle3` | `18px / 22px` | `24px / 28px` | `normal` | `span` |
| `TextBody` | `16px / 20px` | `20px / 24px` | `normal` | `p` |
| `TextLabel1` | `12px / 16px` | `16px / 20px` | `normal` | `span` |
| `TextLabel2` | `12px / 14px` | `12px / 14px` | `normal` | `span` |

Format: `font-size / line-height`.

### Intermediate breakpoints

`TextDisplay1` also uses `sm` (414px) and `md` (768px):
- **sm:** `100px / 106px`
- **md:** `112px / 120px`

`TextDisplay2` uses `md`:
- **md:** `52px / 60px`

---

## Spacing

### Section padding (horizontal)

```
px-4       (16px)   — mobile
lg:px-20   (80px)   — desktop
```

This pattern is repeated across all major sections: Header, Content, SectionProjects, SectionJobs, SectionSkills, SectionContact, Footer.

### Section dividers

Sections are separated by `Divider` wrapped in:
```
px-4 lg:px-20 w-full py-20
```

Vertical rhythm between sections: `py-20` (80px).

### Common gap values

| Context | Mobile | Desktop |
|---------|--------|---------|
| Between sections content | `gap-10` (40px) | `lg:gap-20` (80px) |
| Between projects | `my-20` (80px) on dividers | same |
| Hero heading to subtitle | `gap-6` (24px) | same |
| Inside section heading area | `gap-4` (16px) | same |
| Tag list | `gap-2` (8px) | same |
| Header items | `gap-4` (16px) | `lg:gap-10` (40px) |
| Menu items (vertical) | `gap-2` (8px) | same |
| Contact links | `gap-6` (24px) | same |
| Section label to content | `gap-10` (40px) | same |

### Layout proportions

Sections with label + content (Jobs, Skills) use flex ratios:
- Label: `flex-2`
- Content: `flex-10`

Project cards use:
- Text block: `md:flex-7`
- Image block: `md:flex-5`

---

## Breakpoints

| Token | Width | Usage |
|-------|-------|-------|
| `sm` | `414px` | Custom (defined in `@theme`). Mobile-to-small. |
| `md` | `768px` | Tailwind default. Tablet. Project layout switches to row. |
| `lg` | `1024px` | Tailwind default. Desktop. Sidebar labels, full spacing. |

**Max container width:** `1280px` (set on `body`).

---

## Components

### Button (DownloadCV)

```
whitespace-nowrap
text-[16px] leading-[20px] lg:text-[20px] lg:leading-[24px]
px-8 py-4
rounded-full
border border-solid border-level1
hover:opacity-60
```

Motion: `whileHover: { scale: 1.025 }`, `whileTap: { scale: 0.95 }`.

### Tag (Badge)

```
px-2 py-1
bg-level5
rounded-full
```

Uses `TextLabel2` with `color="level1"`.

### Divider

```
w-full border-t border-level5
```

### BackSkill (Text Card)

```
flex py-8 flex-1
border-[0.5px] border-solid border-level2
items-center justify-center
```

### FrontSkill (Icon Card)

```
flex flex-1 flex-col gap-1 items-center justify-between h-full
```

Icon size: `48px x 48px`.

### Project Card

```
flex flex-col md:flex-row gap-20 items-center
```

Image container:
```
relative
w-[90vw] h-[80vw]          — mobile
sm:w-[350px] sm:h-[280px]  — small
lg:w-[430px] lg:h-[335px]  — desktop
```

Image uses `fill` + `object-fit: contain`.

---

## Interactions

### Hover

**Standard:** `hover:opacity-60` — applied to all links, buttons, and interactive elements.

No other hover patterns. This is the single hover convention.

### Animations (Motion)

Global config: `<MotionConfig reducedMotion="user">` — respects OS preference.

| Element | Initial | Animate | Duration | Easing |
|---------|---------|---------|----------|--------|
| Project cards (even) | `opacity: 0, translateX(-200px)` | `opacity: 1, translateX(0)` | `0.8s` | `easeOut` |
| Project cards (odd) | `opacity: 0, translateX(200px)` | `opacity: 1, translateX(0)` | `0.8s` | `easeOut` |
| Contact section | `opacity: 0, y: 100` | `opacity: 1, y: 0` | `1s` | default |
| Button hover | — | `scale: 1.025` | — | — |
| Button tap | — | `scale: 0.95` | — | — |

Viewport trigger: `once: true`, `amount: 0.2` (projects).

### Scroll

`scroll-behavior: smooth` on `html`.

---

## Accessibility

- **Skip navigation:** Visually hidden link, visible on focus. `sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-level1 focus:text-white focus:rounded-md`
- **Reduced motion:** Handled globally via `MotionConfig`.
- **Nav labels:** Desktop nav: `aria-label="Main navigation"`, Mobile nav: `aria-label="Mobile navigation"`.
- **External links:** All have `aria-label` describing the destination.
- **Images:** All have descriptive `alt` text.

---

## File Structure

```
primitives/          — Text components, Tag, Divider (design tokens)
  TextBase.tsx       — Base for all text (color via Tailwind classes)
  TextDisplay1.tsx   — Hero name
  TextDisplay2.tsx   — Section headings (Projects, Contact)
  TextTitle1.tsx     — Section titles
  TextTitle2.tsx     — Subtitles, descriptions
  TextTitle3.tsx     — Subsection titles, job titles
  TextBody.tsx       — Body text, links
  TextLabel1.tsx     — Section labels, nav items, dates
  TextLabel2.tsx     — Tags, small labels
  Tag.tsx            — Badge component
  Divider.tsx        — Horizontal rule

constants/
  colors.ts          — TextColor type (single source for TS)

app/
  globals.css        — @theme (colors, breakpoints), base resets, gradient
```

---

## Rules

1. **Colors** — Only use `level1` through `level5` and `white`. No arbitrary hex values.
2. **Typography** — Only use the primitives above. No raw `text-*` classes for content.
3. **Spacing** — Section horizontal padding is always `px-4 lg:px-20`. Use existing gap patterns.
4. **Hover** — Always `hover:opacity-60`. No other hover patterns.
5. **Animations** — Use Motion with `whileInView` + `once: true`. Respect the existing duration/easing conventions.
6. **Borders** — `border-level5` for dividers/separators, `border-level2` for skill grids, `border-level1` for buttons.
7. **Border radius** — `rounded-full` for avatars, buttons, and tags. No other border-radius values.
