import { KeyboardEvent, useState, useEffect } from "react";
import { getInlineGhost } from "../autocomplete/inlineGhost";
import { useShellContext } from "../shell/ShellContext";
import { useCommandHistory } from "../hooks/useCommandHistory";
import { Text } from "../components/Text";

export function InputLine() {
  const { execute } = useShellContext();
  const history = useCommandHistory();
  const [value, setValue] = useState("");

  const commands = ["help", "clear", "about", "projects"];
  const ghost = getInlineGhost(value, commands);

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      history.add(value);
      execute(value);
      setValue("");
      return;
    }

    if ((e.key === "Tab" || e.key === "ArrowRight") && ghost) {
      e.preventDefault();
      setValue((v) => v + ghost);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = history.getPrevious();
      if (prev) setValue(prev);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = history.getNext();
      if (next) setValue(next);
      else {
        history.reset();
        setValue("");
      }
      return;
    }
  }

  useEffect(() => {
    const input = document.querySelector("input");
    input?.focus();
  }, []);

  return (
    <div className="input-wrapper">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        autoFocus
        style={{
          width: `${Math.max(value.length, 1)}ch`,
        }}
      />
      {ghost && (
        <span className="ghost-text" style={{
          left: `${value.length}ch`,
        }}>
          <Text opacity={0.4}>{ghost}</Text>
        </span>
      )}
    </div>
  );
}