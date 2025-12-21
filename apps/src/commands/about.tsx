import { Card } from "../components/Card";
import { Text } from "../components/Text";
import { Line } from "../components/Line";
import { Command } from "../shell/types";

export const about: Command = {
  name: "about",
  description: "About me",
  execute(_args, context) {
    context.setPath("C:\\Users\\Zweihander\\about");
    return (
      <div>
        <Card title="Name">
          <Text>Gustavo <span style={{ color: "var(--color-primary)" }}>"Zweihander"</span> Ferreira</Text>
        </Card>

        <Card title="Bio">
          <Text>
            I am an aspiring programmer with a particular interest in web development.
          </Text>
        </Card>

        <Card title="Skills">
          <Line>
            <Text color="var(--color-accent)">• </Text>
            <Text>HTML, CSS, JavaScript, TypeScript, React</Text>
          </Line>
          <Line>
            <Text color="var(--color-accent)">• </Text>
            <Text>Node.js, Bun, Elysia, SQL</Text>
          </Line>
        </Card>
      </div>
    );
  },
};