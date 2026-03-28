interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`aurora-card overflow-hidden ${
        hover ? "aurora-card-hover aurora-border-glow cursor-pointer" : ""
      } ${className}`}
    >
      <div className="p-7">{children}</div>
    </div>
  );
}
