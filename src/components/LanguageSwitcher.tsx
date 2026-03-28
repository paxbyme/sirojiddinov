import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";
import type { Locale } from "../types";

const localeOptions: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "ru", label: "RU", flag: "\u{1F1F7}\u{1F1FA}" },
  { code: "uz", label: "UZ", flag: "\u{1F1FA}\u{1F1FF}" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="terminal-surface mb-2 rounded-lg p-1 shadow-lg">
          {localeOptions.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLocale(opt.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-mono transition-colors ${
                locale === opt.code
                  ? "bg-accent-500/15 text-accent-700 dark:text-accent-400"
                  : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/60"
              }`}
            >
              <span>{opt.flag}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="terminal-surface flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-sm font-medium text-neutral-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 dark:text-neutral-300 dark:hover:border-accent-400/40"
        aria-label="Change language"
      >
        <Globe size={18} className="text-accent-600 dark:text-accent-400" />
        <span className="uppercase">{locale}</span>
      </button>
    </div>
  );
}
