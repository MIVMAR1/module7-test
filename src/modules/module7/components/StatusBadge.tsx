type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: 8,
        background: "#eee",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}