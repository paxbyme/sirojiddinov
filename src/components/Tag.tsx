interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300",
    accent:
      "border border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-500/25 dark:bg-accent-500/10 dark:text-accent-300",
  };

  return (
    <span
      className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
