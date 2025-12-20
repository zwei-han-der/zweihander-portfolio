import { useCallback, useState } from "react";
import { commands } from "../commands";
import { executeCommand } from "./executor";
import { JSX } from "react";

export function useShell() {
  const [history, setHistory] = useState<JSX.Element[]>([]);

  const clear = useCallback(() => {
    setHistory([]);
  }, []);

  const execute = useCallback(
    (input: string) => {
      if (!input.trim()) return;

      if (input.trim() === "clear") {
        clear();
        return;
      }

      const output = executeCommand(input, commands, {
        clear,
        openExternal: (url: string) => window.open(url, "_blank"),
      });

      setHistory((prev) => [...prev, output]);
    },
    [clear]
  );

  return {
    history,
    execute,
    clear,
  };
}