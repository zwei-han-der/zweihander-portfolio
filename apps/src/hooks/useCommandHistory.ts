import { useState, useCallback } from "react";

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);

  const add = useCallback((command: string) => {
    if (!command.trim()) return;
    setHistory((prev) => [...prev, command]);
    setIndex(-1);
  }, []);

  const getPrevious = useCallback(() => {
    if (history.length === 0) return null;
    const newIndex = index === -1 ? history.length - 1 : Math.max(0, index - 1);
    setIndex(newIndex);
    return history[newIndex];
  }, [history, index]);

  const getNext = useCallback(() => {
    if (index === -1) return null;
    const newIndex = Math.min(history.length - 1, index + 1);
    setIndex(newIndex);
    return newIndex === history.length - 1 ? history[newIndex] : history[newIndex];
  }, [history, index]);

  const reset = useCallback(() => {
    setIndex(-1);
  }, []);

  return { add, getPrevious, getNext, reset };
}