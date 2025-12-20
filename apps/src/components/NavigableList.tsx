import { useState, useEffect } from "react";
import { Text } from "./Text";
import { theme } from "../styles/theme";

type Item = {
  id: string;
  name: string;
  preview: string;
  details: string;
};

type Props = {
  items: Item[];
};

export function NavigableList({ items }: Props) {
  const [selected, setSelected] = useState(0);
  const [viewing, setViewing] = useState<string | null>(null);

  useEffect(() => {
    if (viewing) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((prev) => (prev + 1) % items.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        setViewing(items[selected].id);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, items, viewing]);

  if (viewing) {
    const item = items.find((i) => i.id === viewing);
    return (
      <div>
        <Text color={theme.colors.primary}>
          <strong>▸ {item?.name}</strong>
        </Text>
        <div style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
          <Text>{item?.details}</Text>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Text color={theme.colors.textDim}>Press ESC to go back</Text>
        </div>
      </div>
    );
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} style={{ marginBottom: "0.5rem" }}>
          <Text color={selected === index ? theme.colors.primary : undefined}>
            {selected === index ? "▸ " : "  "}
            {item.name}
          </Text>
          {selected === index && (
            <div
              style={{
                marginLeft: "2rem",
                marginTop: "0.25rem",
                borderLeft: `2px solid ${theme.colors.border}`,
                paddingLeft: "0.5rem",
              }}
            >
              <Text color={theme.colors.textDim}>{item.preview}</Text>
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: "1rem" }}>
        <Text color={theme.colors.textDim}>
          Use ↑↓ to navigate, Enter to view details
        </Text>
      </div>
    </div>
  );
}