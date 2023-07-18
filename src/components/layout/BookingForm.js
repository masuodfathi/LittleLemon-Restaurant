import React, { useState } from "react";

export const BookingForm = ({ availableTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [times, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  
  const submitForm1 = (e) => {
    e.preventDefault();
    const values = {
      date: date,
      time: times,
      number: number,
      occasion: occasion,
    };
    // if (date && times && number && occasion) {
    submitForm(values);
    alert(JSON.stringify(values, null, 2));
    setDate("");
    setTime("");
    setNumber("");
    setOccasion("");
    //}
  };
  return (
    <>
      <form
        onSubmit={submitForm1}
        className="reservationform"
      >
        <label htmlFor="res-date">Choose date*</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          
        />
        <label htmlFor="res-time" id="rest-time-label">
          Choose time*
        </label>
        <select
          data-testid="res-time"
          id="res-time"
          value={times}
          onChange={(e) => setTime(e.target.value)}
          name="time"
          aria-labelledby="rest-time-label"
          
        >
          <option value="" hidden>
            Select reservation time
          </option>
          {availableTimes?.map((option) => (
            <option key={option.time} name="option">
              {option.time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests*</label>
        <input
          type="number"
          placeholder="Select number of guests"
          min="1"
          max="10"
          id="guests"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          
        />
        <label htmlFor="occasion" id="occasion-label">
          Occasion*
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          name="occasion"
          aria-labelledby="occasion-label"
          
        >
          <option value="" hidden>
            Select your occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="other">Other</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!(date && times && number && occasion)}
        />
      </form>
    </>
  );
};
export default BookingForm;
