import { createContext, useState, useEffect, useContext, type ReactNode } from "react";

export type DesignTheme = "aurora" | "creme" | "onyx";

interface DesignContextValue {
  design: DesignTheme;
  setDesign: (d: DesignTheme) => void;
}

const DesignContext = createContext<DesignContextValue>({
  design: "aurora",
  setDesign: () => {},
});

export function useDesign() {
  return useContext(DesignContext);
}

export function DesignProvider({ children }: { children: ReactNode }) {
  const [design, setDesignState] = useState<DesignTheme>(() => {
    const stored = localStorage.getItem("design-theme");
    if (stored === "aurora" || stored === "creme" || stored === "onyx") return stored;
    return "aurora";
  });

  function setDesign(d: DesignTheme) {
    setDesignState(d);
    localStorage.setItem("design-theme", d);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-design", design);
  }, [design]);

  return (
    <DesignContext.Provider value={{ design, setDesign }}>
      {children}
    </DesignContext.Provider>
  );
}
