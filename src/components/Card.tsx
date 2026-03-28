interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`creme-card overflow-hidden ${
        hover ? "creme-card-hover cursor-pointer" : ""
      } ${className}`}
    >
      <div className="p-7">{children}</div>
    </div>
  );
}
