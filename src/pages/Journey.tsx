import { useRef } from "react";
import WeekSection from "../components/journey/WeekSection";
import JourneyProgress from "../components/journey/JourneyProgress";
import { weeks } from "../data/weeks";
import { usePageEnter } from "../hooks/usePageEnter";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  usePageEnter(ref);

  return (
    <div ref={ref}>
      <section className="relative min-h-[60dvh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="relative z-10 max-w-3xl">
          <p className="hero-enter font-body text-xs md:text-sm text-secondary uppercase tracking-[0.2em] mb-4 font-medium">
            Chronological Archive
          </p>
          <h1 className="hero-enter font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-primary">
            The Journey
          </h1>
          <p className="hero-enter mt-4 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Eleven weeks of learning, traced chronologically. Each entry documents the evolution of perspective through global citizenship, cross-cultural understanding, Indigenous knowledge, and beyond.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-primary-container opacity-5 blur-3xl pointer-events-none" />
      </section>

      <div className="border-t border-outline-variant/20" />

      {weeks.map((week) => (
        <WeekSection key={week.number} week={week} />
      ))}

      {weeks.length > 0 && <div className="border-t border-outline-variant/20" />}

      <JourneyProgress />
    </div>
  );
}
