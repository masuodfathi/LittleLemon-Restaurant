import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/Footerlogo.png";

export const Footer = () => {
  return (
    <footer>
      <img src={FooterLogo} alt="" />
      <section>
        <h3>Doormate navigation</h3>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/order-online">Order online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
      <ul>
        <li>Iran, Tehran, Chitgar Lake</li>
        <li>+989125758186</li>
        <li>Masuod.fathi@gmail.com</li>
      </ul>
      </section>
      <section>
        <h3>Social media</h3>
      <ul>
        <li>FaceBook</li>
        <li>Instagram</li>
        <li>Telegram</li>
      </ul>
      </section>
    </footer>
  );
};
