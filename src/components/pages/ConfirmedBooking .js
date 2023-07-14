import React from "react";

export const ConfirmedBooking = ({ formData }) => {
  return (
    <>
      <section className="confirmform">
        <h1 className="center">Confirmed Booking </h1>
        <hr/>
        <p className="center">Your reservation details are</p>
        <p className="center">Date: {formData.date}</p>
        <p className="center">Time: {formData.time}</p>
        <p className="center">Number of guests: {formData.number}</p>
        <p className="center">your reservation occasion: {formData.occasion}</p>
      </section>
    </>
  );
};
