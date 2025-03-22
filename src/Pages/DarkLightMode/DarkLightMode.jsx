import React, { useState } from 'react';
import { Main } from '../../layouts/Main/Main';


export const DarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Main>
      <div className={`h-full w-full flex flex-col justify-center items-center transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={onToggle}>
          {darkMode ? "Modo Light 🌞" : "Modo Dark 🌙"}
        </button>
      </div>
    </Main>
  );
};
