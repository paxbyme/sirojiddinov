interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`glass-card overflow-hidden ${
        hover ? "glass-card-hover glow-border cursor-pointer" : ""
      } ${className}`}
    >
      <div className="p-7">{children}</div>
    </div>
  );
}
