import React, { useState, useCallback } from "react";

/**
 * This component uses useCallback to memoize a function passed to a child component.
 */
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the callback to avoid re-creating it on each render
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
