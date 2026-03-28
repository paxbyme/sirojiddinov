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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-accent-600/8 bg-[rgb(245_240_234_/_80%)] shadow-[0_4px_32px_rgb(146_112_79_/_3%)] backdrop-blur-2xl dark:border-accent-400/8 dark:bg-[rgb(26_23_19_/_80%)] dark:shadow-[0_4px_32px_rgb(0_0_0_/_15%)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between" aria-label="Main navigation">
          <a
            href="#"
            className="font-serif text-xl font-bold tracking-tight"
          >
            <span className="gradient-text">{profile.name}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-500 transition-all duration-400 hover:bg-neutral-100/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="creme-card rounded-2xl p-2.5 text-neutral-500 transition-all duration-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 dark:bg-black/40 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 border-l border-accent-600/8 bg-[rgb(245_240_234_/_90%)] p-6 pt-24 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-out dark:border-accent-400/8 dark:bg-[rgb(26_23_19_/_90%)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-base font-medium text-neutral-600 transition-all duration-400 hover:bg-neutral-100/60 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100"
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
