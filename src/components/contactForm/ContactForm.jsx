import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = ({ handleSubmit, fieldValidation }) => {
  return (
    <Formik initialValues={{ name: "", number: "" }} validationSchema={fieldValidation} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" placeholder="Enter name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <Field name="number" id="number" placeholder="Enter phone number" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
