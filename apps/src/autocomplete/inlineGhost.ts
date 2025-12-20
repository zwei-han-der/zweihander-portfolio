export function getInlineGhost(
  input: string,
  commands: string[]
): string | null {
  if (!input) return null;

  const match = commands.find((cmd) => cmd.startsWith(input));
  if (!match || match === input) return null;

  return match.slice(input.length);
}
