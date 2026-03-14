import { useEffect, useState, useRef } from "react";

export function useTypingEffect(
  text: string,
  speed = 40,
  startDelay = 0
): { displayText: string; isComplete: boolean } {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      prefersReducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }
  }, []);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);

    if (prefersReducedMotion.current) {
      setDisplayText(text);
      setIsComplete(true);
      return;
    }

    let index = 0;
    let intervalId: number;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index++;
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
        } else {
          setIsComplete(true);
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
}
