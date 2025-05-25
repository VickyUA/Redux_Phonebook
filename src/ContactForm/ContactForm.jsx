import { Formik, Form, Field } from "formik";
import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ add }) {
  const handleSubmit = (values, actions) => {
    add(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name">
            <FaUser size="14" color="rgb(9, 90, 33)" padding="10px" />
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="name"
            className={css.field}
            autoComplete="off"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div>
          <label htmlFor="number">
            <BiSolidPhone size="18" color="rgb(9, 90, 33)" />
            Phone
          </label>
          <Field
            type="text"
            name="number"
            id="number"
            className={css.field}
            autoComplete="off"
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
