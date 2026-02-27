import { useEffect, useRef, useState } from "react";

interface UseRevealOptions {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export function useReveal<T extends HTMLElement>({
  once = true,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return { ref, isVisible };
}
