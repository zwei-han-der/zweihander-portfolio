import { ReactNode } from "react";
import { Text } from "./Text";

type Props = {
    title: string;
    children: ReactNode;
};

export function Card({ title, children }: Props) {
    return (
        <div className="card">
            <Text color="var(--color-primary)">
                <strong>{title}:</strong>
            </Text>
            <div className="card-content">{children}</div>
        </div>
    )
}