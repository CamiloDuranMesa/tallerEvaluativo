import React from "react"
import { useState } from "react"
import { Main } from "../../layouts/Main/Main";

export const BackColor = () => {

  const colors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ];

  const[back, setColor]=useState(0)

  const changeColor = () => {
    const nextColor = (back + 1) % colors.length; 
    setColor(nextColor);
  };

  return (
    <Main>
      <div
      style={{ backgroundColor: colors[back], height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={changeColor}>
        Cambiar color 🎨
      </button>
    </div>
    </Main>
  )
}