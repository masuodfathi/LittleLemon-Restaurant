import React from "react";

import Res1 from "../../assets/restaurant1.jpg";
import Res2 from "../../assets/restaurant2.jpg";

export const Description = ({
  title = "Little Lemon",
  location = "Chicago",
  body = "A brief description of what type of food it offers ante sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus ut vehicula iaculis, elit nunc sagittis nulla, ut volutpat erosnisi ut mi Etiam non eros mollis, lobortis eros sit amet, feugiat eros. Aliquam et sem at ante sollicitudin varius aliquam ut nunc.",
}) => {
  return (
    <>
      <section className="discription flex justify-center">
        <article>
          <h1>{title}</h1>
          <p className="location">{location}</p>
          <p>{body}</p>
        </article>
        <article className="discription-image-section">
          <img className="discription-first-img" src={Res1} alt="Little limon restaurant" />
          <img className="discription-second-img" src={Res2} alt="Little limon restaurant" />
        </article>
      </section>
    </>
  );
};
