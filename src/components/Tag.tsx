interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-neutral-200/60 bg-neutral-100/60 text-neutral-600 dark:border-neutral-700/60 dark:bg-neutral-800/60 dark:text-neutral-300",
    accent:
      "border border-accent-200/60 bg-accent-50/60 text-accent-700 dark:border-accent-500/20 dark:bg-accent-500/10 dark:text-accent-300",
  };

  return (
    <span
      className={`inline-block rounded-xl px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
