import { CommandRegistry } from "../shell/types";
import { help } from "./help";
import { about } from "./about";
import { projects } from "./projects";
import { clear } from "./clear";

export const commands: CommandRegistry = {
  help,
  about,
  projects,
  clear,
};