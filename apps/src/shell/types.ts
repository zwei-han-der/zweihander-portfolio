import { JSX } from "react";

export type CommandContext = {
  clear: () => void;
  openExternal: (url: string) => void;
  setPath: (path: string) => void;
};

export type Command = {
  name: string;
  description?: string;
  execute: (args: string[], context: CommandContext) => JSX.Element;
};

export type CommandRegistry = Record<string, Command>;
