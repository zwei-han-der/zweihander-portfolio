import { Text } from "./Text";
import { Line } from "./Line";
import { Link } from "./Link";

export type TreeNode = {
    name: string;
    description?: string;
    link?: string;
    children?: TreeNode[];
};

interface TreeProps {
    data: TreeNode[];
    depth?: number;
    prefix?: string[];
}

export const Tree = ({ data, depth = 0, prefix = [] }: TreeProps) => {
    return (
        <>
            {data.map((node, index) => {
                const isLast = index === data.length - 1;

                const marker = isLast ? "└── " : "├── ";

                const childPrefix = [...prefix, isLast ? "    " : "│   "];

                return (
                    <div key={`${depth}-${index}`}>
                        <Line>
                            {prefix.map((p, i) => (
                                <Text key={i} color="var(--color-text-dim)">{p}</Text>
                            ))}

                            <Text color="var(--color-text-dim)">{marker}</Text>

                            {node.link ? (
                                <Link href={node.link}>
                                    <Text color={node.children ? "var(--color-primary)" : "var(--color-accent)"} className="underline">
                                        {node.name}
                                    </Text>
                                </Link>
                            ) : (
                                <Text color={node.children ? "var(--color-primary)" : "var(--color-accent)"}>
                                    {node.name}
                                </Text>
                            )}

                            {node.description && (
                                <>
                                    <Text> </Text>
                                    <Text color="var(--color-text-dim)">({node.description})</Text>
                                </>
                            )}
                        </Line>

                        {node.children && (
                            <Tree
                                data={node.children}
                                depth={depth + 1}
                                prefix={childPrefix}
                            />
                        )}
                    </div>
                );
            })}
        </>
    );
};
