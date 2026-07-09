# Creative Capstone Website — Project Spec

## 1. Project overview

- **Type:** Academic creative capstone (reflective response to a global citizenship / cross-cultural / sustainability / wellness course)
- **Profile name:** Alvin Valeza
- **Format chosen:** Interactive webpage (built custom, not Wix/WordPress)
- **Stack:** React 19 + TypeScript 6 + Tailwind CSS v4 + GSAP 3.15 (ScrollTrigger) + React Three Fiber (Drei) + Three.js
- **Build tool / workflow:** Vite 8 + OpenCode CLI (AI-assisted coding agent)
- **Core idea:** The site walks through an 11-week learning journey (weeks 2–12), presented chronologically week by week. Each week displays the student's full reflective response — the most important lesson, student growth, professional perspective, and citizen perspective — rendered verbatim. There is no separate Synthesis page; the student/professional/citizen reflection is embedded within each week's own content.

---

## 2. Sitemap

```
Home
 ├── About (3D animated background, image gallery with lightbox, metadata sidebar)
 ├── Journey (single continuous scroll page, 11 WeekSection components)
 │     ├── Hero
 │     ├── Week 2  — Citizenship and Global Responsibility (Part 1)
 │     ├── Week 3  — Citizenship and Global Responsibility (Part 2)
 │     ├── Week 4  — Cross-Cultural Understanding (Part 1)
 │     ├── Week 5  — Cross-Cultural Understanding (Part 2)
 │     ├── Week 6  — Indigenous Understanding (Part 1)
 │     ├── Week 7  — Indigenous Understanding (Part 2)
 │     ├── Week 8  — Entrepreneurship & Technology
 │     ├── Week 9  — Ecological Literacy (Part 1)
 │     ├── Week 10 — Ecological Literacy (Part 2)
 │     ├── Week 11 — Health and Wellness (Part 1)
 │     └── Week 12 — Health and Wellness (Part 2)
 ├── Documentation (3-phase gallery: planning, development, output screenshots; external GitHub + live site links)
 └── Resources (37 references grouped by week with type icons and Open links)
```

Global nav (sticky): logo/name + About / Journey / Documentation / Resources — desktop links with hover underline draw animation. On mobile, hamburger toggles a left-side sliding drawer (85vw, glass background in dark mode, staggered link entrance). Theme toggle (sun/moon) in nav. On the Journey page, a right-rail `ScrollProgress` component shows "Week N of 11" as the user scrolls.

All weeks display with uniform styling — no status badges, no accent color rotation, no "quiet" mode. All weeks are completed and fully populated.

---

## 3. Content mapping (by week)

| Week | Date | Title | Source file |
|------|------|-------|-------------|
| 2 | May 4 | Citizenship and Global Responsibility (Part 1) | `files-by-week/week 2.txt` |
| 3 | May 11 | Citizenship and Global Responsibility (Part 2) | `files-by-week/week 3.txt` |
| 4 | May 18 | Cross-Cultural Understanding (Part 1) | `files-by-week/week 4.txt` |
| 5 | May 25 | Cross-Cultural Understanding (Part 2) | `files-by-week/week 5.txt` |
| 6 | June 1 | Indigenous Understanding (Part 1) | `files-by-week/week 6.txt` |
| 7 | June 8 | Indigenous Understanding (Part 2) | `files-by-week/week 7.txt` |
| 8 | June 22 | Entrepreneurship & Technology | `files-by-week/week 8.txt` |
| 9 | June 29 | Ecological Literacy (Part 1) | `files-by-week/week 9.txt` |
| 10 | July 6 | Ecological Literacy (Part 2) | `files-by-week/week 10.txt` |
| 11 | July 13 | Health and Wellness (Part 1) | `files-by-week/week 11.txt` |
| 12 | July 20 | Health and Wellness (Part 2) | `files-by-week/week 12.txt` |

All week entries are fully populated with complete reflection text. No pending or placeholder content.

---

## 4. Page-by-page wireframe

### Home
1. Hero (full viewport) — "From Awareness to Participation" headline, subheading, CTA buttons into Journey + About (staggered entrance on load via GSAP)
2. Overview section — "The Core Intent" framing with profile image (`src/image/profile.jpg`) beside text
3. Week preview grid — compact cards for all 11 weeks (week number, date, title), each links to its Journey anchor; cards lift on hover with border shift

### About
1. 3D floating background (React Three Fiber) — molecule cluster, book stack, and atom objects with mouse parallax and `Float` buoyancy
2. Hero — Alvin Valeza name + tagline (staggered entrance)
3. Course context — why this capstone and why a website format
4. Format card — explanation of the interactive digital archive
5. Photo gallery — 2-column image grid (clickable, opens `ImageLightbox` fullscreen modal)
6. Learning philosophy quote — bordered callout
7. Tech stack + build documentation (3 cards: tech, workflow, methodology) — each lifts on hover with icon scale
8. Artifact metadata sidebar — sticky, with submission details and "Final Submission" status
9. CTA into Journey

### Journey (single scrolling page)
Each week section renders the full reflection text. Structure per week section:
1. Header: week number badge + date + title (sticky on desktop)
2. Full reflection text (multi-paragraph, `.reveal` staggered fade-rise via ScrollTrigger)

All weeks render identically — no "quiet" or "pending" variants.

### Documentation
1. Hero — title + subtitle describing the behind-the-scenes process
2. 3-phase gallery — Planning (6 images), Development (3 images), Output (5 images), each in a responsive grid (`sm:grid-cols-2 lg:grid-cols-3`) with hover lift and border shift
3. ImageLightbox — click any thumbnail for fullscreen zoom
4. CTA into Journey
5. External links row — GitHub source + Vercel live site (opens in new tab)

### Resources
Resources grouped by week (scroll-triggered fade-in) with sidebar week navigation. Each resource card shows:
- Type icon (video, reading, file, book) — icon scales on hover
- Title, author, publication, year
- "Open" external link button (or "No link" text if unavailable)
- PDF file links for attached readings

---

## 5. Design system

### Palette — Light mode
| Token | Hex | CSS variable | Use |
|---|---|---|---|
| `primary` | `#02342D` | `--color-primary` | Nav background, hero background, primary CTAs |
| `on-primary` | `#FFFFFF` | `--color-on-primary` | Text on primary backgrounds |
| `primary-container` | `#1F4B43` | `--color-primary-container` | Hover states, secondary backgrounds |
| `secondary` | `#9E4126` | `--color-secondary` | Secondary accent (coral) |
| `secondary-container` | `#FF8B6A` | `--color-secondary-container` | Active nav link, highlights |
| `tertiary-fixed-dim` | `#F5BD58` | `--color-tertiary-fixed-dim` | Gold accent, quote borders, progress bar |
| `on-surface` | `#1C1C18` | `--color-on-surface` | Primary text |
| `text-muted` | `#4A473F` | `--color-text-muted` | Body/secondary text |
| `background` | `#FDF9F2` | `--color-background` | Page background (warm cream) |
| `surface-container-low` | `#F7F3EC` | `--color-surface-container-low` | Card backgrounds |
| `surface-container-lowest` | `#FFFFFF` | `--color-surface-container-lowest` | Elevated cards |
| `outline-variant` | `#C0C8C5` | `--color-outline-variant` | Card borders |
| `forest-accent` | `#3B8B5C` | `--color-forest-accent` | Status indicators |

### Palette — Dark mode
All tokens swap via `.dark` class on `<html>`. Backgrounds invert to near-black (`#111` → `#3a3a3a`), text becomes white/light gray, green primary switches to bright `#4cc77a` for button visibility, headings become white. Nav uses glassmorphism (`bg-white/[0.03] backdrop-blur-xl` default, `bg-white/[0.06] backdrop-blur-2xl` when scrolled, with `border-white/[0.08]`). Mobile drawer uses matching glass style.

### Typography
- **Display:** Playfair Display (serif), weight 400–700 — headlines only
- **Body:** Inter (sans), weight 300–700 — nav, body copy, captions, buttons
- **Source:** Google Fonts (loaded via `index.html`)

### Layout tokens
- Card radius: `--radius-card` = 12px; Button radius: `--radius-btn` = 8px
- Section padding: 56–128px py depending on context
- Max content width: `max-w-7xl` (nav/footer); `max-w-6xl` (page content)

---

## 6. Animation & transition plan (GSAP)

### Shared — `usePageEnter` hook
All pages use this hook for:
- **Hero entrance:** `.hero-enter` elements staggered in (y: 40, opacity: 0 → 1, stagger 0.12s, power3.out)
- **Scroll reveals:** `.fade-in` elements fade+rise on scroll via ScrollTrigger

### Home
- Hero title, subtitle, buttons stagger in on load
- Content sections reveal on scroll
- Week preview cards: lift on hover (`hover:-translate-y-1`, border shift)
- CTA buttons: arrow icon shifts right on hover

### About
- 3D Background: React Three Fiber canvas with academic-themed objects (molecule, book, atom), mouse parallax via `useFrame` pointer lerp, `Float` component for buoyancy. Objects rotate independently. Colors adapt to theme (light: teal/coral/gold; dark: green/peach/amber).
- Desktop decorative shapes with CSS `@keyframes float` animation (fallback for mobile)

### Journey
- Hero staggered entrance
- Week sections: `.reveal` class staggered fade-rise via ScrollTrigger `onEnter` (stagger 0.1s)
- Right-rail ScrollProgress indicator tracks position through all 11 weeks

### Documentation
- Hero staggered entrance
- Phase sections: fade-in on scroll with `.fade-in` + inline y/opacity
- Thumbnails: lift on hover (`hover:-translate-y-0.5`, border shift, image scale 1.05)
- External link icons: scale on hover
- ImageLightbox: fullscreen modal with backdrop blur and Escape key close

### Resources
- Hero staggered entrance
- Resource cards: fade-in on scroll + lift on hover with icon scale

### Navbar
- Desktop links: underline draw on hover (`w-0 → w-full`, bezier 0.32/0.72/0/1)
- Mobile drawer: left slide (85vw, 500ms custom bezier) with glass backdrop
- Dark mode: glassmorphism (`bg-white/[0.03] backdrop-blur-xl` default, `bg-white/[0.06] backdrop-blur-2xl` when scrolled)
- Drawer links: staggered slide-up entrance (`320 + i*90ms` delay) with opacity transition
- Theme toggle: sun/moon SVG icon swap, `.dark` class toggled on `<html>`, persisted to `localStorage`

### Technical notes
- All GSAP animations use `transform` and `opacity` only (GPU-friendly)
- GSAP + ScrollTrigger registered via `gsap.registerPlugin`
- Per-component GSAP cleanup on unmount via `gsap.context()` + `ctx.revert()`
- Custom easing: `cubic-bezier(0.32, 0.72, 0, 1)` for entrances and hover transitions
- 3D canvas uses `dpr={[1, 1.5]}` and `powerPreference: "high-performance"` for efficiency; respects `prefers-reduced-motion`

---

## 7. Component architecture

```
src/
  components/
    layout/
      NavBar.tsx               — sticky nav, glassmorphism (dark mode), desktop underline links, mobile side drawer with staggered entrance, theme toggle
      Footer.tsx               — site footer with animated underline links
      ScrollProgress.tsx       — "Week N of 11" right-rail indicator (Journey page only)
    shared/
      WeekPreviewCard.tsx      — week number, date, title; lift on hover, links to /journey#week-N
      SectionHeading.tsx       — serif headline wrapper
      Hero.tsx                 — reusable hero (title, subtitle, children slot for CTAs)
      ImageLightbox.tsx        — fullscreen image modal (Escape/backdrop to close, body scroll lock)
    journey/
      WeekSection.tsx          — sticky header + reflection text card with GSAP ScrollTrigger reveal
    AboutBackground3D.tsx      — R3F canvas: molecule (sphere cluster), book (stacked pages), atom (torus rings + orbiting spheres), Float + mouse parallax
    ThemeToggle.tsx            — sun/moon SVG button, calls useTheme().toggle
  pages/
    Home.tsx                   — hero + core intent + week preview grid
    About.tsx                  — 3D bg + hero + context + gallery + philosophy + tech cards + sidebar + CTA
    Journey.tsx                — hero + 11 WeekSection components + ScrollProgress
    Documentation.tsx          — hero + 3-phase gallery grid (planning/dev/output) with ImageLightbox + external GitHub/live links
    Resources.tsx              — hero + sidebar nav + resource cards grouped by week
  hooks/
    usePageEnter.ts            — shared hook: GSAP hero entrance + ScrollTrigger fade-in reveals
    useTheme.ts                — dark/light toggle with localStorage persistence, system preference detection
  data/
    weeks.ts                   — 11 fully-populated WeekEntry objects (weeks 2–12)
    capstone.ts                — profile, course context, tech stack, philosophy, methodology
    resources.ts               — 37 ResourceEntry objects tagged by weekNumber (8 without URLs)
    documentation.ts           — 3 DocPhase entries with 14 DocImage items (planning + dev + output)
```

---

## 8. File structure (project root)

- `PROJECT_SPEC.md` — this file
- `GSAP_Animation_Skills_Plan.md` — GSAP + Three.js implementation plan and reference
- `files-by-week/` — source `.txt` files (weeks 2–12)
- `public/pdf-files/` — attached PDF readings (6 files)
- `public/av-logo.svg` — custom "AV" monogram favicon
- `public/favicon.svg` — fallback favicon
- `public/icons.svg` — additional icon assets
- `src/` — React application source
- `src/image/` — profile.jpg + IMG_4042.jpeg + IMG_4074.jpeg (About page gallery)
- `src/image/documentation/` — 14 doc screenshots (6 planning + 3 dev + 5 output)

---

## 9. Open items

- [ ] Confirm URLs for 8 resources currently marked "No link" on Resources page
- [ ] Decide whether Wellness Continuum Self-Assessment file exists or needs to be created
