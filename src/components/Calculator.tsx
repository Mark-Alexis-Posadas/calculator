import { useEffect } from "react";
import Display from "./Display";
import Button from "./Button";
import { useCalculator } from "../hooks/useCalculator";

export default function Calculator() {
  const { expression, result, append, clear, deleteLast, calculate } =
    useCalculator();

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isNaN(Number(e.key)) || "+-*/.".includes(e.key)) {
        append(e.key);
      } else if (e.key === "Enter") {
        calculate();
      } else if (e.key === "Backspace") {
        deleteLast();
      } else if (e.key === "Escape") {
        clear();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="max-w-sm mx-auto p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-white">
      <Display expression={expression} result={result} />

      <div className="grid grid-cols-4 gap-2 mt-4">
        <Button label="C" onClick={clear} className="col-span-2 bg-red-500" />
        <Button label="⌫" onClick={deleteLast} />

        {buttons.map((btn) => (
          <Button
            key={btn}
            label={btn}
            onClick={() => (btn === "=" ? calculate() : append(btn))}
          />
        ))}
      </div>
    </div>
  );
}
