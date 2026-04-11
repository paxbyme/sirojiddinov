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
      className="rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-100"
      aria-label={dark ? t.themeSwitchToLight : t.themeSwitchToDark}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
