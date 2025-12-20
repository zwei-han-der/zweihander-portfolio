import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    color?: string;
    opacity?: number;
};

export function Text({ children, color, opacity }: Props) {
    return <span style={{ color, opacity }}>{children}</span>
}
