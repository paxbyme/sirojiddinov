interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-accent-600 text-white shadow-[0_2px_8px_rgb(59_130_246_/_25%)] hover:bg-accent-500 hover:shadow-[0_4px_16px_rgb(59_130_246_/_35%)] active:scale-[0.98] dark:bg-accent-500 dark:hover:bg-accent-400",
    secondary:
      "border border-neutral-200 bg-white/80 text-neutral-700 hover:border-accent-300 hover:bg-accent-50/50 hover:text-accent-700 active:scale-[0.98] dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-accent-500/50 dark:hover:bg-accent-500/10 dark:hover:text-accent-400",
    ghost:
      "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 active:scale-[0.98] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
