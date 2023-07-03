import React from "react";
import Logo from "../../assets/Footerlogo.png";


import { Button } from "../layout/Button";
import { Specials } from "../sections/Specials";
import { Testimonials } from "../sections/Testimonials";
import { Description } from "../sections/Description";

export const Home = ({ partOneTitle = "Special" }) => {

  return (
    <>
      <section id="home-header">
        <div className="home-header">
          <div className="header-text">
            <h1>Little Lemon</h1>
            <p className="location">Location</p>
            <p>
              Etiam non eros mollis, lobortis eros sit amet, feugiat eros.
              Aliquam et sem at ante sollicitudin varius aliquam ut nunc. Nam
              tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
              ut volutpat eros nisi ut mi.
            </p>
            <Button path="/reservation" text="Reserve table" />
          </div>
          <div className="header-image">
            <img src={Logo} alt="Little Lemon" />
          </div>
        </div>
      </section>
      <Specials title={partOneTitle}/>
      <Testimonials />
      <Description/>
      </>
  );
};
