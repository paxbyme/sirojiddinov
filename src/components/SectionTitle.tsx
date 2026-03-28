import { Reveal } from "./Reveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  command?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Reveal className="mb-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-base text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
