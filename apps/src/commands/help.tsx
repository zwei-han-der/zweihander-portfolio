import { Line } from "../components/Line";
import { Text } from "../components/Text";
import { Command } from "../shell/types";

export const help: Command = {
  name: "help",
  description: "List all available commands",
  execute() {
    return (
      <div>
        <Line>
          <Text color="var(--color-primary)">Available Commands:</Text>
        </Line>
        <br />
        <Line>
          <Text color="var(--color-accent)">about</Text>
          <Text color="var(--color-text-dim)"> - about me</Text>
        </Line>
        <Line>
          <Text color="var(--color-accent)">projects</Text>
          <Text color="var(--color-text-dim)"> - view my projects</Text>
        </Line>
        <Line>
          <Text color="var(--color-accent)">clear</Text>
          <Text color="var(--color-text-dim)"> - clear terminal screen</Text>
        </Line>
        <Line>
          <Text color="var(--color-accent)">help</Text>
          <Text color="var(--color-text-dim)"> - show this help message</Text>
        </Line>
      </div>
    );
  },
};