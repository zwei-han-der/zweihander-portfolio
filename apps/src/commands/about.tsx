import { Tree, TreeNode } from "../components/Tree";
import { Command } from "../shell/types";
import { Line } from "../components/Line";
import { Text } from "../components/Text";

const aboutTree: TreeNode[] = [
  {
    name: "bio.txt",
    description: "Aspiring programmer, web dev enthusiast, learner."
  },
  {
    name: "skills",
    children: [
      { name: "languages.md", description: "HTML, CSS, JS, TS, React" },
      { name: "backend.md", description: "Node.js, Bun, Elysia, SQL" }
    ]
  },
  {
    name: "idioms",
    children: [
      { name: "pt-br.txt", description: "Native" },
      { name: "en-us.txt", description: "Intermediate" }
    ]
  },
  {
    name: "location.json",
    description: "Rio Grande do Sul, Brazil"
  }
];

export const about: Command = {
  name: "about",
  description: "About me",
  execute(_args, context) {
    context.setPath("C:\\Users\\Zweihander\\about");
    return (
      <div>
        <br />
        <Line>
          <Text color="var(--color-primary)">about\</Text>
        </Line>
        <Tree data={aboutTree} />
      </div>
    );
  },
};