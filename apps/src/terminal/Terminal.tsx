import { useEffect, useState } from "react";
import { useShellContext } from "../shell/ShellContext";
import { Prompt } from "./Prompt";
import { InputLine } from "./InputLine";
import { ASCIIArt } from "../components/ASCIIArt";

export function Terminal() {
  const { history } = useShellContext();
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (history.length > 0) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, [history]);

  return (
    <div className="terminal-container">
      {showBanner && <ASCIIArt />}

      {history.map((line, i) => (
        <div key={i} className="history-item">
          {line}
        </div>
      ))}

      <div className="input-row">
        <Prompt /> <InputLine />
      </div>
    </div>
  );
}