interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-neutral-300/50 bg-neutral-100/80 font-mono text-neutral-700 dark:border-neutral-700/50 dark:bg-neutral-900/60 dark:text-neutral-300",
    accent:
      "border border-accent-500/30 bg-accent-100/50 font-mono text-accent-800 dark:border-accent-500/25 dark:bg-accent-500/10 dark:text-accent-300",
  };

  return (
    <span
      className={`inline-block rounded px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
