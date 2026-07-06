import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { weeks } from "../../data/weeks";

export default function ScrollProgress() {
  const { pathname } = useLocation();
  const isJourney = pathname === "/journey";
  const [current, setCurrent] = useState(2);

  useEffect(() => {
    if (!isJourney) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / total;
      const index = Math.min(
        Math.floor(progress * weeks.length),
        weeks.length - 1
      );
      setCurrent(weeks[index]?.number ?? 2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isJourney]);

  if (!isJourney) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium" style={{ writingMode: "vertical-rl" }}>
        Progress
      </span>
      <div className="relative h-40 w-px bg-outline-variant/50 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-tertiary-fixed-dim transition-all duration-200 rounded-full"
          style={{
            height: `${((current - 2) / (weeks.length - 1)) * 100}%`,
          }}
        />
      </div>
      <div className="text-xs font-medium text-primary bg-surface-container-low px-2.5 py-1.5 rounded-full border border-outline-variant/30">
        <span className="font-bold">{current}</span>
        <span className="text-text-muted/60"> / {weeks.length}</span>
      </div>
    </div>
  );
}
