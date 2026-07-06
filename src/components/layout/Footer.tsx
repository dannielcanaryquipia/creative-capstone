import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary/80 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-on-primary text-lg">
            Alvin Valeza
          </p>
          <p className="text-sm text-on-primary/60 mt-1">
            Creative Capstone &middot; May – July 2026
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="group relative text-on-primary/70 hover:text-on-primary transition-colors">
            About
            <span className="absolute -bottom-1 left-0 h-px bg-on-primary/60 w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
          </Link>
          <Link to="/journey" className="group relative text-on-primary/70 hover:text-on-primary transition-colors">
            Journey
            <span className="absolute -bottom-1 left-0 h-px bg-on-primary/60 w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
          </Link>
          <Link to="/resources" className="group relative text-on-primary/70 hover:text-on-primary transition-colors">
            Resources
            <span className="absolute -bottom-1 left-0 h-px bg-on-primary/60 w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
          </Link>
        </div>
        <p className="text-xs text-on-primary/40">
          Built with React &middot; TypeScript &middot; Tailwind &middot; GSAP
        </p>
      </div>
    </footer>
  );
}
