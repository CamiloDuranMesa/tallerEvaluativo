import React, { useState } from "react";

export const BackgroundColorChanger = () => {
  const colors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ];

  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="h-full w-screen flex items-center justify-center" style={{ backgroundColor: colors[colorIndex] }}>

      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={changeColor}>
        Cambiar color 🎨
      </button>
    </div>
  );
};


