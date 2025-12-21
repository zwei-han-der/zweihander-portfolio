import { useState, useEffect } from "react";
import { Text } from "./Text";

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
        <Text color="var(--color-primary)">
          <strong>▸ {item?.name}</strong>
        </Text>
        <div className="item-details">
          <Text>{item?.details}</Text>
        </div>
        <div className="list-footer">
          <Text color="var(--color-text-dim)">Press ESC to go back</Text>
        </div>
      </div>
    );
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} className="list-item">
          <Text color={selected === index ? "var(--color-primary)" : undefined}>
            {selected === index ? "▸ " : "  "}
            {item.name}
          </Text>
          {selected === index && (
            <div className="item-preview">
              <Text color="var(--color-text-dim)">{item.preview}</Text>
            </div>
          )}
        </div>
      ))}
      <div className="list-footer">
        <Text color="var(--color-text-dim)">
          Use ↑↓ to navigate, Enter to view details
        </Text>
      </div>
    </div>
  );
}