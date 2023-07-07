import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/Footerlogo.png";

export const Footer = () => {
  return (
    <footer>
      <section className="footer-section-image">
        <img src={FooterLogo} alt="" />
      </section>
      <section>
        <h3 className="footer-header">Doormate navigation</h3>
        <ul>
          <li>
            <NavLink to="/" className="menu">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="menu">About</NavLink>
          </li>
          <li>
            <NavLink to="/Menu" className="menu">Menu</NavLink>
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
        </ul>
      </section>
      <section>
        <h3 className="footer-header">Contact</h3>
      <ul>
        <li className="menu">Iran, Tehran, Chitgar Lake</li>
        <li className="menu">+989125758186</li>
        <li className="menu">Masuod.fathi@gmail.com</li>
      </ul>
      </section>
      <section>
        <h3 className="footer-header">Social media</h3>
      <ul>
        <li className="menu">FaceBook</li>
        <li className="menu">Instagram</li>
        <li className="menu">Telegram</li>
      </ul>
      </section>
    </footer>
  );
};
