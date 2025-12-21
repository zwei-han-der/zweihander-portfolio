import { Line } from "../components/Line";
import { Text } from "../components/Text";
import { Tree, TreeNode } from "../components/Tree";
import { Command } from "../shell/types";

const projectsList: {
  name: string;
  description: string;
  stack: string;
  link?: string;
}[] = [
    {
      name: "pInk",
      description: `Centralized platform for reading and downloading comics,
    unifying decentralized collections with a modern and intuitive interface.`,
      stack: "JavaScript, Express.js, Supabase, PostgreSQL",
      link: "https://p-ink-comics.vercel.app/",
    }
  ];

const projectsTree: TreeNode[] = projectsList.map((project) => ({
  name: project.name + "\\",
  link: project.link,
  children: [
    {
      name: "description.txt",
      description: project.description.replace(/\s+/g, " ").trim(),
    },
    {
      name: "stack.json",
      description: project.stack,
    },
  ],
}));

export const projects: Command = {
  name: "projects",
  description: "View my projects",
  execute() {
    return (
      <div>
        <br />
        <Line>
          <Text color="var(--color-primary)">projects\</Text>
        </Line>
        <Tree data={projectsTree} />
      </div>
    );
  },
};