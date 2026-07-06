import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WeekEntry } from "../../data/weeks";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  week: WeekEntry;
}

export default function WeekSection({ week }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isReady = week.status === "ready";
  const accent = week.accentColor ?? "#9E4126";
  const isQuiet = week.quiet;

  useEffect(() => {
    if (!isReady || !ref.current) return;
    const ctx = gsap.context(() => {
      const children = ref.current!.querySelectorAll(".reveal");
      ScrollTrigger.create({
        trigger: ref.current!,
        start: "top 82%",
        onEnter: () => {
          gsap.to(children, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.set(children, { y: 20, opacity: 0 });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [isReady]);

  if (isQuiet && isReady) {
    return (
      <section
        id={`week-${week.number}`}
        ref={ref}
        className="py-24 md:py-32 px-6 bg-surface-container-low"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal space-y-2 mb-6" style={{ y: 20, opacity: 0 }}>
            <span className="inline-block px-3 py-1 border border-sage-muted/40 text-sage-muted text-xs font-medium rounded-full">
              Quiet Reflection &middot; Week {week.number}
            </span>
            <p className="text-sm text-text-muted italic">{week.date}</p>
          </div>
          <h2
            className="reveal font-display text-3xl md:text-4xl lg:text-5xl text-sage-muted mb-10 leading-tight"
            style={{ y: 20, opacity: 0 }}
          >
            {week.title}
          </h2>
          <div className="reveal space-y-6 text-sm md:text-base text-sage-muted/80 leading-relaxed max-w-xl mx-auto" style={{ y: 20, opacity: 0 }}>
            {week.reflection.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={`week-${week.number}`}
      ref={ref}
      className="py-20 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="md:w-1/4 shrink-0">
          <div className="md:sticky md:top-24">
            <div className="reveal" style={{ y: 20, opacity: 0 }}>
              <span
                className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3"
                style={{
                  borderColor: `${accent}40`,
                  backgroundColor: `${accent}10`,
                  color: accent,
                }}
              >
                Week {week.number}
              </span>
              <p className="text-sm text-text-muted italic mb-2">{week.date}</p>
              <h2 className="font-display text-xl md:text-2xl leading-tight text-primary">
                {week.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 max-w-3xl">
          {isReady ? (
            <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 p-6 md:p-8">
              <div className="space-y-5 text-sm md:text-base text-text-muted leading-relaxed">
                {week.reflection.split("\n\n").map((para, i) => (
                  <p key={i} className="reveal" style={{ y: 20, opacity: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="reveal flex flex-col items-center justify-center py-16 text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant/40"
              style={{ y: 20, opacity: 0 }}
            >
              <div className="w-12 h-px bg-outline-variant mb-6" />
              <p className="text-sm text-text-muted/50 italic">
                Content coming soon
              </p>
              <p className="text-xs text-text-muted/30 mt-2">
                This week's reflection will appear here once complete.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
