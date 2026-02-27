interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`glass-surface rounded-2xl p-6 ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300/60 hover:shadow-[0_22px_48px_rgb(56_189_248_/_18%)] dark:hover:border-accent-400/55 dark:hover:shadow-[0_24px_52px_rgb(217_70_239_/_20%)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
