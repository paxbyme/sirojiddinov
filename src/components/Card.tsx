interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`theme-card overflow-hidden ${
        hover ? "theme-card-hover theme-glow cursor-pointer" : ""
      } ${className}`}
    >
      <div className="p-7">{children}</div>
    </div>
  );
}
