import React from "react";
import Baner from "../../assets/Reservation.jpg";
import ReservationForm from "../sections/ReservationForm";
import FormikForm from '../sections/FormikForm';

export const Reservation = () => {
  return (
    <>
      <main className="reservation-main">
        <section className="reservation-section-one">
          <img src={Baner} alt="Little lemon" className="reservation-baner" />
        </section>
        <section className="section-form">
          {/* <ReservationForm/> */}
          <h2>Table reservation</h2>
          <FormikForm/>
        </section>
      </main>
    </>
  );
};
