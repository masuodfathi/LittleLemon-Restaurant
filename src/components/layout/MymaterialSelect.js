import React from 'react';
import * as Yup from "yup";
import { TextField,Select,MenuItem,InputLabel } from "@mui/material";
import { useFormik } from "formik";


export const MymaterialSelect = () => {
    const {occasion,handleChange,handleBlur} = useFormik({
        initialValues: {
          occasion: "",
        },
        validationSchema:Yup.object({
            occasion : Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <>
    <InputLabel id="demo-simple-select-helper-label">Occasion</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={occasion}
          label="Occasion"
          onChange={handleChange}
          name='occasion'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </>
  )
}
