import { useState } from "react";

type Box = {
  code: string;
  status: "AKTIV" | "DEFECT" | "LOADED" | "DISPOSED";
  defects?: string[];
};

export default function App() {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [input, setInput] = useState("");

  const scanBox = () => {
    if (!input) return;

    setBoxes((prev) => [
      ...prev,
      { code: input, status: "AKTIV", defects: [] },
    ]);

    setInput("");
  };

  const markDefect = (code: string) => {
    setBoxes((prev) =>
      prev.map((b) =>
        b.code === code ? { ...b, status: "DEFECT" } : b
      )
    );
  };

  const loadBox = (code: string) => {
    setBoxes((prev) =>
      prev.map((b) =>
        b.code === code ? { ...b, status: "LOADED" } : b
      )
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Modul 7 Test System</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Kistencode"
      />
      <button onClick={scanBox}>Scannen</button>

      <h2>Kisten</h2>

      {boxes.map((b) => (
        <div key={b.code} style={{ marginBottom: 10 }}>
          <b>{b.code}</b> — {b.status}

          <div>
            <button onClick={() => markDefect(b.code)}>
              Defekt
            </button>

            <button onClick={() => loadBox(b.code)}>
              Verladen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}