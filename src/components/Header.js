import React from 'react'
import { Nav } from './Nav'

import Logo from '../assets/Logo.png'

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt='' className='logo'/>
        <Nav/>
        <div className='profile'>
        </div>
    </header>
  )
}
