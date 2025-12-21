import { useCallback, useState } from "react";
import { commands } from "../commands";
import { executeCommand } from "./executor";
import { JSX } from "react";

type HistoryItem = {
  id: string;
  path: string;
  command: string;
  output: JSX.Element;
};

export function useShell() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [path, setPath] = useState("C:\\Users\\Zweihander");

  const clear = useCallback(() => {
    setHistory([]);
    setPath("C:\\Users\\Zweihander");
  }, []);

  const execute = useCallback(
    (input: string) => {
      const currentPath = path;

      if (!input.trim()) {
        setHistory((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            path: currentPath,
            command: "",
            output: <></>,
          },
        ]);
        return;
      }

      if (input.trim() === "clear") {
        clear();
        return;
      }

      const output = executeCommand(input, commands, {
        clear,
        openExternal: (url: string) => window.open(url, "_blank"),
        setPath,
      });

      setHistory((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          path: currentPath,
          command: input,
          output,
        },
      ]);
    },
    [clear, path]
  );

  return {
    history,
    execute,
    clear,
    path,
  };
}
