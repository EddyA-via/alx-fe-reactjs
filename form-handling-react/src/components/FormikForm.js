// src/components/formikForm.js
import React from "react";
import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
};

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label htmlFor="username" className="block font-medium">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="border p-2 w-full"
        />
        {formik.errors.username ? <div className="text-red-500">{formik.errors.username}</div> : null}
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border p-2 w-full"
        />
        {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
      </div>

      <div>
        <label htmlFor="password" className="block font-medium">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border p-2 w-full"
        />
        {formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
