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
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="theme-card mb-2 p-1.5 shadow-xl">
          {localeOptions.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLocale(opt.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm transition-all duration-300 ${
                locale === opt.code
                  ? "bg-accent-500/12 font-medium text-accent-700 dark:text-accent-400"
                  : "text-neutral-600 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80"
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
        className="theme-card flex items-center gap-2 px-4 py-3 text-sm font-medium shadow-lg transition-all duration-500 hover:scale-[1.03]"
        aria-label="Change language"
      >
        <Globe size={16} className="text-accent-500 dark:text-accent-400" />
        <span className="uppercase">{locale}</span>
      </button>
    </div>
  );
}
