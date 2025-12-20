import { ReactNode } from "react";
import { ShellProvider } from "../shell/ShellContext";

type Props = {
    children: ReactNode;
};

export function Providers({ children }: Props) {
    return <ShellProvider>{children}</ShellProvider>;
};
