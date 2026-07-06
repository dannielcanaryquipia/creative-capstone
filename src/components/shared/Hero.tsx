import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`relative min-h-[70dvh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden ${className}`}
    >
      <div className="relative z-10 max-w-3xl">
        <h1 className="hero-enter font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-enter mt-5 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-enter mt-8 flex flex-col items-center">
            {children}
          </div>
        )}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-primary-container opacity-5 blur-3xl pointer-events-none" />
    </section>
  );
}
