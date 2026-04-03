import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent to the stars! 🚀");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Connect with the Cosmos</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className="input-group">
            <textarea name="message" placeholder="Your Message..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="glow-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
