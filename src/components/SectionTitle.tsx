import { Reveal } from "./Reveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  command?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Reveal className="mb-16">
      <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50">
        {title}
      </h2>
      <div className="mt-4 h-0.5 w-10 bg-accent-500" />
      {subtitle && (
        <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
