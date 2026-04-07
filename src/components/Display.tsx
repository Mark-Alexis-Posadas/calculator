type Props = {
  expression: string;
  result: string | number;
};

export default function Display({ expression, result }: Props) {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl text-right">
      <div className="text-sm text-zinc-400">{expression || "0"}</div>
      <div className="text-2xl font-bold">{result}</div>
    </div>
  );
}
