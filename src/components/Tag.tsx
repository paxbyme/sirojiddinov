interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-slate-300/45 bg-white/58 text-slate-700 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/52 dark:text-slate-200",
    accent:
      "border border-accent-300/40 bg-accent-100/70 text-accent-800 backdrop-blur-md dark:border-accent-400/35 dark:bg-accent-500/12 dark:text-accent-200",
  };

  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
