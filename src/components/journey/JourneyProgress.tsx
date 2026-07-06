import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { weeks } from "../../data/weeks";

export default function JourneyProgress() {
  const { pathname } = useLocation();
  const isJourney = pathname === "/journey";
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!isJourney) return;
    const sections = weeks.map((w) => document.getElementById(`week-${w.number}`));
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setCurrentIdx(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
          className="absolute top-0 left-0 w-full bg-tertiary-fixed-dim transition-all duration-300 rounded-full"
          style={{ height: `${((currentIdx + 1) / weeks.length) * 100}%` }}
        />
      </div>
      <div className="text-xs font-medium text-primary bg-surface-container-low px-2.5 py-1.5 rounded-full border border-outline-variant/30">
        <span className="font-bold">{weeks[currentIdx]?.number ?? 2}</span>
        <span className="text-text-muted/60"> / {weeks.length}</span>
      </div>
    </div>
  );
}
