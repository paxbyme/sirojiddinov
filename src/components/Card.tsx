interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  title?: string;
}

export function Card({ children, className = "", hover = false, title }: CardProps) {
  return (
    <div
      className={`terminal-surface rounded-lg overflow-hidden ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300/50 hover:shadow-[0_22px_48px_rgb(16_185_129_/_16%)] dark:hover:border-accent-400/45 dark:hover:shadow-[0_24px_52px_rgb(16_185_129_/_20%)]"
          : ""
      } ${className}`}
    >
      {title != null && (
        <div className="terminal-header">
          <span className="ml-14 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            {title}
          </span>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
