import type { Box } from "../../../core/types/box";
import  BoxCard from "../components/BoxCard";

type Props = {
  boxes: Box[];
  onDefect: (id: string) => void;
  onLoad: (id: string) => void;
};

export default function DashboardScreen({
  boxes,
  onDefect,
  onLoad,
}: Props) {
  return (
    <div>
      <h1>Modul 7 – Dashboard</h1>

      {boxes.map((box) => (
        <BoxCard
          key={box.id}
          box={box}
          onDefect={() => onDefect(box.id)}
          onLoad={() => onLoad(box.id)}
        />
      ))}
    </div>
  );
}