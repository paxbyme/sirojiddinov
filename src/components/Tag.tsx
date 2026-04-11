interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-neutral-200 bg-neutral-100 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400",
    accent:
      "border border-accent-300/60 bg-accent-50 text-accent-700 dark:border-accent-600/40 dark:bg-accent-900/30 dark:text-accent-300",
  };

  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 font-mono text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
