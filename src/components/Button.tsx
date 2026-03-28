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
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-mono font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-accent-600 text-white hover:-translate-y-0.5 hover:bg-accent-500 active:translate-y-0 dark:bg-accent-600 dark:hover:bg-accent-500",
    secondary:
      "border border-accent-600/30 bg-transparent text-accent-700 hover:-translate-y-0.5 hover:border-accent-500/50 hover:bg-accent-500/10 dark:border-accent-500/30 dark:text-accent-400 dark:hover:border-accent-400/50 dark:hover:bg-accent-500/10",
    ghost:
      "text-neutral-700 hover:-translate-y-0.5 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-white",
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
