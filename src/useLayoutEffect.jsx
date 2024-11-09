import React, { useLayoutEffect, useRef, useState } from "react";

/**
 * This component measures the size of a div using useLayoutEffect.
 */
function LayoutEffectExample() {
  const divRef = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    // Get the size of the div
    const rect = divRef.current.getBoundingClientRect();
    setBoxSize({ width: rect.width, height: rect.height });
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightblue",
        }}
      >
        Measure me!
      </div>
      <p>
        Width: {boxSize.width}px, Height: {boxSize.height}px
      </p>
    </div>
  );
}

export default LayoutEffectExample;
