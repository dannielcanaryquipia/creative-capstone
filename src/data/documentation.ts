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