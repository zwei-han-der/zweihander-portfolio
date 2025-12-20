import { KeyboardEvent, useState } from "react";
import { getInlineGhost } from "../autocomplete/inlineGhost";
import { useShellContext } from "../shell/ShellContext";
import { Text } from "../components/Text";

export function InputLine() {
  const { execute } = useShellContext();
  const [value, setValue] = useState("");

  const commands = ["help", "clear"];
  const ghost = getInlineGhost(value, commands);

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      execute(value);
      setValue("");
    }

    if ((e.key === "Tab" || e.key === "ArrowRight") && ghost) {
      e.preventDefault();
      setValue((v) => v + ghost);
    }
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        autoFocus
      />
      {ghost && <Text opacity={0.4}>{ghost}</Text>}
    </div>
  );
}
