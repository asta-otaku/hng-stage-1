import React, { useState } from "react";
import "./Contact.css";

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
      </div>
      <div className="form-fields">
        <form>
          <label>First name</label>
          <input
            placeholder="Enter your first name"
            onChange={(e) => setFirst_Name(e.target.value)}
          />
          <label>First name</label>
          <input placeholder="Enter your last name" />
          <label>First name</label>
          <input placeholder="yourname@email.com" />
          <label>Message</label>
          <textarea placeholder="Send me a message and I'll reply you as soon as possible" />
          <div>
            <input type="checkbox" />
            <p>
              You agree to providing your data to{" "}
              <span>
                {first_name ? first_name : "{name}"} who may contact you.
              </span>
            </p>
          </div>
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
