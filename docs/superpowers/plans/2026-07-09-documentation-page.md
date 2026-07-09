# Documentation Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/documentation` page with 3 phases (Planning, Development, Output) showing images of the build process.

**Architecture:** New page component + data file + route + nav link. Reuses existing Hero, ImageLightbox, SectionHeading components.

**Tech Stack:** React 19 + TypeScript + Tailwind v4 + Vite

**Global Constraints:**
- Images stored in `src/image/documentation/`
- Data defined in `src/data/documentation.ts`
- No new npm packages
- Follow existing patterns: `.fade-in` scroll reveals, `ImageLightbox` for zoom

---

### Task 1: Data file — `src/data/documentation.ts`

**Files:**
- Create: `src/data/documentation.ts`

**Interfaces:**
- Consumes: nothing
- Produces: `phases` array consumed by Documentation page

- [ ] **Step 1: Create data file**

```ts
export interface DocImage {
  filename: string;
  caption: string;
  alt: string;
}

export interface DocPhase {
  number: number;
  title: string;
  subtitle: string;
  images: DocImage[];
}

export const phases: DocPhase[] = [
  {
    number: 1,
    title: "Phase 1: Planning",
    subtitle: "Papers, sketches, and initial plans mapped out by week before any code was written.",
    images: [
      { filename: "planning-1.jpg", caption: "Week 2 & 3 — Global Citizenship planning notes", alt: "Planning notes for weeks 2 and 3" },
      { filename: "planning-2.jpg", caption: "Week 4 & 5 — Cross-Cultural Understanding outline", alt: "Outline for weeks 4 and 5" },
      { filename: "planning-3.jpg", caption: "Week 6 & 7 — Indigenous Understanding research", alt: "Research notes for weeks 6 and 7" },
      { filename: "planning-4.jpg", caption: "Week 8 — Entrepreneurship & Technology plan", alt: "Planning for week 8" },
      { filename: "planning-5.jpg", caption: "Week 9 & 10 — Ecological Literacy framework", alt: "Framework for weeks 9 and 10" },
      { filename: "planning-6.jpg", caption: "Week 11 & 12 — Health and Wellness structure", alt: "Structure for weeks 11 and 12" },
    ],
  },
  {
    number: 2,
    title: "Phase 2: Development",
    subtitle: "Building the site with OpenCode CLI — sessions, iterations, and technical decisions.",
    images: [
      { filename: "dev-1.jpg", caption: "Initial scaffold and route setup", alt: "OpenCode CLI initial scaffold" },
      { filename: "dev-2.jpg", caption: "Week content population and GSAP animations", alt: "Adding week content and animations" },
      { filename: "dev-3.jpg", caption: "Dark mode, 3D background, and polish", alt: "Dark mode and 3D background implementation" },
    ],
  },
  {
    number: 3,
    title: "Phase 3: Output",
    subtitle: "The final website — live screenshots of each page.",
    images: [
      { filename: "output-home.jpg", caption: "Home page — hero and week preview grid", alt: "Home page screenshot" },
      { filename: "output-about.jpg", caption: "About page with 3D background", alt: "About page screenshot" },
      { filename: "output-journey.jpg", caption: "Journey page — week-by-week reflections", alt: "Journey page screenshot" },
      { filename: "output-resources.jpg", caption: "Resources page", alt: "Resources page screenshot" },
      { filename: "output-dark.jpg", caption: "Dark mode — theme toggle active", alt: "Dark mode screenshot" },
    ],
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/documentation.ts
git commit -m "feat: add documentation data with 3 phase structure"
```

---

### Task 2: Page component — `src/pages/Documentation.tsx`

**Files:**
- Create: `src/pages/Documentation.tsx`

**Interfaces:**
- Consumes: `DocPhase`, `DocImage` from `src/data/documentation.ts`; `Hero`, `ImageLightbox`, `SectionHeading` components

- [ ] **Step 1: Create the page**

```tsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/shared/Hero";
import SectionHeading from "../components/shared/SectionHeading";
import ImageLightbox from "../components/shared/ImageLightbox";
import { phases, type DocImage } from "../data/documentation";
import { ArrowRight } from "@phosphor-icons/react";
import { usePageEnter } from "../hooks/usePageEnter";

export default function Documentation() {
  const ref = useRef<HTMLDivElement>(null);
  usePageEnter(ref);
  const [lightboxImg, setLightboxImg] = useState<DocImage | null>(null);

  return (
    <div ref={ref}>
      <Hero
        title="Documentation"
        subtitle="A behind-the-scenes look at the process — from paper planning and OpenCode CLI development to the final deployed website."
      />

      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto space-y-16">
        {phases.map((phase) => (
          <div key={phase.number} className="fade-in space-y-6" style={{ y: 24, opacity: 0 }}>
            <SectionHeading>
              <span className="text-secondary text-sm font-medium uppercase tracking-wider block mb-1">
                Phase {phase.number}
              </span>
              {phase.title}
            </SectionHeading>
            <p className="text-text-muted text-sm md:text-base max-w-2xl -mt-3">
              {phase.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phase.images.map((img) => {
                const src = new URL(`../image/documentation/${img.filename}`, import.meta.url).href;
                return (
                  <button
                    key={img.filename}
                    onClick={() => setLightboxImg(img)}
                    className="group text-left rounded-xl border border-outline-variant/30 bg-surface-container-lowest overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm hover:border-secondary/40 cursor-pointer"
                  >
                    <div className="aspect-[4/3] bg-surface-container-high overflow-hidden">
                      <img
                        src={src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-text-muted px-3 py-2 leading-relaxed">
                      {img.caption}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="fade-in flex justify-center pt-8" style={{ y: 24, opacity: 0 }}>
          <Link
            to="/journey"
            className="group inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-lg font-medium hover:bg-primary-container transition-all duration-300 active:scale-[0.97]"
          >
            <span>Explore the journey</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {lightboxImg && (
        <ImageLightbox
          src={new URL(`../image/documentation/${lightboxImg.filename}`, import.meta.url).href}
          alt={lightboxImg.alt}
          onClose={() => setLightboxImg(null)}
        />
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Documentation.tsx
git commit -m "feat: add Documentation page with 3-phase gallery"
```

---

### Task 3: Route and Nav — wire it into the app

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/shared/layout/NavBar.tsx`

- [ ] **Step 1: Add route to App.tsx**

Add import after the existing page imports (line 8):
```tsx
import Documentation from "./pages/Documentation";
```

Add route after Resources route (around line 19):
```tsx
<Route path="/documentation" element={<Documentation />} />
```

- [ ] **Step 2: Add link to NavBar**

Add to the `links` array after Resources:
```tsx
{ to: "/documentation", label: "Documentation" },
```

- [ ] **Step 3: Build and verify**

```bash
npm run build
```
Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/components/shared/layout/NavBar.tsx
git commit -m "feat: wire Documentation route and nav link"
```
