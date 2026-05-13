import type { Box } from "../../../core/types/box";
import StatusBadge from "./StatusBadge";

type Props = {
  box: Box;
  onDefect: () => void;
  onLoad: () => void;
};

export default function BoxCard({
  box,
  onDefect,
  onLoad,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <h3>{box.code}</h3>

      <p>Typ: {box.type}</p>

      <p>Baujahr: {box.year}</p>

      <StatusBadge status={box.status} />

      <div style={{ marginTop: 12 }}>
        <button onClick={onDefect}>
          Defekt
        </button>

        <button
          onClick={onLoad}
          style={{ marginLeft: 8 }}
        >
          Verladen
        </button>
      </div>
    </div>
  );
}