# Task 1: Data file — src/data/documentation.ts

Create the data file defining the 3 phases and their image entries for the Documentation page.

## Files
- Create: `src/data/documentation.ts`

## Exact Data Structure

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

export const phases: DocPhase[];
```

## Exact Content

Phase 1 — Planning
- number: 1
- title: "Phase 1: Planning"
- subtitle: "Papers, sketches, and initial plans mapped out by week before any code was written."
- images: 6 entries
  - "planning-1.jpg", "Week 2 & 3 — Global Citizenship planning notes", "Planning notes for weeks 2 and 3"
  - "planning-2.jpg", "Week 4 & 5 — Cross-Cultural Understanding outline", "Outline for weeks 4 and 5"
  - "planning-3.jpg", "Week 6 & 7 — Indigenous Understanding research", "Research notes for weeks 6 and 7"
  - "planning-4.jpg", "Week 8 — Entrepreneurship & Technology plan", "Planning for week 8"
  - "planning-5.jpg", "Week 9 & 10 — Ecological Literacy framework", "Framework for weeks 9 and 10"
  - "planning-6.jpg", "Week 11 & 12 — Health and Wellness structure", "Structure for weeks 11 and 12"

Phase 2 — Development
- number: 2
- title: "Phase 2: Development"
- subtitle: "Building the site with OpenCode CLI — sessions, iterations, and technical decisions."
- images: 3 entries
  - "dev-1.jpg", "Initial scaffold and route setup", "OpenCode CLI initial scaffold"
  - "dev-2.jpg", "Week content population and GSAP animations", "Adding week content and animations"
  - "dev-3.jpg", "Dark mode, 3D background, and polish", "Dark mode and 3D background implementation"

Phase 3 — Output
- number: 3
- title: "Phase 3: Output"
- subtitle: "The final website — live screenshots of each page."
- images: 5 entries
  - "output-home.jpg", "Home page — hero and week preview grid", "Home page screenshot"
  - "output-about.jpg", "About page with 3D background", "About page screenshot"
  - "output-journey.jpg", "Journey page — week-by-week reflections", "Journey page screenshot"
  - "output-resources.jpg", "Resources page", "Resources page screenshot"
  - "output-dark.jpg", "Dark mode — theme toggle active", "Dark mode screenshot"

## No other files to modify

Just create the single data file.
