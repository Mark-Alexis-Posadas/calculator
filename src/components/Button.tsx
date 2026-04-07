type Props = {
  label: string;
  onClick: () => void;
  className?: string;
};

export default function Button({ label, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition ${className}`}
    >
      {label}
    </button>
  );
}
