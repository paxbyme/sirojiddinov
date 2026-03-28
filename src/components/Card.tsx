import { useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  title?: string;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }

  function handleMouseLeave() {
    if (!hover || !cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={hover ? handleMouseMove : undefined}
      onMouseLeave={hover ? handleMouseLeave : undefined}
      className={`glass-surface overflow-hidden ${
        hover ? "tilt-card cursor-pointer" : ""
      } ${className}`}
    >
      <div className="p-6">{children}</div>
    </div>
  );
}
