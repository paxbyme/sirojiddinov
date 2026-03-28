import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../components/Container";
import { ThemeToggle } from "../components/ThemeToggle";
import { useTranslation } from "../i18n/useTranslation";

export function Navbar() {
  const { t, profile } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t.navAbout, href: "#about" },
    { label: t.navSkills, href: "#skills" },
    { label: t.navProjects, href: "#projects" },
    { label: t.navExperience, href: "#experience" },
    { label: t.navContact, href: "#contact" },
  ];

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
          ? "border-b border-accent-500/20 bg-white/80 shadow-[0_4px_24px_rgb(16_185_129_/_8%)] backdrop-blur-xl dark:border-accent-500/15 dark:bg-neutral-950/80 dark:shadow-[0_4px_24px_rgb(16_185_129_/_10%)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <a
            href="#"
            className="font-mono text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
          >
            <span className="text-accent-500 dark:text-accent-400">{"{"}</span>
            <span>{profile.name}</span>
            <span className="text-accent-500 dark:text-accent-400">{"}"}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-mono text-sm font-medium text-neutral-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-500/8 hover:text-accent-700 dark:text-neutral-400 dark:hover:bg-accent-500/8 dark:hover:text-accent-400"
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
              className="terminal-surface rounded-lg p-2 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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
        <div
          className={`absolute inset-0 bg-neutral-900/40 transition-opacity duration-300 dark:bg-black/60 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`terminal-surface absolute top-0 right-0 h-full w-64 border-l border-accent-500/15 p-6 pt-20 shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-mono text-base font-medium text-neutral-700 transition-all duration-200 hover:bg-accent-500/8 hover:text-accent-700 dark:text-neutral-300 dark:hover:bg-accent-500/8 dark:hover:text-accent-400"
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
