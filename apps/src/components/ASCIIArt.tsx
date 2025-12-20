import { Text } from "./Text";
import { theme } from "../styles/theme";

export function ASCIIArt() {
  const art = `
    ╔══════════════════════════════════════╗
    ║                                      ║
    ║     ███████╗██╗    ██╗███████╗       ║
    ║     ╚══███╔╝██║    ██║██╔════╝       ║
    ║       ███╔╝ ██║ █╗ ██║█████╗         ║
    ║      ███╔╝  ██║███╗██║██╔══╝         ║
    ║     ███████╗╚███╔███╔╝███████╗       ║
    ║     ╚══════╝ ╚══╝╚══╝ ╚══════╝       ║
    ║                                      ║
    ╚══════════════════════════════════════╝
  `;

  return (
    <pre style={{ margin: "1rem 0" }}>
      <Text color={theme.colors.primary}>{art}</Text>
      <Text color={theme.colors.textDim}>
        Type 'help' to see available commands
      </Text>
    </pre>
  );
}