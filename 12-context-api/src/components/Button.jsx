import React, { useContext } from "react";
import ThemeContext from "../context/TeamContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div>Active Theme: {theme}</div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change
      </button>
    </>
  );
}

export default Button;
