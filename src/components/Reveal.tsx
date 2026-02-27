import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  style,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({
    once,
    threshold,
    rootMargin,
  });

  const mergedStyle = {
    ...(style ?? {}),
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties & { "--reveal-delay": string };

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={mergedStyle}
      {...props}
    >
      {children}
    </div>
  );
}
