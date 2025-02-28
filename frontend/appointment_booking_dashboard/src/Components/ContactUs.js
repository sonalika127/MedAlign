import React, { useState } from 'react';
import '../css/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful submission (you can replace this with an actual API call)
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage(null);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setErrorMessage("Please fill out all required fields.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to reach out to us.</p>
        </div>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-us-footer">
        <p>Have any questions? Reach us at:</p>
        <p>Email: contact@medalign.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
