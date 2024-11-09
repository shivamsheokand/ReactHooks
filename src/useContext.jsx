import React, { useContext } from "react";

// Create a Theme context with a default value of 'light'
const ThemeContext = React.createContext("light");

/**
 * This component displays the current theme using useContext.
 */
function ThemedComponent() {
  // Access the current value of ThemeContext
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      The current theme is: {theme}
    </div>
  );
}

function useContext() {
  return (
    // Provide a theme value to the context
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default useContext();
