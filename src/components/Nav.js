import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

export const Nav = () => {
  const [burgerClass, setBurgerClass] = useState("menu-icon");
  const [menuState, setMenuState] = useState(0);
  const [isOpen, setOpen] = useState(false)

  const burgerMenuHandler = () => {
    setMenuState(!menuState);
    menuState
      ? setBurgerClass("menu-icon")
      : setBurgerClass("menu-icon white");
    setOpen(!isOpen);
    console.log('menu state: ' + menuState);
    console.log('burgerClass: ' + burgerClass);
  };
  return (
    <nav className="top-nav">
      <div className={burgerClass}>
        <Hamburger onToggle={burgerMenuHandler} toggled={isOpen} toggle={setOpen}/>
      </div>
      <menu className={menuState? "burger-menu open":"burger-menu"}>
        <li>
          <NavLink to="/" className="menu" onClick={burgerMenuHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="menu" onClick={burgerMenuHandler}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="menu" onClick={burgerMenuHandler}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservation" className="menu" onClick={burgerMenuHandler}>
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" className="menu" onClick={burgerMenuHandler}>
            Order online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="menu" onClick={burgerMenuHandler}>
            Login
          </NavLink>
        </li>
      </menu>

      <menu className="primary-menu">
        <li>
          <NavLink to="/" className="menu">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="menu">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservation" className="menu">
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" className="menu">
            Order online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="menu">
            Login
          </NavLink>
        </li>
      </menu>
    </nav>
  );
};
