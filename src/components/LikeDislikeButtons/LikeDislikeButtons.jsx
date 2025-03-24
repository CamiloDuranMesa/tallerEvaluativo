import React, { useState } from "react";
import { ItemTitle } from "../ItemTitle/ItemTitle";

export const LikeDislikeButtons = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 bg-teal-100">
      <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content={`Likes: ${likes}`} />
      <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content={`Dislikes: ${dislikes}`} />
      
      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
      <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={() => setDislikes(dislikes + 1)}>
        Dislike 👎
      </button>
    </div>
  );
};


