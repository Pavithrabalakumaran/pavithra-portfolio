import React, { useState } from "react";
import "./style.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSubmitted(true); // Set the submitted state to true
    // Optionally, reset the form or perform other actions here
  };

  return (
    <section id="contact">  
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subtext">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Contact Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {submitted && (
          <div className="success-message">
            Message sent! Thank you for reaching out.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
