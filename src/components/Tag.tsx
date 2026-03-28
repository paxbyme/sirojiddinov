interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-neutral-300/60 bg-gradient-to-br from-neutral-100/90 to-neutral-50/80 font-mono text-neutral-700 shadow-sm hover:border-neutral-400/60 hover:shadow dark:border-neutral-700/60 dark:from-neutral-900/70 dark:to-neutral-900/50 dark:text-neutral-300 dark:hover:border-neutral-600/60",
    accent:
      "border border-accent-500/40 bg-gradient-to-br from-accent-100/60 to-accent-50/40 font-mono text-accent-800 shadow-sm hover:border-accent-500/60 hover:shadow dark:border-accent-500/35 dark:from-accent-500/15 dark:to-accent-600/10 dark:text-accent-300 dark:hover:border-accent-400/50",
  };

  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
