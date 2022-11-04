import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

function Contact() {
  const [first_name, setFirst_Name] = useState("");

  return (
    <>
      <div className="contact-container">
        <h4>Contact Me</h4>
        <p>
          Hi there, contact me to ask me about
          <span className="contact-span"> anything you have in mind.</span>
        </p>
        <div className="form-fields">
          <form>
            <div className="name-flex">
              <div>
                <label>First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirst_Name(e.target.value)}
                />
              </div>
              <div>
                <label>Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <label>Email</label>
            <input type="email" id="email" placeholder="yourname@email.com" />
            <label>Message</label>
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
                  {first_name ? first_name : "{name}"} who may contact you.
                </span>
              </p>
            </div>
            <button id="btn__submit">Send message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
