import React from "react";

import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";
import { DarkLightMode } from "./Pages/DarkLightMode/DarkLightMode";
import { LikeDislike } from "./Pages/LikeDislike/LikeDislike";
import { BackColor } from "./Pages/BackColor/BackColor";
import { Counter } from "./Pages/Counter/Counter";


export const App = () =>{

  return(
    <>
       <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/DarkLightMode" element={<DarkLightMode />} />
        <Route path="/LikeDislike" element={<LikeDislike />} />
        <Route path="/BackColor" element={<BackColor />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
      
      <Footer />
    </>
    
  )
}