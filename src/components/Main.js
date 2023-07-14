import React,{useEffect, useReducer} from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Reservation } from './pages/Reservation';
import { Menu } from './pages/Menu';
import { OrderOnline } from './pages/OrderOnline';


const updateTime = () =>{
  return(
    [
      {time:"9:00"},
      {time:"10:00"},
      {time:"11:00"},
      {time:"12:00"},
      {time:"16:00"},
      {time:"17:00"},
      {time:"18:00"},
      {time:"19:00"},
      {time:"20:00"}
    ]
  )
}
export const initializeTimes  =[
  {time:"9:00"},
  {time:"10:00"},
  {time:"11:00"},
  {time:"12:00"},
  {time:"16:00"},
  {time:"17:00"},
  {time:"18:00"},
  {time:"19:00"},
  {time:"20:00"}
];

export const Main = () => {
  useEffect(()=>{
    // fetch()
    // .then((response) => response.json())
    // .then((jsonData) => console.log(jsonData))
    // .catch((error) => console.log(error));
  },[])
  const [availableTimes,setAvailableTimes] = useReducer(updateTime,initializeTimes);
  return (
    <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reservation' element={<Reservation availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/order-online' element={<OrderOnline/>}/>
        </Routes>
    </main>
  )
}
