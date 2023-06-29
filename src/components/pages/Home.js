import React from "react";
import Logo from "../../assets/Footerlogo.png";
import { Button } from "../layout/Button";

export const Home = ({partOneTitle="Special"}) => {
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
            <img src={Logo} alt="Little Lemon"/>
          </div>
        </div>
      </section>
      <section className="home-section">
      <h1>{partOneTitle}</h1>
      </section>
      
      <section className="home">
        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>

        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>
        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>
        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>
        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>
        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>
        <article>
          <h4>Article Title</h4>
          <p className="card-body">
            Duis sit amet hendrerit leo. Sed in odio ex. Donec volutpat neque
            non ex fermentum cursus in et massa. Aenean vehicula ornare
            vehicula. Etiam non eros mollis, lobortis eros sit amet, feugiat
            eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.
            Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla,
            ut volutpat eros nisi ut mi. Cras tristique libero consequat lectus
            convallis malesuada. Nullam lacinia quam non purus accumsan
            scelerisque.
          </p>
        </article>
      </section>
    </>
  );
};
