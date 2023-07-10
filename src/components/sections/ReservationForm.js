import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Textbox } from "../layout/Textbox";
import * as Yup from "yup";
// import Select from "../layout/Select";
import { Radio } from "../layout/Radio";
import { TextField,Select } from "@mui/material";
import { InputLabel, MenuItem,NativeSelect } from "@mui/material";
import {MaterialSelect} from '../layout/MaterialSelect'

const today = new Date();

const ReservationForm = () => {
  const minDateyear = today.getFullYear();
  const minDateMonth = String(today.getMonth() + 1).padStart(2, "0");
  const minDateDay = String(today.getDate()).padStart(2, "0");
  // const curruntTime =
  //   +today.getHours() + ":" + String(today.getMinutes()).padStart(2, "0");
  const [min, setMin] = useState(
    minDateyear + "-" + minDateMonth + "-" + minDateDay
  );

  useEffect(() => {
    setMin(() => {
      return minDateyear + "-" + minDateMonth + "-" + minDateDay;
    });
  }, [minDateDay, minDateyear, minDateMonth]);

  return (
    <Formik
      initialValues={{ date: "", number: "", occasion: "", seat: "" }}
      validationSchema={Yup.object({
        date: Yup.date()
          .min(min, "should select a valide date")
          .required("Required"),
        number: Yup.number()
          .max(10, "Must be 10 people or less")
          .required("Required"),
        occasion: Yup.string().required("Required"),
        seat: Yup.string().required("Required"),
      })}
      onSubmit={async (values) => {
        await alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="form-field">
          <Textbox
            label="Date:"
            id="date"
            name="date"
            type="datetime-local"
            min={min + "T00:00"}
            fullWidth
            variant="standard"
          />
          <TextField
            variant="standard"
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            
          />
        </div>
        <div className="form-field">
          <Textbox
            label="Number:"
            id="number"
            name="number"
            type="number"
            placeholder="input number of dinners"
            variant="standard"
            fullWidth
          />
        </div>
        <div className="form-field">
          {/* <Select label="Occasion:" name="occasion" type="select" id="occasion">
            <option value="" disabled hidden>Select an occasion</option>
            <option value="designer">Birthday</option>
            <option value="development">Anniversary</option>
            <option value="product">Engagement</option>
            <option value="other">Other</option>
          </Select> */}
          <Select label="Occasion" name="occasion">
             <MenuItem value="">Select a job type</MenuItem>
             <MenuItem value="Birthday">Birthday</MenuItem>
             <MenuItem value="Engagement">Engagement</MenuItem>
             <MenuItem value="Anniversary">Anniversary</MenuItem>
             <MenuItem value="Other">Other</MenuItem>
           </Select>
        </div>
        <div className="form-field">
          <span className="seatoption">Seat option: </span>
          <Textbox
            label="inside"
            id="inside"
            name="seat"
            type="radio"
            value="inside"
          />
          <Textbox
            label="outside"
            id="outside"
            name="seat"
            type="radio"
            value="outside"
          />
        </div>
        <button type="submit" className="button">
          Reserve
        </button>
      </Form>
    </Formik>
    
  );
};

export default ReservationForm;
