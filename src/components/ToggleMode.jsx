import { useState } from "react";

const ToggleMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const backgroundColor = isDarkMode ? "#1b1b1b" : "white";
    const textColor = isDarkMode ? "white" : "#1b1b1b";
    const handleClick = () => setIsDarkMode((currentMode) => !currentMode);

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh", padding: "24px", boxSizing: "border-box" }}>
        <button type="button" onClick={handleClick} aria-pressed={isDarkMode} style={{ backgroundColor, color: textColor, border: `2px solid ${textColor}` }}>
            Switch to {isDarkMode ? "light" : "dark"} mode
        </button>
        <section style={{ backgroundColor, color: textColor, border: `2px solid ${textColor}` }}>
            <h1>WELCOME TO REAL WORLD</h1>
        </section>
    </div>
  )
}

export default ToggleMode