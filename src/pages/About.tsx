import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/shared/Hero";
import AboutBackground3D from "../components/AboutBackground3D";
import ImageLightbox from "../components/shared/ImageLightbox";
import { capstone } from "../data/capstone";
import { ArrowRight, Code } from "@phosphor-icons/react";
import img1 from "../image/IMG_4042.jpeg";
import img2 from "../image/IMG_4074.jpeg";
import { usePageEnter } from "../hooks/usePageEnter";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  usePageEnter(ref);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div ref={ref} className="relative">
      <AboutBackground3D />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 md:hidden">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-primary-container/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute top-3/4 right-[15%] w-96 h-96 bg-secondary-fixed-dim/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-outline-variant/20 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] border border-outline-variant/10 rounded-full rotate-45" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-outline-variant/10 rounded-full" style={{ animation: "float 6s ease-in-out infinite" }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary-container/20 rounded-full" style={{ animation: "float 8s ease-in-out infinite reverse" }} />
      </div>

      <Hero title="Alvin Valeza" subtitle="Navigating Global Citizenship through Chronological Reflection and Technical Rigor." />

      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7 space-y-8">
            <div className="fade-in space-y-4" style={{ y: 24, opacity: 0 }}>
              <h2 className="font-display text-3xl tracking-tight text-primary">The Context</h2>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {capstone.courseContext}
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {capstone.whyWebsite}
              </p>
            </div>

            <div className="fade-in rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 md:p-6" style={{ y: 24, opacity: 0 }}>
              <div className="flex items-center gap-2 mb-3 text-secondary">
                <span className="text-xs uppercase tracking-wider font-medium">Format</span>
              </div>
              <h3 className="font-display text-lg md:text-xl text-primary mb-2">Digital Archive / Web Experience</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                This capstone is presented as an interactive webpage rather than a traditional document, allowing each week to exist as its own moment while remaining part of a continuous scroll — mirroring the cumulative nature of the learning journey itself.
              </p>
            </div>

            <div className="fade-in grid grid-cols-2 gap-4" style={{ y: 24, opacity: 0 }}>
              <button onClick={() => setLightboxSrc(img1)} className="rounded-xl overflow-hidden bg-surface-container-high aspect-[4/3] cursor-pointer group">
                <img src={img1} alt="Alvin Valeza" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
              <button onClick={() => setLightboxSrc(img2)} className="rounded-xl overflow-hidden bg-surface-container-high aspect-[4/3] cursor-pointer group">
                <img src={img2} alt="Alvin Valeza" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
            </div>

            <div className="fade-in" style={{ y: 24, opacity: 0 }}>
              <div className="border-l-4 border-secondary pl-5 py-3">
                <p className="text-sm md:text-base text-text-muted leading-relaxed italic">
                  &ldquo;{capstone.learningPhilosophy}&rdquo;
                </p>
              </div>
            </div>

            <div className="fade-in space-y-4" style={{ y: 24, opacity: 0 }}>
              <h2 className="font-display text-3xl tracking-tight text-primary">Technical Foundations</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="group rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-all duration-300 hover:border-secondary/40 hover:-translate-y-0.5 hover:shadow-sm">
                  <Code size={20} className="text-secondary mb-3 transition-transform duration-300 group-hover:scale-110" weight="duotone" />
                  <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-1 font-medium">Tech stack</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {capstone.techStack.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="group rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-all duration-300 hover:border-secondary/40 hover:-translate-y-0.5 hover:shadow-sm">
                  <Code size={20} className="text-secondary mb-3 transition-transform duration-300 group-hover:scale-110" weight="duotone" />
                  <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-1 font-medium">Workflow</p>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">{capstone.aiWorkflowNote}</p>
                </div>
                <div className="group rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-all duration-300 hover:border-secondary/40 hover:-translate-y-0.5 hover:shadow-sm">
                  <Code size={20} className="text-secondary mb-3 transition-transform duration-300 group-hover:scale-110" weight="duotone" />
                  <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-1 font-medium">Methodology</p>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">{capstone.methodologyNote}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="fade-in md:sticky md:top-24 bg-surface-container-low/80 backdrop-blur-sm rounded-xl border border-outline-variant/20 p-6 space-y-5" style={{ y: 24, opacity: 0 }}>
              <h3 className="text-xs uppercase tracking-widest text-secondary font-medium border-b border-outline-variant pb-2">
                Artifact Metadata
              </h3>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-0.5">Submitted by</p>
                <p className="font-medium text-on-surface">{capstone.submittedBy}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-0.5">Date range</p>
                <p className="font-medium text-on-surface">{capstone.dateRange}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-0.5">Format</p>
                <p className="font-medium text-on-surface">Digital Archive / Web Experience</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted/60 mb-0.5">Status</p>
                <p className="flex items-center gap-2 font-medium text-forest-accent">
                  <span className="w-2 h-2 bg-forest-accent rounded-full animate-pulse" />
                  Final Submission
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="fade-in flex justify-center pt-12" style={{ y: 24, opacity: 0 }}>
          <Link
            to="/journey"
            className="group inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-lg font-medium hover:bg-primary-container transition-all duration-300 active:scale-[0.97]"
          >
            <span>Explore the journey</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc}
          alt="Alvin Valeza"
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </div>
  );
}
