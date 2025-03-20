import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({content, route}) => {
  return (
    <li>
        <NavLink className="text-lg hover:text-blue-300 transition duration-300" to={route}>{content}</NavLink>
    </li>
  )
}
