interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`onyx-card overflow-hidden ${
        hover ? "onyx-card-hover cursor-pointer" : ""
      } ${className}`}
    >
      <div className="p-7">{children}</div>
    </div>
  );
}
