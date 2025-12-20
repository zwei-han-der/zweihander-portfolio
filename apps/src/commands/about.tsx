import { Card } from "../components/Card";
import { Text } from "../components/Text";
import { Line } from "../components/Line";
import { theme } from "../styles/theme";
import { Command } from "../shell/types";

export const about: Command = {
  name: "about",
  description: "About me",
  execute() {
    return (
      <div>
        <Card title="Name">
          <Text>John Doe</Text>
          <br />
          <Text color={theme.colors.textDim}>Full Stack Developer</Text>
        </Card>

        <Card title="Bio">
          <Text>
            Passionate developer with expertise in building modern web
            applications. Love creating elegant solutions to complex problems.
          </Text>
        </Card>

        <Card title="Skills">
          <Line>
            <Text color={theme.colors.accent}>• </Text>
            <Text>TypeScript, React, Node.js</Text>
          </Line>
          <Line>
            <Text color={theme.colors.accent}>• </Text>
            <Text>Bun, Elysia, PostgreSQL</Text>
          </Line>
          <Line>
            <Text color={theme.colors.accent}>• </Text>
            <Text>Docker, CI/CD, Cloud Infrastructure</Text>
          </Line>
        </Card>
      </div>
    );
  },
};