import { useContext } from "react";
import "./ThemeToggleButton.css";
import { ThemeContext } from "../../context/AppProvider";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return theme.includes("light") ? (
    <button className="lightButton" onClick={toggleTheme}>
      🌙 Switch to Dark
    </button>
  ) : (
    <button className="lightButton" onClick={toggleTheme}>
      ☀️ Switch to Light
    </button>
  );
}

export default ThemeButton;
