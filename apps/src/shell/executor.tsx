import { CommandContext, CommandRegistry } from "./types";
import { Line } from "../components/Line";
import { Text } from "../components/Text";

export function executeCommand(
  input: string,
  registry: CommandRegistry,
  context: CommandContext
) {
  const [name, ...args] = input.split(" ").filter(Boolean);

  const command = registry[name];

  if (!command) {
    return <Line><Text color="red">command not found: </Text><Text>{name}</Text></Line>
  }

  return command.execute(args, context);
}
