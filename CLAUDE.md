# CLAUDE.md — EuphonieS

## Project

EuphonieS is the website of a small a cappella chamber ensemble based in Besançon, France. The site presents the choir, lists upcoming concerts, and allows interested singers to apply to join.

**Content language:** French exclusively.

**SEO goal:** The site must be easily discoverable by:
- People searching to join a classical amateur choir in Besançon
- People looking for classical concerts in or near Besançon

The current codebase is a plain HTML/CSS/JS site being migrated to the React + TypeScript stack described below.

---

## Tech stack

| Tool | Role |
|------|------|
| Vite + React | Framework and build tool |
| TypeScript | Language — strict mode required |
| npm | Package manager |
| ESLint + Prettier | Linting and formatting |
| Vitest + React Testing Library | Unit tests |
| Playwright | End-to-end tests |
| Storybook | Component catalogue |

---

## Architecture — Atomic Design

All components follow the Atomic Design hierarchy. The folder structure is:

```
src/
  components/
    atoms/
    molecules/
    organisms/
  templates/
  pages/
  styles/         # Global tokens only (colors, typography, spacing)
```

### Component folder structure

Each component lives in its own named folder:

```
ComponentName/
  index.tsx                  # Component implementation
  style.module.css           # Scoped component styles (CSS Modules)
  index.tests.tsx            # Unit tests
  ComponentName.stories.tsx  # Storybook stories — replace ComponentName with the actual component name
```

Example for a `Button` atom:

```
Button/
  index.tsx
  style.module.css
  index.tests.tsx
  Button.stories.tsx
```

### Atomic hierarchy rules

| Level | Responsibility | Examples |
|-------|---------------|---------|
| **Atom** | Smallest UI primitive, no sub-components | Button, Label, Rule, Tag, StatNumber |
| **Molecule** | Single-purpose group of atoms | SectionHeader, ConcertCard, CtaLink, Pilier |
| **Organism** | Self-contained page section | Nav, Hero, ConcertList, JoinSection, ContactSection |
| **Template** | Page layout shell, no real data | MainLayout |
| **Page** | Route component wiring templates with data | HomePage |

- Place a component at the lowest level that satisfies its responsibility.
- An organism must not import another organism.
- Pages are the only level that fetches or owns real application data.

---

## CSS — CSS Modules

Use CSS Modules (`style.module.css`) for all component styles. This prevents class name collisions across components.

Class names inside a module file follow a BEM-inspired convention prefixed by atomic level:

- `a-` atoms
- `m-` molecules
- `o-` organisms
- `l-` layout / template

```css
/* Nav/style.module.css */
.o-nav { ... }
.o-nav__logo { ... }
.o-nav__links { ... }
```

Global design tokens (CSS custom properties for colors, fonts, spacing) live in `src/styles/tokens.css` and are imported once at the app root. No component imports `tokens.css` directly — use `var(--token-name)`.

### Mobile-first navigation

Every component must be designed mobile-first. **Never develop a layout without verifying it at 375 px width.** When a component uses CSS Grid or Flexbox, define the mobile layout first, then add `@media (min-width: …)` overrides for wider viewports — not the reverse. **Never hide UI content with `display: none` to work around a layout problem** — fix the layout instead (e.g. use `grid-row` / `grid-column` placement to reflow elements across rows). Never hide or resize child elements using `:global()` selectors targeting another component's scoped class: CSS Modules hashes class names, so `:global(.a-tag)` will not match. Wrap child elements in a locally-owned container element and target that class instead.

---

## Code quality

- Follow **clean code** principles: meaningful names, single responsibility, small pure functions, no dead code.
- TypeScript **strict mode** is mandatory. No `any`, no unchecked type assertions.
- All code must pass ESLint and Prettier checks before commit.
- Write no comments unless the **why** is non-obvious from the code itself. Never describe what the code does.
- No feature flags, backwards-compatibility shims, or speculative abstractions. Build for the requirement at hand.

---

## Testing

### Unit tests — `index.tests.tsx`

- Run with **Vitest** and **React Testing Library**.
- Every component and every utility function must have a unit test file.
- **No real external calls.** All network requests, APIs, and data fetches must be mocked.
- Assert on user-visible behaviour, not implementation details. Prefer `getByRole`, `getByText`, `getByLabelText` over CSS selectors or internal state.

### Integration and E2E tests — Playwright

- Cover business-critical user journeys validated with the product owner (reading concert listings, navigating to the join section, submitting a contact request, etc.).
- E2E tests may use real endpoints in a dedicated test environment.
- New business requirements discussed with the product owner must be covered by at least one E2E scenario.

### Storybook — `ComponentName.stories.tsx`

- Every component must have a Storybook file covering **all visual states** (default, empty, loading, error, etc.).
- Stories must be self-contained — no live network calls.

---

## SEO

Every rendered page and component must meet these requirements.

### Semantic HTML

- Use `<h1>`–`<h6>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` correctly.
- One `<h1>` per page, matching the page's primary topic.
- Decorative elements get `aria-hidden="true"`. All meaningful images get descriptive `alt` text in French.

### Meta tags

Each page must expose a unique `<title>` and `<meta name="description">` in French, written to match natural search queries.

### Keywords to use naturally in copy and headings

- chœur amateur classique Besançon
- ensemble vocal Besançon
- concerts classiques Besançon / Franche-Comté
- rejoindre un chœur à Besançon
- chant choral Besançon

Do not stuff keywords. They must appear naturally in headings, page copy, and alt text.

### Structured data

- Use JSON-LD `MusicGroup` schema for the choir's identity page.
- Use JSON-LD `Event` schema for each concert entry.

### General

- URLs must be clean, descriptive, and in French (e.g. `/concerts`, `/nous-rejoindre`).
- No duplicate content across pages.
