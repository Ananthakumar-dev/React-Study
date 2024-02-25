import React, { useState } from "react";
import "./colorTheme.css";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function ColorTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-container" data-theme={theme}>
      <div className="container">
        <h2> Hello World! </h2>
        <button
          type="button"
          className="theme-button"
          onClick={handleToggleMode}
        >
          Change {theme === "light" ? "dark" : "light"} Mode
        </button>
      </div>
    </div>
  );
}
