import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../components/Container";
import { ThemeToggle } from "../components/ThemeToggle";
import { profile } from "../data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-accent-200/40 bg-white/58 shadow-[0_10px_36px_rgb(15_23_42_/_16%)] backdrop-blur-xl dark:border-accent-400/20 dark:bg-slate-950/58 dark:shadow-[0_12px_34px_rgb(2_6_23_/_55%)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50"
          >
            <span className="neon-title">{profile.name}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/62 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="glass-surface rounded-xl p-2 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile slide-over */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/35 transition-opacity duration-300 dark:bg-black/55 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`glass-surface absolute top-0 right-0 h-full w-64 border-l border-accent-200/30 bg-white/70 p-6 pt-20 shadow-2xl transition-transform duration-300 ease-out dark:border-accent-400/20 dark:bg-slate-950/72 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-white/65 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
