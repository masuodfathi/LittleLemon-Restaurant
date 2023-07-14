import React from "react";
import Baner from "../../assets/Reservation.jpg";
// import ReservationForm from "../sections/ReservationForm";
// import { MymaterialSelect } from "../layout/MymaterialSelect";
import WithMaterialUI from '../layout/example'
import BookingForm from "../layout/BookingForm";



export const Reservation = ({availableTimes,setAvailableTimes}) => {
  return (
    <>
      <main className="reservation-main">
        <section className="reservation-section-one">
          <img src={Baner} alt="Little lemon" className="reservation-baner" />
        </section>
        <section className="section-form">
          <h2>Table reservation</h2>
          {/* <ReservationForm/> */}
          {/* <MymaterialSelect/> */}
            {/* <WithMaterialUI /> */}
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </section>
      </main>
    </>
  );
};
