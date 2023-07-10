import React from 'react'
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const MyDatePicker = ({formik}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              className="reservation-datetime"
              disablePast
              label="Date"
              value={formik.values.date}
              onChange={(value) => formik.setFieldValue("date", value, true)}
              slotProps={{
                toolbar: {
                  toolbarPlaceholder: "__",
                  toolbarFormat: "DD / MM / YYYY",
                  hidden: false,
                },
                textField: {
                  variant: "standard",
                  helperText: formik.touched.date && formik.errors.date,
                  error:
                    Boolean(formik.touched.date) && Boolean(formik.errors.date),
                },
              }}
            />
          </LocalizationProvider>
  )
}
