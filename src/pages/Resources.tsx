import { useRef, useMemo } from "react";
import { resources } from "../data/resources";
import type { ResourceEntry } from "../data/resources";
import { weeks } from "../data/weeks";
import { BookOpen, Video, FileText, Globe, ArrowSquareOut } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { usePageEnter } from "../hooks/usePageEnter";

const typeMeta: Record<string, { icon: ReactNode; label: string }> = {
  video: { icon: <Video size={16} weight="duotone" />, label: "Video" },
  reading: { icon: <Globe size={16} weight="duotone" />, label: "Reading" },
  file: { icon: <FileText size={16} weight="duotone" />, label: "File" },
  book: { icon: <BookOpen size={16} weight="duotone" />, label: "Book" },
  report: { icon: <FileText size={16} weight="duotone" />, label: "Report" },
  article: { icon: <FileText size={16} weight="duotone" />, label: "Article" },
};

export default function Resources() {
  const ref = useRef<HTMLDivElement>(null);
  usePageEnter(ref);

  const grouped = useMemo(() => {
    const map = new Map<number, ResourceEntry[]>();
    for (const r of resources) {
      if (!map.has(r.weekNumber)) map.set(r.weekNumber, []);
      map.get(r.weekNumber)!.push(r);
    }
    return map;
  }, []);

  return (
    <div ref={ref}>
      <section className="relative min-h-[50dvh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="relative z-10 max-w-3xl">
          <p className="hero-enter font-body text-xs md:text-sm text-secondary uppercase tracking-[0.2em] mb-4 font-medium">
            Knowledge Base
          </p>
          <h1 className="hero-enter font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-primary">
            Archive of Learning
          </h1>
          <p className="hero-enter mt-4 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            A curated repository of pedagogical artifacts, critical readings, and digital media encountered throughout the capstone journey.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-primary-container opacity-5 blur-3xl pointer-events-none" />
      </section>

      <div className="border-t border-outline-variant/20" />

      <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-48 shrink-0">
            <nav className="sticky top-24 flex flex-col gap-3 border-l border-outline-variant pl-4">
              <span className="text-[10px] uppercase tracking-widest text-outline font-medium mb-1">Timeline</span>
              {weeks.map((w) => {
                const hasResources = grouped.has(w.number) && grouped.get(w.number)!.length > 0;
                if (!hasResources) return null;
                return (
                  <a
                    key={w.number}
                    href={`#week-${w.number}`}
                    className="text-sm text-on-surface hover:text-secondary transition-colors"
                  >
                    Week {w.number}
                  </a>
                );
              })}
            </nav>
          </aside>

          <div className="flex-1 max-w-4xl">
            {weeks.map((week) => {
              const weekResources = grouped.get(week.number);
              if (!weekResources || weekResources.length === 0) return null;

              return (
                <div key={week.number} id={`week-${week.number}`} className="fade-in mb-14 scroll-mt-24" style={{ y: 16, opacity: 0 }}>
                  <div className="flex items-baseline gap-3 mb-6">
                    <h2 className="font-display text-2xl md:text-3xl tracking-tight text-primary">
                      Week {week.number}
                    </h2>
                    <span className="text-sm text-outline">{week.title}</span>
                  </div>

                  <div className="grid gap-3">
                    {weekResources.map((r: ResourceEntry, i: number) => {
                      const meta = typeMeta[r.type] ?? { icon: <BookOpen size={16} />, label: r.type };
                      const hasUrl = !!r.url;

                      return (
                        <div
                          key={i}
                          className={`group rounded-xl border p-5 flex flex-col sm:flex-row sm:items-start gap-4 transition-all duration-300 ${
                            hasUrl
                              ? "border-outline-variant/30 bg-surface-container-lowest hover:border-secondary/40 hover:-translate-y-0.5 hover:shadow-sm"
                              : "border-dashed border-outline-variant/50 bg-surface-container-low/50"
                          }`}
                        >
                          <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-1 sm:min-w-[80px] shrink-0">
                            <span className="text-secondary transition-transform duration-300 group-hover:scale-110">{meta.icon}</span>
                            <span className="text-[10px] uppercase tracking-wider text-text-muted/50 font-medium">
                              {meta.label}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className={`text-sm font-medium ${hasUrl ? "text-on-surface" : "text-text-muted/70"}`}>
                              {r.title}
                            </p>
                            {(r.author || r.publication || r.year) && (
                              <p className="text-xs text-text-muted/60 mt-1">
                                {[r.author, r.publication, r.year].filter(Boolean).join(" · ")}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            {!hasUrl && (
                              <span className="text-[10px] uppercase tracking-wider text-text-muted/30 font-medium whitespace-nowrap">
                                No link
                              </span>
                            )}
                            {hasUrl && (
                              <a
                                href={r.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-primary text-on-primary text-xs font-medium px-4 py-2 rounded-lg hover:bg-primary-container transition-all duration-300 active:scale-[0.97]"
                                aria-label={`Open ${r.title}`}
                              >
                                Open
                                <ArrowSquareOut size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
