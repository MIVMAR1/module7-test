export type BoxStatus =
  | "AKTIV"
  | "DEFECT"
  | "READY_FOR_DISPOSAL"
  | "LOADED"
  | "DISPOSED";

export type Box = {
  id: string;
  code: string;
  type: string;
  year: number;
  status: BoxStatus;
  defects: string[];
  createdAt: string;
};