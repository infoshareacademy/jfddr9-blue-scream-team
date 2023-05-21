import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SignupSchema = Yup.object().shape({
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function BookingForm() {
  const formik = useFormik({
    initialValues: {
      city: "",
      children: 0,
      adult: 0,
      startDate: new Date(),
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="city">Nazwa miasta:</label>
        <input
          name="city"
          id="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        {formik.errors.city}
        <label htmlFor="children">Liczba dzieci: </label>
        <input
          name="children"
          id="children"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.children}
        />
        <label htmlFor="adult">Liczba osób dorosłych: </label>
        <input
          name="adult"
          id="adult"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.adult}
        />
        <DatePicker
          name="startDate"
          selected={formik.values.startDate}
          onChange={formik.handleChange}
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
