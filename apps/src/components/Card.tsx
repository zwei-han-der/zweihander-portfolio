import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { Text } from "./Text";

type Props = {
    title: string;
    children: ReactNode;
};

export function Card({ title, children}: Props) {
    return (
        <div style={{
            border: `1px solid ${theme.colors.border}`,
            borderRadius: "4px",
            padding: "1rem",
            marginBottom: "1rem",
        }}>
            <Text color={theme.colors.primary}>
                <strong>▸ {title}</strong>
            </Text>
            <div style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>{children}</div>
        </div>
    )
}