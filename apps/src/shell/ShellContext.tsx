import { createContext, ReactNode, useContext } from "react";
import { useShell } from "./useShell";

const ShellContext = createContext<ReturnType<typeof useShell> | null>(null);

export function ShellProvider({ children }: { children: ReactNode }) {
  const shell = useShell();
  return <ShellContext.Provider value={shell}>{children}</ShellContext.Provider>;
}

export function useShellContext() {
  const context = useContext(ShellContext);
  if (!context) {
    throw new Error("useShellContext must be used inside ShellProvider");
  }
  return context;
}
