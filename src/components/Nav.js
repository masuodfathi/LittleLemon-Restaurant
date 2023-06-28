import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
      <menu className="primary-menu">
        <li>
          <NavLink to="/" className="menu">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="menu">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/reservation" className="menu">Reservation</NavLink>
        </li>
        <li>
          <NavLink to="/order-online" className="menu">Order online</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="menu">Login</NavLink>
        </li>
      </menu>
    </nav>
  );
};
