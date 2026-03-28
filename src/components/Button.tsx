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
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-all duration-500 ease-out";

  const variants = {
    primary:
      "bg-black text-white hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-black",
    secondary:
      "border border-black/15 bg-transparent text-neutral-700 hover:border-black/30 hover:scale-[1.02] active:scale-[0.98] dark:border-white/20 dark:text-neutral-300 dark:hover:border-white/40",
    ghost:
      "text-neutral-600 hover:bg-neutral-100/80 hover:text-neutral-900 active:scale-[0.98] dark:text-neutral-400 dark:hover:bg-neutral-800/80 dark:hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-8 py-4 text-base",
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
