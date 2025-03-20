import React from 'react';

export const ItemIcons = ({ content, route }) => {
  return (
    <li>
      <a 
        href={route} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-lg hover:text-blue-300 transition duration-300"
      >
        {content}
      </a>
    </li>
  );
};
