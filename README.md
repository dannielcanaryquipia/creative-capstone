# Creative Capstone — Alvin Valeza

An interactive web experience documenting an 11-week learning journey through global citizenship, cross-cultural understanding, Indigenous knowledge, sustainability, and wellness.

Built with React 19, TypeScript 6, Tailwind CSS v4, GSAP 3 (ScrollTrigger), and Vite 8.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser.

---

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npx tsc --noEmit` | Type-check without emitting |

---

## Project structure

```
src/
  components/
    layout/           NavBar, Footer, ScrollProgress
    shared/           Hero, WeekPreviewCard, SectionHeading
    journey/          WeekSection, JourneyProgress
  pages/              Home, About, Journey, Resources
  hooks/              usePageEnter — GSAP entrance + scroll animations
  data/               weeks.ts, capstone.ts, resources.ts
  image/              profile.jpg
  index.css           Tailwind v4 theme (colors, fonts, radii)
```

See `PROJECT_SPEC.md` for full architecture, design system, and animation plan.

---

## Pages

- **Home** — Hero with staggered entrance, profile photo, week preview grid, CTAs
- **About** — Course context, tech stack cards, artifact metadata sidebar
- **Journey** — Continuous scroll through 11 week sections with full reflection text
- **Resources** — 37 resources grouped by week with type icons and external links

---

## Design

- **Palette:** Dark teal primary (`#02342D`), coral accent (`#FF8B6A`), cream surface (`#F7F3EC`) — 20+ CSS tokens in `@theme`
- **Typography:** Playfair Display (headlines) + Inter (body) via Google Fonts
- **Animation:** GSAP + ScrollTrigger — hero entrance stagger, scroll reveals, hover micro-interactions, nav underline draw, mobile drawer
- **Mobile nav:** 85vw left-sliding drawer with staggered link entrance and close icon

---

## Tech stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Tailwind CSS | 4 |
| GSAP | 3.15 |
| Vite | 8 |
| react-router-dom | 7 |

---

## Content

Week reflection files live in `files-by-week/` (weeks 2–7 complete). Resource data is in `src/data/resources.ts`. See `RESOURCES_BY_WEEK.md` for the full reference table.
