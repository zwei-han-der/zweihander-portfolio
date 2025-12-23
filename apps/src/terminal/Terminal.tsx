import { useEffect, useRef } from "react";
import { useShellContext } from "../shell/ShellContext";
import { Prompt } from "./Prompt";
import { InputLine } from "./InputLine";
import { ASCIIArt } from "../components/ASCIIArt";

export function Terminal() {
  const { history, path } = useShellContext();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <div className="terminal-container">
      <ASCIIArt />

      {history.map((item) => (
        <div key={item.id} className="history-item">
          <div className="command-row">
            <Prompt path={item.path} />
            <span style={{ marginLeft: "1ch" }}>{item.command}</span>
          </div>
          <div className="output-content">
            {item.output}
          </div>
        </div>
      ))}

      <div className="input-row">
        <Prompt path={path} /> <InputLine />
        <div ref={bottomRef} />
      </div>
    </div>
  );
}