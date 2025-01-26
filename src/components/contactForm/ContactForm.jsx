import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";

const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" placeholder="Enter name" />
          <ErrorMessage name="name" componenr="span" />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <Field name="number" id="number" placeholder="Enter phone number" />
          <ErrorMessage name="number" componenr="span" />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
