import React from "react";
import '../styles/DarkMode.scss';

function DarkMode( { darkMode, toggleDarkMode } ) {
 
  return (
    <button onClick={toggleDarkMode} className="DarkMode">
      {darkMode ? "☀️ Light Mode" : "🌜 Dark Mode"}
    </button>
 );
}

export default DarkMode;

