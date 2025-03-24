import React, { useState } from "react";
import { ItemTitle } from "../ItemTitle/ItemTitle";

export const CounterToggle = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      localStorage.setItem("intervalId", interval);
    } else {
      clearInterval(localStorage.getItem("intervalId"));
      localStorage.removeItem("intervalId");
      setCounter(0);
      setIsRunning(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 bg-teal-100">
      <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content={`Contador: ${counter}`} />
      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={handleClick}>
        {isRunning ? "Parar conteo" : "Comenzar conteo"}
      </button>
    </div>
  );
};
