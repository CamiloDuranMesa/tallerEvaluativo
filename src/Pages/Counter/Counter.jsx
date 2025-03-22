import React, { useState, useRef } from 'react';
import { Main } from '../../layouts/Main/Main';
import { ItemTitle } from '../../components/ItemTitle/ItemTitle';

export const Counter = () => {
   const [counter, setCounter] = useState(0); 
   const intervalRef = useRef(null); 

   const handleClick = () => {
      if (counter === 0) {
         
         intervalRef.current = setInterval(() => {
            setCounter(prev => prev + 1); 
         }, 1000);
      } else {

         clearInterval(intervalRef.current); 
         setCounter(0); 
      }
   };

   return (
       <Main>
           <div className="h-full w-full flex flex-col justify-center items-center gap-3 bg-teal-100">
               <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content={`Contador: ${counter}`} />
               <button 
                   className="p-4 bg-gray-500 text-white rounded-lg" 
                   onClick={handleClick} 
               >
                   {counter === 0 ? 'Comenzar conteo' : 'Reiniciar conteo'}
               </button>
           </div>
       </Main>
   );
};
