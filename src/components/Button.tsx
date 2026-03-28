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
    "group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg font-mono font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-br from-accent-600 to-accent-700 text-white shadow-lg shadow-accent-500/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/30 active:translate-y-0 active:shadow-lg dark:from-accent-600 dark:to-accent-700 dark:shadow-accent-500/20 dark:hover:shadow-accent-500/30",
    secondary:
      "border-2 border-accent-600/40 bg-gradient-to-br from-white/50 to-white/30 text-accent-700 shadow-md hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-lg dark:border-accent-500/40 dark:from-accent-500/10 dark:to-accent-600/5 dark:text-accent-400 dark:hover:border-accent-400/60",
    ghost:
      "text-neutral-700 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-neutral-200/80 hover:to-neutral-100/60 hover:text-neutral-900 dark:text-neutral-300 dark:hover:from-neutral-800/80 dark:hover:to-neutral-800/60 dark:hover:text-white",
  };

  const sizes = {
    sm: "px-3.5 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6.5 py-3 text-base",
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
