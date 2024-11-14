import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formData,
        'YOUR_USER_ID' 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-page" id="contact">
      <header className="navbar">
        <div className="logo">
          <h1>BUILT FOR GREAT</h1>
        </div>
      </header>

      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <h3>Get in Touch</h3>
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
