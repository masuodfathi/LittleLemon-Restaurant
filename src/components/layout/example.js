import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
  Radio,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MyDatePicker } from "./MyDatePicker";
import { MyNumbetTextBox } from "./MyNumbetTextBox";

const WithMaterialUI = () => {
  const today = new Date();
  const minDateyear = today.getFullYear();
  const minDateMonth = String(today.getMonth() + 1).padStart(2, "0");
  const minDateDay = String(today.getDate()).padStart(2, "0");
  const [min, setMin] = useState(
    minDateyear + "-" + minDateMonth + "-" + minDateDay
  );
  const validationSchema = yup.object({
    date: yup
      .date()
      .min(min, "should select a valide date")
      .required("Required"),
    number: yup.string("Enter your number").required("Password is required"),
    occasion: yup.string().required("Requierd"),
    seat: yup.string().required("One option should be selected"),
  });
  const formik = useFormik({
    initialValues: {
      date: "",
      number: "",
      occasion: "",
      seat: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="reservation-form">
        <div>
          <MyDatePicker formik={formik}/>
        </div>
        <div>
          <MyNumbetTextBox formik={formik}/>
        </div>
        <div>
          <InputLabel
            id="label-occasion"
            className={
              formik.touched.occasion && Boolean(formik.errors.occasion)
                ? "error"
                : ""
            }
          >
            Occasion
          </InputLabel>
          <Select
            className="occasion-select"
            variant="standard"
            labelId="label-occasion"
            id="occasion"
            name="occasion"
            value={formik.values.occasion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.occasion && Boolean(formik.errors.occasion)}
            label="Occasion"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Birthday">Birthday</MenuItem>
            <MenuItem value="Engagement">Engagement</MenuItem>
            <MenuItem value="Anniversary">Anniversary</MenuItem>
          </Select>
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel
              id="seat-option"
              className={
                formik.touched.seat && Boolean(formik.errors.seat)
                  ? "error"
                  : ""
              }
            >
              Seat
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="seat-option"
              name="seat"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.seat && Boolean(formik.errors.seat)}
            >
              <FormControlLabel
                value="inside"
                control={<Radio />}
                label="Inside"
              />
              <FormControlLabel
                value="outside"
                control={<Radio />}
                label="Outside"
              />
            </RadioGroup>
            <FormHelperText className="error">
              {formik.touched.seat && Boolean(formik.errors.seat)}
            </FormHelperText>
          </FormControl>
        </div>
        <div></div>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          className="reserv-button"
        >
          Reserve
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;
