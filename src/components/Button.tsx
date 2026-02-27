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
      "border border-accent-300/40 bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 text-white shadow-[0_12px_30px_rgb(56_189_248_/_32%)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgb(217_70_239_/_38%)] active:translate-y-0",
    secondary:
      "border border-slate-300/50 bg-white/55 text-slate-800 backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/72 dark:border-slate-600/45 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-cyan-300/60 dark:hover:bg-slate-900/65",
    ghost:
      "text-slate-700 hover:-translate-y-0.5 hover:bg-white/60 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white",
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
