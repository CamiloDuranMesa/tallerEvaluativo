import React, { useState } from "react";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`h-full w-full flex flex-col justify-center items-center transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Modo Light 🌞" : "Modo Dark 🌙"}
      </button>
    </div>
  );
};


