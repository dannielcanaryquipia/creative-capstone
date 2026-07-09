import { useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/shared/Hero";
import WeekPreviewCard from "../components/shared/WeekPreviewCard";
import { weeks } from "../data/weeks";
import { ArrowRight } from "@phosphor-icons/react";
import { usePageEnter } from "../hooks/usePageEnter";
import profileImg from "../image/profile.jpg";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  usePageEnter(ref);

  return (
    <div ref={ref}>
      <Hero
        title="From Awareness to Participation"
        subtitle="A creative capstone reflection by Alvin Valeza — 11 weeks of learning about global citizenship, cross-cultural understanding, Indigenous knowledge, sustainability, and wellness."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/journey"
            className="group inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary-container transition-all duration-300 active:scale-[0.97]"
          >
            <span>Begin the journey</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-3 rounded-lg text-sm font-medium bg-transparent hover:bg-secondary/5 transition-all duration-300 active:scale-[0.97]"
          >
            <span>About</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Hero>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in flex flex-col md:flex-row gap-12 md:gap-16 items-center mb-20" style={{ y: 24, opacity: 0 }}>
            <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-surface-container-high">
              <img
                src={profileImg}
                alt="Alvin Valeza"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-primary leading-tight">
                The Core Intent
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
                <p>
                  Over eleven weeks, this course traced an arc from passive awareness
                  to active, values-based participation — across citizenship,
                  cross-cultural understanding, Indigenous history, entrepreneurship,
                  ecology, and wellness.
                </p>
                <p>
                  This site documents that journey, week by week — each entry a
                  milestone in an evolving perspective on global responsibility.
                </p>
              </div>
              <div className="border-l-4 border-tertiary-fixed-dim pl-5 py-2 italic text-primary font-medium">
                "Awareness is the seed, but participation is the harvest."
              </div>
            </div>
          </div>

          <h2 className="fade-in font-display text-2xl md:text-3xl tracking-tight text-primary mb-8" style={{ y: 24, opacity: 0 }}>
            The Journey Timeline
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {weeks.map((w) => (
              <WeekPreviewCard
                key={w.number}
                number={w.number}
                date={w.date}
                title={w.title}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
