import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div
      className="contact__section"
    >
      <div className="form__Div card">
        <form action="" className="contact__form ">
          <div>
            <p>YOUR NAME</p>
            <input type="text" name="Name" />
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <input type="text" name="Name" />
          </div>
          <div className="two__column">
            <p>EMAIL</p>
            <input type="text" name="Name" />
          </div>{" "}
          <div className="two__column">
            <p>SUBJECT</p>
            <input type="text" name="Name" />
          </div>{" "}
          <div className="two__column">
            <p>YOUR MESSAGE</p>
            <textarea name="message" rows="5" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
