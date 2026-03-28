import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

export function ThemeToggle() {
  const { t } = useTranslation();
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="terminal-surface rounded-lg p-2 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:text-accent-700 dark:text-neutral-400 dark:hover:border-accent-400/40 dark:hover:text-accent-400"
      aria-label={dark ? t.themeSwitchToLight : t.themeSwitchToDark}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
