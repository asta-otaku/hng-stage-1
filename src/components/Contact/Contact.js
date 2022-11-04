import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextError from "./TextError";

function Contact() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required!"),
    last_name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format!").required("Required"),
  });

  onsubmit = (values) => {
    console.log("Form Data", values);
  };

  return (
    <>
      <div className="contact-container">
        <h4>Contact Me</h4>
        <p>
          Hi there, contact me to ask me about
          <span className="contact-span"> anything you have in mind.</span>
        </p>
        <div className="form-fields">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onsubmit}
          >
            {(formik) => (
              <Form>
                <div className="name-flex">
                  <div>
                    <label htmlFor="first_name">First name</label>
                    <Field
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter your first name"
                    />
                    <ErrorMessage name="first_name" component={TextError} />
                  </div>
                  <div>
                    <label htmlFor="last_name">Last name</label>
                    <Field
                      name="last_name"
                      type="text"
                      id="last_name"
                      placeholder="Enter your last name"
                    />
                    <ErrorMessage name="last_name" component={TextError} />
                  </div>
                </div>

                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="yourname@email.com"
                />
                <ErrorMessage name="email" component={TextError} />
                <label name="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Send me a message and I'll reply you as soon as possible"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input type="checkbox" />
                  <p>
                    You agree to providing your data to{" "}
                    <span className="span-check">
                      {formik.values.first_name
                        ? formik.values.first_name
                        : "{name}"}{" "}
                      who may contact you.
                    </span>
                  </p>
                </div>
                <button type="submit" id="btn__submit">
                  Send message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
