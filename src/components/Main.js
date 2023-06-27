import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Reservation } from './pages/Reservation';
import { Menu } from './pages/Menu';
import { OrderOnline } from './pages/OrderOnline';


export const Main = () => {
  return (
    <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/order-online' element={<OrderOnline/>}/>
        </Routes>
    </main>
  )
}
