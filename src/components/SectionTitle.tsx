import { Reveal } from "./Reveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Reveal className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
        <span className="neon-title">{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-accent-400/80 to-transparent" />
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
