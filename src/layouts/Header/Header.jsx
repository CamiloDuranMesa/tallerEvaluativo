import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ItemTitle } from "../../components/ItemTitle/ItemTitle";
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 flex w-full h-[5rem] bg-teal-600 items-center justify-between px-6 py-4 text-white shadow-md">

      <ItemTitle 
        content="Taller Evaluativo" 
        styles="text-3xl sm:text-2xl md:text-xl font-bold tracking-wide text-white text-center break-words"/>
      <Navbar>
      <ul className="flex justify-center space-x-4">

          <ItemNavbar route="/" content="Inicio"/>
          <ItemNavbar route="/DarkLightMode" content="Modo Claro y Oscuro" />
          <ItemNavbar route="/LikeDislike" content="Like y Dislike" />
          <ItemNavbar route="/BackColor" content="Color de fondo"/>
          <ItemNavbar route="/Counter" content="Contador" />
        </ul>
      </Navbar>
    </header>
  );
};
