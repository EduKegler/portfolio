---
name: kegler.dev
description: A small exhibition of shipped products, each a framed screen with an identical museum label.
colors:
  level1: "#2f314c"
  level2: "#444659"
  level3: "#55576b"
  level5: "#e2e2e9"
  surface: "#ffffff"
  ink: "#2a44c2"
  ink-contrast: "#ffffff"
  selection: "#d6ddff"
typography:
  display:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "clamp(2rem, 1.2rem + 2.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  address:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  headline:
    fontFamily: "Brygada 1918, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.5
  body-lead:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
  focus: "4px"
  full: "9999px"
spacing:
  label-tight: "4px"
  label-gap: "12px"
  label-hang: "20px"
  block: "24px"
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  gutter-desktop: "64px"
  column-gap: "64px"
  work-gap-mobile: "80px"
  work-gap-desktop: "112px"
  section-mobile: "112px"
  section-desktop: "160px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-contrast}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  text-link:
    textColor: "{colors.level2}"
    typography: "{typography.body}"
  text-link-hover:
    textColor: "{colors.level1}"
  work-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "clamp(6px, 0.9vw, 12px)"
  work-frame-dark:
    backgroundColor: "{colors.level5}"
    rounded: "{rounded.none}"
    padding: "clamp(6px, 0.9vw, 12px)"
  work-label:
    textColor: "{colors.level2}"
    typography: "{typography.body}"
    width: "36ch"
  experience-row:
    textColor: "{colors.level1}"
    typography: "{typography.body}"
    padding: "16px 0"
  contact-address:
    textColor: "{colors.level1}"
    typography: "{typography.address}"
  contact-address-hover:
    textColor: "{colors.ink}"
---

# Design System: kegler.dev

## Overview

**Creative North Star: "The Exhibition Wall"**

The site is a small gallery of shipped products. A pinned pastel diagonal gradient is the wall, in both themes. Each product hangs on it as a screen inside a plain mat with a soft cast shadow, and under every screen sits the same museum label: title, company and years, stack, a one-line note, the measured outcome. Wall text, the one sentence that says what Eduardo builds, is set in a serif at display size; everything that informs is set in a highly legible sans.

Density is low and the pace is calm. Works hang with generous air between them, sections are separated by space and a single serif title, never by boxes or rules. Color is almost absent: a blue-gray neutral ladder carries all text, and one cobalt ink is held back for the act of reaching out.

The world rejects the developer-portfolio template: giant name hero, device mockups, alternating cards, tag clouds.

Scope: this world covers the home (`/`). The `/resume` route and its CSS module (`src/features/resume/**`, `resume.module.css`) keep their own print-oriented styling and are outside this file.

**Key Characteristics:**
- Pastel diagonal gradient wall, pinned behind everything, in light and dark.
- Screens framed by a flat mat and a soft offset shadow, square corners.
- One label anatomy for every work, everywhere.
- Serif wall text, sans labels.
- A single reserved ink (cobalt) for contact and focus.

## Colors

A cool blue-gray neutral ladder on a pastel wall, with one cobalt ink in reserve. Every token swaps under `.dark`; dark values below are the counterparts.

### Primary
- **Cobalt Ink** (ink; dark `#a9b8ff`): fill of the "Email me" button, underline of the contact address, its hover text, and the keyboard focus ring. Nothing else.
- **Ink Contrast** (ink-contrast; dark `#12141e`): text on the cobalt button.

### Neutral
- **Gallery Slate** (level1; dark `#c8cade`): names, work titles, outcomes, emphasized figures, link hover. Also tints dividers at 15% and the light mat ring at 10%.
- **Label Slate** (level2; dark `#a8aac0`): label body text, lead paragraph, nav items, secondary links.
- **Caption Slate** (level3; dark `#8888a0`): stack lines, years, availability, location, footer.
- **Mat Dark** (level5; dark `#2a2d42`): the frame mat in dark mode.
- **Wall White** (surface; dark `#12141e`): page base under the gradient and the frame mat in light mode.
- **Selection Haze** (selection; dark `#2f3a7a`): text selection background.

### The Wall
The gradient (133.07deg: coral `rgba(255,180,176)`, peach `rgba(255,221,201)`, a transparent mint gap, sky `rgba(189,238,254)`, lavender `rgba(191,185,255)`) sits on `html` over the surface color. Its opacity is `--gradient-opacity`: 0.1 in light, 0.04 in dark. It is the wall, not decoration; it never moves and never appears inside a component.

### Named Rules
**The Reserved Ink Rule.** Cobalt appears only where the visitor acts on contact (the primary action, the contact address) and on the focus ring. Never on headings, labels, numbers, nav or decoration.

**The Ladder Rule.** Text hierarchy is carried by level1, level2 and level3 alone, never by new hues.

## Typography

**Display Font:** Brygada 1918 (with Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, sans-serif)

**Character:** A bookish serif for what is said to the visitor, a plain legibility-first sans for what is labeled. The pair reads like a museum: wall text and placards.

### Hierarchy
- **Display** (400, clamp 2rem to 3rem, 1.08, -0.02em): the wall text sentence only. Balanced wrap.
- **Address** (400, clamp 1.5rem to 2.25rem): the contact email address, in the serif.
- **Headline** (400, 28px, -0.01em): section titles ("More work", "Experience", "Contact").
- **Title** (600, 17px): work title at the top of a label.
- **Body Lead** (400, 17px, 1.6, max 46ch): the one introductory paragraph.
- **Body** (400, 15px, 1.5): labels, nav, experience rows, links, availability line.
- **Label** (400, 13px): stack line in labels, footer.

### Named Rules
**The Wall Text Rule.** The serif is for things said to the visitor (the wall sentence, section titles, the address). Facts, labels and navigation stay in the sans.

**The Tabular Figures Rule.** Years and outcomes use tabular numerals so numbers align down a column.

## Layout

The page is capped at 1280px and centered. Side gutters are 20px, 32px from 414px, and 64px from 1024px. The desktop grid is a 5/12 to 7/12 split with a 64px gap: text on the left, the lead work on the right; the same split holds Experience and Contact (title left, content right). Below 1024px everything stacks in reading order: wall text, paragraph, actions, then the lead frame.

"More work" hangs in pairs. Two landscape screens share two equal columns; a pair with a portrait screen gives it a fixed 220px column and hangs both at a common 460px height, vertically centered. Pairs are 80px apart on mobile, 112px on desktop. Sections are separated by space alone: 112px on mobile, 160px on desktop.

Inside a label the rhythm is fixed: 20px from frame to label, 4px under the stack line, 12px before the note and before the outcome.

**The Space Not Lines Rule.** Sections are separated by space and a serif title. The only rules on the page are the hairlines of the experience list.

## Elevation & Depth

Flat everywhere except the frames. A frame is the only object that sits off the wall, and it does so with a soft offset shadow plus a hairline ring. Buttons, links and lists stay flat.

### Shadow Vocabulary
- **Frame cast, light** (`0 18px 40px -18px rgba(47,49,76,0.45), 0 2px 6px -2px rgba(47,49,76,0.18)`) with a 1px ring at level1/10%.
- **Frame cast, dark** (`0 24px 60px -20px rgba(0,0,0,0.9), 0 18px 50px -24px rgba(150,160,220,0.18)`) with a 1px ring at white/15%. The faint blue second layer keeps the frame readable on the dark wall.

**The Hung Frame Rule.** Only framed screens cast a shadow, and it is always soft and offset downward. No hard offset shadows, no glow.

## Shapes

Frames are square: no radius on the mat or the screen. The primary action is a full pill. Focus rings take a small 4px radius. There are no cards, chips or containers with borders.

## Components

### Buttons
- **Shape:** full pill.
- **Primary ("Email me"):** cobalt fill, ink-contrast text, 15px semibold, 10px by 20px padding. One per page area, only for email.
- **Hover:** brightness 110% over 200ms. **Focus:** 2px cobalt outline, 4px offset.
- **Secondary:** there is no secondary button. The second action ("Download CV (PDF)") is a text link.

### Text Links
- level2 text, 1px underline at 4px offset, hover to level1. Used for CV, LinkedIn, GitHub, "Visit" links in labels.

### Navigation
- Header row: name in semibold with the title in level3 after a middle dot (stacked under 414px), nav on the right in level2, 15px, hover to level1, then the theme toggle. Under 414px only CV, Email and the toggle show.
- Theme toggle: a 24px stroked sun that morphs into a moon with a spring (stiffness 200, damping 30); hover fades to 60% opacity.

### Work Frame (signature)
- Mat in surface (light) or level5 (dark), padding clamp 6px to 12px, square, with the frame cast shadow and hairline ring. Contains the raw screenshot, never a device mockup. Portrait screens cap at 220px wide.

### Work Label (signature)
- Max 36ch, 15px. In order: title (Title style, level1), "Company, years" (level2), stack joined by commas (13px, level3), note (level2), outcome (semibold, tabular, level1), optional "Visit domain" link. Every work uses this exact anatomy.

### Experience List
- Ordered list with level1/15% hairlines above and between rows, 16px vertical padding. Two columns: years in a 6.5rem tabular level3 column, then company (semibold) with role in level2 and an optional highlights line in level3 joined by middle dots.

### Contact Address
- The email in the serif at Address size, 1px cobalt underline at 6px offset, hover text to cobalt. Breaks anywhere on narrow screens.

## Do's and Don'ts

### Do:
- **Do** give every shown work the full label anatomy, in the same order.
- **Do** hang screenshots in the mat frame with the frame cast shadow for the current theme.
- **Do** keep cobalt to the primary action, the contact address and the focus ring.
- **Do** separate sections with space (112px mobile, 160px desktop) and a serif headline.
- **Do** use tabular numerals for years and outcomes.

### Don't:
- **Don't** show screens inside device mockups or rounded phone or browser chrome.
- **Don't** add cards, alternating card rows, tag clouds or chip lists.
- **Don't** add a giant name hero; the name lives in the header at body size.
- **Don't** add a second filled button or a second accent color.
- **Don't** put the serif on labels, nav or stack lines.
- **Don't** round the frames or give any other element a shadow.
