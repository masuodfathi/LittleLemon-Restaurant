import React from 'react'
import { NavLink } from 'react-router-dom'

export const Button = ({path,text}) => {
  return (
    <>
     <NavLink to={path} className="button">{text}</NavLink>
    </>
  )
}
