interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  title?: string;
}

export function Card({ children, className = "", hover = false, title }: CardProps) {
  return (
    <div
      className={`surface rounded-xl overflow-hidden ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/8 dark:hover:shadow-black/30"
          : ""
      } ${className}`}
    >
      {title != null && (
        <div className="surface-label">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
            {title}
          </span>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
