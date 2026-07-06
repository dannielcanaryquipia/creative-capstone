import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: Props) {
  return (
    <h2
      className={`font-display text-3xl md:text-4xl tracking-tight leading-tight text-primary ${className}`}
    >
      {children}
    </h2>
  );
}
