# Task 2: Page component — src/pages/Documentation.tsx

Create the Documentation page component using existing shared components.

## Files
- Create: `src/pages/Documentation.tsx`

## Dependencies
- `Hero` from `../components/shared/Hero`
- `SectionHeading` from `../components/shared/SectionHeading`
- `ImageLightbox` from `../components/shared/ImageLightbox`
- `phases, DocImage` from `../data/documentation`
- `ArrowRight` from `@phosphor-icons/react`
- `usePageEnter` from `../hooks/usePageEnter`
- Import images dynamically: `new URL(../image/documentation/${img.filename}, import.meta.url).href`

## Exact Content

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

## Verify
- Run `npm run build` — must pass with no errors
