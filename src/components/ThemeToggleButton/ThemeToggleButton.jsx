import "./ThemeToggleButton.css";

function ThemeButton({ lightMode, toggleTheme }) {
  return lightMode.includes("light") ? (
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
