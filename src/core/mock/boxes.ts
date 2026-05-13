import type { Box } from "../types/box";

export const mockBoxes: Box[] = [
  {
    id: "1",
    code: "BOX-1001",
    type: "M40",
    year: 2022,
    status: "AKTIV",
    defects: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    code: "BOX-1002",
    type: "M40",
    year: 2021,
    status: "DEFECT",
    defects: ["Riss Sockel"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    code: "BOX-1003",
    type: "M20",
    year: 2020,
    status: "READY_FOR_DISPOSAL",
    defects: ["Boden defekt"],
    createdAt: new Date().toISOString(),
  },
];