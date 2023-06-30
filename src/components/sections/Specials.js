import React from 'react'
import Food1 from "../../assets/food1.png";
import Food2 from "../../assets/food2.jpeg";
import Food3 from "../../assets/food3.jpeg";
import { Button } from "../layout/Button";

export const Specials = ( {title}) => {
  return (
    <>
        <section className="home-section-one">
        <div className="home-section-one-title">
          <h2>{title}</h2>
          <Button path="/order-online" text="Order online" />
        </div>
      <section className="home-card-section">
        <article className="home-card">
          <div>
            <img src={Food1} alt="" />
          </div>
          <div className="card-text-section">
            <div className="card-header">
              <h4>Food Title</h4>
              <p className="card-price">$ 22.00</p>
            </div>
            <div>
              <p className="card-body">
                ante sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus
                ut vehicula iaculis, elit nunc sagittis nulla, ut volutpat eros
                nisi ut mi
              </p>
            </div>
            <div className="card-link">
              <h4 className="bold-link">Order delivery</h4>
            </div>
          </div>
        </article>

        <article className="home-card">
          <div>
            <img src={Food2} alt="" />
          </div>
          <div className="card-header">
            <h4>Food Title</h4>
            <p className="card-price">$ 22.00</p>
          </div>
          <div>
            <p className="card-body">
              ante sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus ut
              vehicula iaculis, elit nunc sagittis nulla, ut volutpat eros nisi
              ut mi
            </p>
          </div>
          <div className="card-link">
            <h4 className="bold-link">Order delivery</h4>
          </div>
        </article>

        <article className="home-card">
          <div>
            <img src={Food3} alt=""  />
          </div>
          <div className="card-header">
            <h4>Food Title</h4>
            <p className="card-price">$ 22.00</p>
          </div>
          <div>
            <p className="card-body">
              ante sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus ut
              vehicula iaculis, elit nunc sagittis nulla, ut volutpat eros nisi
              ut mi
            </p>
          </div>
          <div className="card-link">
            <h4 className="bold-link">Order delivery</h4>
          </div>
        </article>
      </section>
      </section>
    </>
  )
}
