interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-neutral-200 bg-transparent text-neutral-600 dark:border-neutral-800 dark:bg-transparent dark:text-neutral-300",
    accent:
      "border border-neutral-300 bg-transparent text-neutral-700 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300",
  };

  return (
    <span
      className={`inline-block rounded-xl px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
