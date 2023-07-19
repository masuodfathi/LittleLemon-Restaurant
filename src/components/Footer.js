import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/Footerlogo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

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
        <li className="menu"><FacebookIcon/>FaceBook</li>
        <li className="menu"><InstagramIcon/><a href="https://www.instagram.com/masuod.fathi?r=nametag">Instagram</a></li>
        <li className="menu"><TelegramIcon/>Telegram</li>
        <li className="menu"><LinkedInIcon/><a href="https://www.linkedin.com/in/masoud-fathi-3b4452176/">Linkedin</a></li>
      </ul>
      </section>
    </footer>
  );
};
