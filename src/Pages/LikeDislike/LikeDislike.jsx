import React from 'react'
import { Main } from '../../layouts/Main/Main';
import { ItemTitle } from '../../components/ItemTitle/ItemTitle';
import { useState } from 'react';

export const LikeDislike = () => {
   const [backDisLike, setLikeDislike]= useState(0);
   const [backLike, setLike]= useState(0);
   

  const Like = () =>{

    return setLike(backLike + 1)
  }

  const DisLike = () =>{

    return setLikeDislike (backDisLike + 1)
  }

  return (
    <Main>

  <div className={`h-full w-full flex flex-col justify-center items-center gap-3 bg-teal-100`}>

    <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content={`Likes: ${backLike}`} />

    <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content={`Dislikes: ${backDisLike}`} />

        <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={Like}>
          Like👍
        </button>
        <button className="p-4 bg-gray-500 text-white rounded-lg" onClick={DisLike}>
          Dislike👍
        </button>
    </div>
    </Main>
  )

  }


