# Creative Capstone Website — Project Spec

## 1. Project overview

- **Type:** Academic creative capstone (reflective response to a global citizenship / cross-cultural / sustainability course)
- **Profile name:** Alvin Valeza
- **Format chosen:** Interactive webpage (built custom, not Wix/WordPress)
- **Stack:** React 19 + TypeScript 6 + Tailwind CSS v4 + GSAP 3.15 (ScrollTrigger)
- **Build tool / workflow:** Vite 8 + OpenCode CLI (AI-assisted coding agent)
- **Core idea:** The site walks through an 11-week learning journey (weeks 2–12), presented chronologically week by week. Each week displays the student's full reflective response from the `.txt` files — the most important lesson, student growth, professional perspective, and citizen perspective — rendered verbatim as the week's content. There is no separate Synthesis page; the student/professional/citizen reflection is embedded within each week's own content.

---

## 2. Sitemap

```
Home
 ├── About
 ├── Journey (single continuous scroll page, chronological by week)
 │     ├── Hero
 │     ├── Week 2  — Citizenship and Global Responsibility (Part 1)
 │     ├── Week 3  — Citizenship and Global Responsibility (Part 2)
 │     ├── Week 4  — Cross-Cultural Understanding (Part 1)
 │     ├── Week 5  — Cross-Cultural Understanding (Part 2)
 │     ├── Week 6  — Indigenous Understanding (Part 1)   [quiet]
 │     ├── Week 7  — Indigenous Understanding (Part 2)   [quiet]
 │     ├── Week 8  — Entrepreneurship & Technology
 │     ├── Week 9  — Ecological Literacy (Part 1)
 │     ├── Week 10 — Ecological Literacy (Part 2)
 │     ├── Week 11 — Health and Wellness (Part 1)
 │     └── Week 12 — Health and Wellness (Part 2)
 └── Resources (references by week)
```

Global nav (sticky): logo/name + About / Journey / Resources — desktop links with hover underline draw animation. On mobile, hamburger toggles a left-side sliding drawer (85vw, dark teal background, close icon top-right). On the Journey page, a right-rail `ScrollProgress` component shows "Week N of 12" as the user scrolls.

Weeks 6–7 (Indigenous Understanding) use a `quiet` flag for restrained animation — linear fades, no bounce, no color transitions, sage-muted accent.

---

## 3. Content mapping (by week)

| Week | Date | Title | Status | Source file |
|------|------|-------|--------|-------------|
| 2 | May 4 | Citizenship and Global Responsibility (Part 1) | ✅ Ready | `files-by-week/week 2.txt` |
| 3 | May 11 | Citizenship and Global Responsibility (Part 2) | ✅ Ready | `files-by-week/week 3.txt` |
| 4 | May 18 | Cross-Cultural Understanding (Part 1) | ✅ Ready | `files-by-week/week 4.txt` |
| 5 | May 25 | Cross-Cultural Understanding (Part 2) | ✅ Ready | `files-by-week/week 5.txt` |
| 6 | June 1 | Indigenous Understanding (Part 1) | ✅ Ready | `files-by-week/week 6.txt` |
| 7 | June 8 | Indigenous Understanding (Part 2) | ✅ Ready | `files-by-week/week 7.txt` |
| 8 | June 22 | Entrepreneurship & Technology | ⏳ Pending | — |
| 9 | June 29 | Ecological Literacy (Part 1) | ⏳ Pending | — |
| 10 | July 6 | Ecological Literacy (Part 2) | ⏳ Pending | — |
| 11 | July 13 | Health and Wellness (Part 1) | ⏳ Pending | — |
| 12 | July 20 | Health and Wellness (Part 2) | ⏳ Pending | — |

Each week card renders even while pending with a "coming soon" placeholder, so the sequence stays accurate.

---

## 4. Page-by-page wireframe

### Home
1. Hero (full viewport) — "From Awareness to Participation" headline, subheading, CTA buttons into Journey + About (staggered entrance on load via GSAP)
2. Overview section — "The Core Intent" framing with profile image (`src/image/profile.jpg`) beside text
3. Week preview grid — compact cards for all 11 weeks (week number, date, title, status), each links to its Journey anchor; cards lift on hover with border accent
4. CTA section — two buttons (View Full Journey, Resource Archive) with arrow shift animation on hover
5. Footer

### About
1. Hero — Alvin Valeza name + tagline (staggered entrance)
2. About the capstone — course context, why website format was chosen
3. Format card — explanation of the interactive format
4. Learning philosophy quote — bordered callout
5. Tech stack + build documentation (3 cards: tech, workflow, methodology) — each lifts on hover with icon scale
6. Artifact metadata sidebar — sticky, with submission details and status indicator
7. CTA into Journey

### Journey (single scrolling page)
Each week section renders **only** the content from the corresponding `.txt` file — no intro blurb, no follow-up question box, no references section. The full reflective text (split by `\n\n` into paragraphs) is the content of the week.

Structure per week section:
1. Header: week number badge + date + title
2. Full reflection text from the `.txt` file (multi-paragraph, `.reveal` staggered fade-rise via ScrollTrigger)

Pending weeks (8–12) render a "Content coming soon" placeholder.

Weeks 6–7 use `quiet` animation: sage-muted accent, `bg-surface-container-low` background, reduced motion.

### Resources
Resources are grouped by week in visible sections (scroll-triggered fade-in). Each resource card shows:
- Type icon (video, reading, file, book) — icon scales on hover
- Title, author, publication, year
- External link button (YouTube / web links) or dashed-border indicator if no URL is available
- PDF file links for attached readings

Items without confirmed URLs display with a muted "Pending" badge and dashed border. Resource cards lift on hover with subtle shadow.

### Synthesis
**Removed.** The student/professional/citizen reflection is embedded directly in each week's `.txt` content on the Journey page. No separate synthesis page exists.

---

## 5. Design system

### Palette
| Token | Hex | CSS variable | Use |
|---|---|---|---|
| `primary` | `#02342D` | `--color-primary` | Nav background, hero background, primary CTAs |
| `on-primary` | `#FFFFFF` | `--color-on-primary` | Text on primary backgrounds |
| `primary-container` | `#1F4B43` | `--color-primary-container` | Hover states, secondary backgrounds |
| `secondary` | `#9E4126` | `--color-secondary` | Secondary accent |
| `secondary-container` | `#FF8B6A` | `--color-secondary-container` | Active nav link, highlights |
| `tertiary-fixed-dim` | `#F5BD58` | `--color-tertiary-fixed-dim` | Gold accent, quote borders |
| `sage-muted` | `#6B7B70` | `--color-sage-muted` | Weeks 6–7 accent (quiet mode) |
| `on-surface` | `#1C1C18` | `--color-on-surface` | Primary text |
| `text-muted` | `#4A473F` | `--color-text-muted` | Body/secondary text |
| `background` | `#FDF9F2` | `--color-background` | Page background |
| `surface-container-low` | `#F7F3EC` | `--color-surface-container-low` | Card backgrounds, cream sections |
| `surface-container-lowest` | `#FFFFFF` | `--color-surface-container-lowest` | Elevated cards |
| `outline-variant` | `#C0C8C5` | `--color-outline-variant` | Card borders |

Accent color per week card: rotate `primary-container → forest-accent → tertiary-fixed-dim → secondary` across weeks, except 6–7 which always use `sage-muted`.

### Typography
- **Display:** Playfair Display (serif), weight 400–700 — headlines only, variable via `--font-display`
- **Body:** Inter (sans), weight 300–700 — nav, body copy, captions, buttons, variable via `--font-body`
- **Source:** Google Fonts (loaded via `index.html`)

### Layout tokens
- Card radius: `--radius-card` = 12px (0.75rem); Button radius: `--radius-btn` = 8px (0.5rem)
- Section padding: generous (56–128px py depending on context)
- Max content width: `max-w-7xl` (80rem) for nav/footer; `max-w-6xl` (72rem) for page content

---

## 6. Animation & transition plan (GSAP)

### Shared — `usePageEnter` hook (`src/hooks/usePageEnter.ts`)
All pages use this hook to:
- **Hero entrance:** Elements with `.hero-enter` class staggered in (y: 40, opacity: 0 → 1, stagger 0.12s, power3.out)
- **Scroll reveals:** Elements with `.fade-in` class fade+rise on scroll via ScrollTrigger (start: "top 85%", y: 0 → opacity: 1, power3.out)

### Home
- Hero title, subtitle, buttons stagger in on load via `.hero-enter` (handled by shared hook)
- Content sections reveal on scroll via `.fade-in`
- Week preview cards: staggered fade-in on scroll + lift on hover (`hover:-translate-y-1`, border shift)
- CTA buttons: arrow icon shifts right on hover (`group-hover:translate-x-0.5`)

### About
- Hero: same fade + rise pattern via shared hook
- Content sections: fade-in on scroll (`.fade-in`)
- Tech stack cards: lift on hover + icon scale + subtle shadow
- Background: decorative animated blobs (CSS pulse/float animations)

### Journey
- Hero: `.hero-enter` staggered entrance via shared hook
- Week sections: children fade + rise in sequence via ScrollTrigger `onEnter` (`.reveal` class, staggered 0.1s)
- Weeks 6–7: linear fades only, no bounce easing, sage-muted accent

### Resources
- Hero: `.hero-enter` staggered entrance via shared hook
- Citation cards: fade-in on scroll (`.fade-in`) + lift on hover with icon scale

### Navbar
- Desktop links: underline draw animation on hover (`w-0 → w-full`, custom bezier 0.32/0.72/0/1)
- Mobile drawer: slides from left (85vw, `translate-x`, 500ms custom bezier)
- Hamburger: fades out when drawer opens; close icon appears inside drawer top-right
- Drawer links: staggered slide-up entrance (`320 + i*90ms` delay)
- Nav background: transitions from solid to `bg-primary/95 backdrop-blur-md` on scroll

### Footer
- Links: underline draw animation on hover (same bezier as nav)

### Technical notes
- All animations use `transform` and `opacity` only (GPU-friendly)
- GSAP + ScrollTrigger registered in `usePageEnter.ts` via `gsap.registerPlugin`
- Per-component GSAP cleanup on unmount via `gsap.context()` and `ctx.revert()`
- Custom easing: `cubic-bezier(0.32, 0.72, 0, 1)` for entrance and hover transitions
- `will-change: transform, opacity` used on actively animating elements (sidebar links)

---

## 7. Component architecture

```
src/
  components/
    layout/
      NavBar.tsx              — sticky nav with desktop links (underline hover) + mobile side drawer (85vw, left slide, close icon)
      Footer.tsx              — site footer with animated underline links
      ScrollProgress.tsx      — "Week N of 12" right-rail indicator (Journey page only)
    shared/
      WeekPreviewCard.tsx     — week number, date, title, status badge; lift + border hover
      SectionHeading.tsx      — serif headline wrapper
      Hero.tsx                — reusable hero (title, subtitle, children slot for CTAs); tags elements with .hero-enter
    journey/
      WeekSection.tsx         — renders full .txt reflection content, split by \n\n; .reveal staggered entrance
      JourneyProgress.tsx     — unused scaffold
  pages/
    Home.tsx
    About.tsx
    Journey.tsx
    Resources.tsx
  hooks/
    usePageEnter.ts           — shared hook: hero entrance + scroll reveal (GSAP + ScrollTrigger)
  data/
    weeks.ts                  — 11 week entries: number, date, title, reflection (full .txt content), status, quiet?
    capstone.ts               — profile, course context, tech stack, philosophy
    resources.ts              — 37 resources tagged by weekNumber, type, url (or undefined)
```

`WeekSection` accepts `week` prop with `status` + `quiet` + `reflection` fields. The `reflection` field stores the entire `.txt` file content verbatim and is split on `\n\n` for rendering.

Resources page groups by week using `weekNumber` field. Items with no confirmed URL render as plain text with dashed border.

Shared components use `group-hover` Tailwind pattern for hover micro-interactions (icon shift, scale, underline draw).

---

## 8. File structure (project root)

- `PROJECT_SPEC.md` — this file
- `RESOURCES_BY_WEEK.md` — full resource table by week
- `RESOURCES_BY_WEEK_guide.md` — detailed guide with notes on missing URLs
- `files-by-week/` — source .txt files (weeks 2–7)
- `pdf-files/` — attached PDF readings (7 files)
- `src/` — React application source
- `src/image/profile.jpg` — profile photo (Alvin Valeza)
- `src/hooks/usePageEnter.ts` — shared GSAP entrance/scroll hook
- `public/` — static assets
- `dist/` — production build output

---

## 9. Open items / pending inputs

- [ ] Week 8 content: reflection text + resources (Entrepreneurship & Technology)
- [ ] Week 9 content: reflection text (Ecological Literacy Part 1)
- [ ] Week 10 content: reflection text (Ecological Literacy Part 2)
- [ ] Week 11 content: reflection text (Health & Wellness Part 1)
- [ ] Week 12 content: reflection text (Health & Wellness Part 2)
- [ ] Confirm URLs for 6 resources marked "No link available" on Resources page
- [ ] Decide whether Wellness Continuum Self-Assessment file exists or needs to be created
- [ ] Replace `src/image/profile.jpg` with high-resolution version if available

---

## 10. Reference materials (by week)

See `RESOURCES_BY_WEEK.md` for the full grouped reference table, or `src/data/resources.ts` for the structured data consumed by the Resources page. PDF files live in `pdf-files/`. Video URLs are linked directly. 6 items have no confirmed URL and display as plain text until found.
