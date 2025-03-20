import React from 'react';
import Image from '../../assets/images/error-404.png';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <img 
        src={Image} 
        alt="Not found resources" 
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
      />
      <p className="text-gray-600 text-lg mt-4">Oops! Page not found.</p>
    </div>
  );
};
