import React from 'react'
import { TextField } from '@mui/material';

export const MyNumbetTextBox = ({formik}) => {
  return (
    <TextField
            variant="standard"
            fullWidth
            id="number"
            name="number"
            label="Number"
            type="number"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
  )
}
