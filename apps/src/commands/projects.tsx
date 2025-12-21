import { Line } from "../components/Line";
import { Link } from "../components/Link";
import { Text } from "../components/Text";
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
        {projectsList.map((project, index) => {
          const isLast = index === projectsList.length - 1;
          return (
            <div key={index}>
              <Line>
                <Text color="var(--color-text-dim)">{isLast ? "└── " : "├── "}</Text>
                {project.link ? (
                  <Link href={project.link}>
                    <Text color="var(--color-accent)" className="underline">{project.name}\</Text>
                  </Link>
                ) : (
                  <Text color="var(--color-accent)">{project.name}\</Text>
                )}
              </Line>

              <Line>
                <Text color="var(--color-text-dim)">{isLast ? "    " : "│   "}</Text>
                <Text color="var(--color-text-dim)">├── </Text>
                <Text>description.txt </Text>
                <Text color="var(--color-text-dim)">({project.description.replace(/\s+/g, " ").trim()})</Text>
              </Line>

              <Line>
                <Text color="var(--color-text-dim)">{isLast ? "    " : "│   "}</Text>
                <Text color="var(--color-text-dim)">└── </Text>
                <Text>stack.json </Text>
                <Text color="var(--color-text-dim)">({project.stack})</Text>
              </Line>
            </div>
          );
        })}
      </div>
    );
  },
};