import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    color?: string;
    opacity?: number;
    className?: string; // Add className
};

export function Text({ children, color, opacity, className = "" }: Props) {
    return <span className={`text-inherit ${className}`} style={{ color, opacity }}>{children}</span>
}
