import { Command } from "../shell/types";
import { Fragment } from "react";

export const clear: Command = {
  name: "clear",
  description: "Clear terminal screen",
  execute(_, context) {
    context.clear();
    return <Fragment />;
  },
};