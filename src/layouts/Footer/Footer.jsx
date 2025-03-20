import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { CiTwitter } from "react-icons/ci";
import { SiGithub} from "react-icons/si";
import { ItemIcons } from "../../components/ItemIcons/ItemIcons";

export const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col md:flex-row w-full min-h-[7vh] bg-teal-600 justify-center items-center gap-4 p-8 text-white text-center" >
  <p className="max-w-xs break-words text-sm sm:text-base md:max-w-md">
    Desarrollado por <strong>Camilo Durán Mesa</strong>
  </p>
  <Navbar>
    <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6">

    <ItemIcons 
      content={<CiTwitter size={24} />} 
      route="https://x.com/CDMDEV10" 
    />
    <ItemIcons 
      content={<SiGithub size={24} />} 
      route="https://github.com/CamiloDuranMesa" 
    />




    </ul>
  </Navbar>
</footer>

  );
};
