// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}  // ✅ Required
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      <Form className="space-y-4 p-4 border rounded">
        <div>
          <label htmlFor="username" className="block font-medium">Username</label>
          <Field
            id="username"
            name="username"
            type="text"
            className="border p-2 w-full"
          />
          <ErrorMessage name="username" component="div" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            className="border p-2 w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            className="border p-2 w-full"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
