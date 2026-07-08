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

  useEffect(() => {
    if (!ref.current) return;
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
  }, []);

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
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-outline-variant/30 text-text-muted mb-3">
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
          <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 p-6 md:p-8">
            <div className="space-y-5 text-sm md:text-base text-text-muted leading-relaxed">
              {week.reflection.split("\n\n").map((para, i) => (
                <p key={i} className="reveal" style={{ y: 20, opacity: 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
