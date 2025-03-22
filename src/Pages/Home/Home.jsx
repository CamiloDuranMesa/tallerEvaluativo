import React, { useState } from 'react'
import { Main } from '../../layouts/Main/Main'
import { ItemTitle } from '../../components/ItemTitle/ItemTitle'
import '../../index.css'

export const Home = () => {

  return (
    <Main >
        <div className="bg-teal-100 h-full w-full flex flex-col justify-center items-center gap-3">
          <ItemTitle styles="text-2xl font-bold text-gray-500 m-xl" content="Bienvenido a mi taller evaluativo"/>
          <h2 className='text-xl font-bold text-gray-500 m-xl'>En el header se podran encontrar las redirecciones a la solución de cada ejercicio.</h2>
           </div>
    </Main>
  )
}
