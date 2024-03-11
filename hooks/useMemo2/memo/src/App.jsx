import React, { useState, useMemo } from "react";

function SumCalculator({ number1, number2 }) {
  const sum = useMemo(() => {
    console.log("Sum is recalculated!");
    return number1 + number2;
  }, [number1, number2]);

  return (
    <div>
      <p>Number 1: {number1}</p>
      <p>Number 2: {number2}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(Number(e.target.value))}
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(Number(e.target.value))}
      />

      <SumCalculator number1={value1} number2={value2} />
    </div>
  );
}

export default App;
