import React from "react";
import { ItemTitle } from "../../components/ItemTitle/ItemTitle";
import { ItemText } from "../../components/ItemText/ItemText";
import { motion } from "framer-motion";

export const CardInfo = ({ title, text, image, imageWidth = "w-56", imageHeight = "h-56", children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Aparece la card por abajo
      animate={{ opacity: 1, y: 0 }} // Animacion de la card
      transition={{ duration: 0.6, ease: "easeOut" }} // Transición de aparición
      className="flex flex-col items-center justify-center bg-teal-100 rounded-xl shadow-lg mx-auto max-w-[70rem] w-full px-8 sm:px-16 py-8 my-12  sm:my-16 md:my-20 flex-grow"
    >
    
      
      <ItemTitle
        content={title}
        styles="text-teal-900 text-2xl sm:text-3xl font-semibold mb-4 text-center"
      />

      <ItemText
        content={text}
        styles="text-gray-800 text-sm sm:text-lg text-center mb-6 max-w-2xl"
      />

      {image && (
        <img
          src={image}
          alt={title}
          className={`rounded-xl shadow-2xl ${imageWidth} ${imageHeight} object-cover mb-4 border-4 border-white`}
        />
      )}

      
      {children}  

    </ motion.div >
  );
};
