import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = values => {
//     const errors = {};
//     if (!values.date) {
//       errors.date = 'Required';
//     } else if (values.date < Date.now) {
//       errors.date = 'You should select an available date';
//     }

//     if (!values.number) {
//       errors.number = 'Required';
//     } else if (values.number > 10) {
//       errors.number = 'We can manage under 10 person';
//     }

//     if (!values.occasion) {
//       errors.occasion = 'Required';
//     }
//     return errors;
//   };
const today = new Date();

const ReservationForm = () => {
    const minDateyear = today.getFullYear();
    const minDateMonth = String(today.getMonth()+1).padStart(2,"0");
    const minDateDay = String(today.getDate()).padStart(2,"0");
    const curruntTime = + today.getHours() + ":"  + String(today.getMinutes()).padStart(2,"0");;
    const [min, setMin] = useState(minDateyear + "-" + minDateMonth + "-" + minDateDay);
  
  useEffect(() => {
    setMin(() => {
      return minDateyear + "-" + minDateMonth + "-" + minDateDay;
    });
  }, [minDateDay,minDateyear,minDateMonth]);

  const formik = useFormik({
    initialValues: {
      date:"",
      number: "",
      occasion: "",
      seat: "",
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(min, "should select a valide date")
        .required("Required"),
      number: Yup.number()
        .max(10, "Must be 10 people or less")
        .required("Required"),
      occasion: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-field">
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          name="date"
          type="datetime-local"
          min={min+'T'+curruntTime}
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        //   {...formik.getFieldProps("date")}
        />
        {formik.touched.date && formik.errors.date ? (
          <p className="error">{formik.errors.date}</p>
        ) : null}
      </div>
      <div className="form-field">
        <label htmlFor="number">Number of dinners: </label>
        <input
          id="number"
          name="number"
          type="number"
          {...formik.getFieldProps("number")}
        />
        {formik.touched.number && formik.errors.number ? (
          <p className="error">{formik.errors.number}</p>
        ) : null}
      </div>
      <div className="form-field">
        <label htmlFor="occasion">Occasion: </label>
        <select
          id="occasion"
          name="occasion"
          {...formik.getFieldProps("occasion")}
        >
          <option value="" disabled hidden>
            Choose an occasion
          </option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <p className="error">{formik.errors.occasion}</p>
        ) : null}
      </div>
      <button type="submit" className="button">Reserve</button>
    </form>
  );
};

export default ReservationForm;
