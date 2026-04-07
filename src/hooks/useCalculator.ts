import { useState } from "react";

export const useCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<string | number>("");

  const append = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  const deleteLast = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evalResult = Function(`return ${expression}`)();
      setResult(evalResult);
    } catch {
      setResult("Error");
    }
  };

  return {
    expression,
    result,
    append,
    clear,
    deleteLast,
    calculate,
  };
};
