import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

export function ThemeToggle() {
  const { t } = useTranslation();
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return true;
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
      className="creme-card rounded-2xl p-2.5 text-neutral-500 transition-all duration-500 hover:text-accent-500 dark:text-neutral-400 dark:hover:text-accent-400"
      aria-label={dark ? t.themeSwitchToLight : t.themeSwitchToDark}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
