import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Reservation } from "./pages/Reservation";
import { Menu } from "./pages/Menu";
import { OrderOnline } from "./pages/OrderOnline";
import { ConfirmedBooking } from "./pages/ConfirmedBooking ";
import { useNavigate } from "react-router-dom";

const updateTime = () => {
  return [
    { time: "9:00" },
    { time: "10:00" },
    { time: "11:00" },
    { time: "12:00" },
    { time: "16:00" },
    { time: "17:00" },
    { time: "18:00" },
    { time: "19:00" },
    { time: "20:00" },
  ];
};
export const initializeTimes = [
  { time: "9:00" },
  { time: "10:00" },
  { time: "11:00" },
  { time: "12:00" },
  { time: "16:00" },
  { time: "17:00" },
  { time: "18:00" },
  { time: "19:00" },
  { time: "20:00" },
];

export const Main = () => {
  const [formData, setFormData] = useState({});
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTime,
    initializeTimes
  );
  const Navigate = useNavigate();

  const hasValue = (values) => {
    console.log(values.date);
    console.log(values.time);
    console.log(values.number);
    console.log(values.occasion);
    if (
      values.date !== undefined &&
      values.time !== undefined &&
      values.number !== undefined &&
      values.occasion !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    console.log("UseEffect: " + formData.date);
    if (hasValue(formData)) {
      submitForm(formData);
    }
  }, [formData]);

  const submitForm = (myFormData) => {
    setFormData(myFormData);
    console.log("SubmitForm: : " + JSON.stringify(myFormData, null, 2));
    const respond = hasValue(myFormData);
    if (respond) {
      Navigate("/ConfirmedBooking");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/reservation"
          element={
            <Reservation
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route
          path="/ConfirmedBooking"
          element={<ConfirmedBooking formData={formData} />}
        />
      </Routes>
    </main>
  );
};
