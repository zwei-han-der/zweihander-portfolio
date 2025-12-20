import { useShellContext } from "../shell/ShellContext";
import { Prompt } from "./Prompt";
import { InputLine } from "./InputLine";

export function Terminal() {
  const { history } = useShellContext();

  return (
    <div>
      {history.map((line, i) => (
        <div key={i}>{line}</div>
      ))}

      <div>
        <Prompt /> <InputLine />
      </div>
    </div>
  );
}
