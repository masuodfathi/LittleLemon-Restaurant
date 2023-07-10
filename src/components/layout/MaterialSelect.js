import React, { useEffect } from "react";
import { useField } from "formik";
import { Select,InputLabel } from "@mui/material";

export const MaterialSelect = ({ label,value, ...props }) => {
  const [field, meta] = useField(props);
  const print = () =>{
    console.log(field);
  }
  useEffect(()=>{
    console.log(field);
  })
  return (
    <>
      <InputLabel id={props.id}>{label}</InputLabel>
      {/* <label htmlFor={props.id || props.name} onClick={print()}>{label}</label> */}
      <Select {...field} {...props} value={field.value} onClick={print}/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};