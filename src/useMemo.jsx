import React, { useState, useMemo } from "react";

/**
 * This component calculates the factorial of a number, optimized with useMemo to prevent unnecessary recalculations.
 */
function ExpensiveCalculation() {
  const [num, setNum] = useState(1);
  const [increment, setIncrement] = useState(0);

  // Memoize the factorial calculation so it's only recalculated when `num` changes
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    function computeFactorial(n) {
      if (n <= 1) return 1;
      return n * computeFactorial(n - 1);
    }
    return computeFactorial(num);
  }, [num]);

  return (
    <div>
      <h2>
        Factorial of {num} is {factorial}
      </h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value) || 1)}
      />
      <button onClick={() => setIncrement(increment + 1)}>Re-render</button>{" "}
      {/* Just to trigger a re-render */}
    </div>
  );
}

export default ExpensiveCalculation;
