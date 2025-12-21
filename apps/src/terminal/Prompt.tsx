import { Text } from "../components/Text";

type PromptProps = {
  path?: string;
};

export function Prompt({ path = "C:\\Users\\Zweihander" }: PromptProps) {
  return (
    <Text>
      <span style={{ color: "var(--color-primary)" }}>{path}</span>
      <span style={{ color: "var(--color-text)" }}>&gt;</span>
    </Text>
  );
}