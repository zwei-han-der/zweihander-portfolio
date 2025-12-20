import { ReactNode } from "react";

type Props = {
    href: string;
    children: ReactNode;
};

export function Link({ href, children }: Props) {
    return <a onClick={() => window.open(href, "_blank", "noreferrer noopener")}>{children}</a>;
}
