import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "../../ThemeToggle";

const links = [
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/resources", label: "Resources" },
  { to: "/documentation", label: "Documentation" },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-sm"
            : "bg-primary"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-lg tracking-tight text-on-primary hover:text-secondary-container transition-colors"
          >
            Alvin Valeza
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`group relative transition-colors ${
                  pathname.startsWith(l.to)
                    ? "text-secondary-container font-bold"
                    : "text-on-primary/80 hover:text-on-primary"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary-container transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    pathname.startsWith(l.to)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className={`text-on-primary p-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="5" x2="21" y2="5" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="19" x2="21" y2="19" />
            </svg>
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay — rendered outside <nav> so backdrop-filter doesn't break fixed positioning */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile side panel — rendered outside <nav> */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[85vw] bg-primary dark:bg-white/[0.04] dark:backdrop-blur-2xl dark:border-r dark:border-white/[0.06] z-50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end px-8 pt-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-on-primary/60 hover:text-on-primary p-2 transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-3 px-6 mt-16">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-4 px-6 rounded-2xl text-lg tracking-tight font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                pathname.startsWith(l.to)
                  ? "text-secondary-container bg-primary-container/20"
                  : "text-on-primary/80 hover:text-on-primary hover:bg-primary-container/10"
              }`}
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? `${320 + i * 90}ms` : "0ms",
                willChange: "transform, opacity",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
