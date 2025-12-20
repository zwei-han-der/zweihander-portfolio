import { Command } from "../shell/types";
import { Line } from "../components/Line";
import { Text } from "../components/Text";

export const help: Command = {
    name: "help",
    description: "List all available commands",
    execute() {
        return (
            <Line>
                <Text color="cyan">Commands:</Text>
                <br />
                <Text>- help</Text>
                <Text>- clear</Text>
            </Line>
        );
    },
};
