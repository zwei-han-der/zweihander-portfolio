import { Line } from "../components/Line";
import { Text } from "../components/Text";
import { theme } from "../styles/theme";
import { Command } from "../shell/types";

export const help: Command = {
  name: "help",
  description: "List all available commands",
  execute() {
    return (
      <div>
        <Line>
          <Text color={theme.colors.primary}>Available Commands:</Text>
        </Line>
        <br />
        <Line>
          <Text color={theme.colors.accent}>about</Text>
          <Text color={theme.colors.textDim}> - About me</Text>
        </Line>
        <Line>
          <Text color={theme.colors.accent}>projects</Text>
          <Text color={theme.colors.textDim}> - View my projects</Text>
        </Line>
        <Line>
          <Text color={theme.colors.accent}>clear</Text>
          <Text color={theme.colors.textDim}> - Clear terminal screen</Text>
        </Line>
        <Line>
          <Text color={theme.colors.accent}>help</Text>
          <Text color={theme.colors.textDim}> - Show this help message</Text>
        </Line>
      </div>
    );
  },
};