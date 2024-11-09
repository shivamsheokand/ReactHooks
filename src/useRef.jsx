import React, { useRef, useEffect } from "react";

/**
 * This component renders an input field that automatically receives focus on mount.
 * useRef is used to reference the input element.
 */
function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Focus me on load" />;
}

export default FocusInput;
