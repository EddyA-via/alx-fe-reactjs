import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik Submitted:", values);
      }}
    >
      <Form>
        <h2>Formik Registration Form</h2>
        <div>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />
        </div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
