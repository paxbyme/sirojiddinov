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
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-500 ease-out";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-600 to-accent-500 text-white shadow-[0_4px_20px_rgb(146_112_79_/_20%)] hover:shadow-[0_8px_32px_rgb(146_112_79_/_30%)] hover:scale-[1.02] active:scale-[0.98] dark:from-accent-500 dark:to-accent-400",
    secondary:
      "border border-accent-600/20 bg-accent-50/60 text-accent-800 backdrop-blur-sm hover:border-accent-400 hover:bg-accent-50/80 hover:scale-[1.02] active:scale-[0.98] dark:border-accent-400/20 dark:bg-accent-900/30 dark:text-accent-200 dark:hover:border-accent-400/40",
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
