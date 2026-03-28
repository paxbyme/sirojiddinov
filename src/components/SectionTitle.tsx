import { Reveal } from "./Reveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  command?: string;
}

export function SectionTitle({ title, subtitle, command }: SectionTitleProps) {
  return (
    <Reveal className="mb-12 text-center">
      {command && (
        <p className="mb-3 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          <span className="terminal-prompt">$</span>{" "}
          <span className="text-neutral-600 dark:text-neutral-300">{command}</span>
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="terminal-title">{title}</span>
        <span className="terminal-cursor" />
      </h2>
      <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
      {subtitle && (
        <p className="mt-4 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          <span className="text-neutral-400 dark:text-neutral-500">//</span> {subtitle}
        </p>
      )}
    </Reveal>
  );
}
