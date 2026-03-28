interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  title?: string;
}

export function Card({ children, className = "", hover = false, title }: CardProps) {
  return (
    <div
      className={`group terminal-surface rounded-lg overflow-hidden ${
        hover
          ? "transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-accent-300/60 hover:shadow-[0_24px_56px_rgb(16_185_129_/_18%),0_12px_28px_rgb(16_185_129_/_12%)] dark:hover:border-accent-400/50 dark:hover:shadow-[0_28px_64px_rgb(16_185_129_/_22%),0_14px_32px_rgb(16_185_129_/_15%)]"
          : ""
      } ${className}`}
    >
      {hover && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/8 via-transparent to-accent-600/5 dark:from-accent-400/10 dark:to-accent-500/8" />
          <div className="card-shine absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
        </div>
      )}
      {title != null && (
        <div className="terminal-header relative">
          <span className="ml-14 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            {title}
          </span>
        </div>
      )}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
