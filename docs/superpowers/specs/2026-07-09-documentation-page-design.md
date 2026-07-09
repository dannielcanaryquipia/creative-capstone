# Documentation Page — Design Spec

## Purpose
Add a new `/documentation` page showing the behind-the-scenes journey of building the capstone website — planning papers, OpenCode CLI development sessions, and final output screenshots.

## Route & Navigation
- **URL:** `/documentation`
- **Nav label:** Documentation
- **Nav position:** 4th link (About → Journey → Resources → Documentation)
- **Route added to:** `App.tsx`

## New Files
- `src/pages/Documentation.tsx` — page component
- `src/data/documentation.ts` — image data grouped by phase
- Images in `src/image/documentation/` — user places files here

## Reused Components
- `Hero` — same staggered entrance as other pages
- `ImageLightbox` — click-to-zoom on any gallery image
- `SectionHeading` — phase titles

## Data Structure
```ts
interface DocImage {
  filename: string;
  caption: string;
  alt: string;
}
interface DocPhase {
  number: number;
  title: string;
  subtitle: string;
  images: DocImage[];
}
```

## Page Structure
1. Hero — "Documentation" title + subtitle describing the build process
2. Phase 1: Planning — papers, sketches, plans by week
3. Phase 2: Development — OpenCode CLI sessions, build process
4. Phase 3: Output — final website screenshots
5. CTA link to Journey page

## Layout per Phase
- Phase heading with number + title + subtitle
- Responsive image grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Each image: rounded card with subtle border, hover lift, caption below
- Click opens ImageLightbox (fullscreen zoom)
- Fade-in on scroll via `.fade-in` (existing GSAP pattern)

## Dependencies
- `Hero`, `ImageLightbox`, `SectionHeading` — already exist
- `usePageEnter` — already exists
- No new npm packages

## Implementation Order
1. Create `src/data/documentation.ts` with phase/image data structure (empty image arrays)
2. Create `src/pages/Documentation.tsx` using existing components
3. Add route to `App.tsx`
4. Add "Documentation" link to `NavBar`
5. User places images in `src/image/documentation/` and updates the data file
6. Verify build
