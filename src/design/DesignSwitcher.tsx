import { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { useDesign, type DesignTheme } from "./context";

const designs: { id: DesignTheme; label: string; colors: string[] }[] = [
  { id: "aurora", label: "Aurora", colors: ["#9333ea", "#3b82f6", "#ec4899"] },
  { id: "creme", label: "Creme", colors: ["#92704f", "#b8965a", "#c49a7c"] },
  { id: "onyx", label: "Onyx", colors: ["#000000", "#ffffff", "#737373"] },
];

export function DesignSwitcher() {
  const { design, setDesign } = useDesign();
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
    <div ref={ref} className="fixed bottom-6 left-6 z-50">
      {open && (
        <div className="theme-card mb-2 p-2 shadow-xl">
          {designs.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setDesign(d.id);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-all duration-300 ${
                design === d.id
                  ? "bg-accent-500/12 font-medium text-accent-700 dark:text-accent-400"
                  : "text-neutral-600 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80"
              }`}
            >
              <div className="flex gap-1">
                {d.colors.map((c, i) => (
                  <span
                    key={i}
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <span>{d.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="theme-card flex items-center gap-2 px-4 py-3 text-sm font-medium shadow-lg transition-all duration-500 hover:scale-[1.03]"
        aria-label="Switch design"
      >
        <Palette size={16} />
        <span className="capitalize">{design}</span>
      </button>
    </div>
  );
}
