import { useState } from "react";
import { mockBoxes } from "./core/mock/boxes";
import { Box } from "./core/types/box";
import DashboardScreen from "./modules/module7/screens/DashboardScreen";

export default function App() {
  const [boxes, setBoxes] = useState<Box[]>(mockBoxes);

  const markDefect = (id: string) => {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id
          ? {
              ...box,
              status: "DEFECT",
            }
          : box
      )
    );
  };

  const loadBox = (id: string) => {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id
          ? {
              ...box,
              status: "LOADED",
            }
          : box
      )
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <DashboardScreen
        boxes={boxes}
        onDefect={markDefect}
        onLoad={loadBox}
      />
    </div>
  );
}