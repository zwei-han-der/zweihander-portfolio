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
    <div style={{ padding: "2rem" }}>
      {showBanner && <ASCIIArt />}
      
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          {line}
        </div>
      ))}

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Prompt /> <InputLine />
      </div>
    </div>
  );
}