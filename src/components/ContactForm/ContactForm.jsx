import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contactMethod: "",
    referral: []
  });

  const [submitted, setSubmitted] = useState(false); // ✅ success state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        referral: checked
          ? [...prev.referral, value]
          : prev.referral.filter((item) => item !== value)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    console.log(formData);

    setSubmitted(true); // ✅ show success UI
  };

  /* SUCCESS SCREEN */
  if (submitted) {
    return (
      <section id="contact-section" className="contact">
        <div className="contact-container">
          <h2>Message Sent Successfully!</h2>
          <p>We’ll get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-section" className="contact">
      <div className="contact-container">

        <h2>Have Questions About Planetary Science?</h2>

        <p>
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we’ll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>

          {/* LEFT SIDE */}
          <div className="form-left">
            <label>
              Full Name*
              <input
                type="text"
                name="name"
                placeholder="Full name"
                onChange={handleChange}
              />
            </label>

            <label>
              City*
              <select name="city" onChange={handleChange}>
                <option>Choose city</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
            </label>

            <label>
              Message*
              <textarea
                name="message"
                placeholder="Enter your message"
                maxLength="100"
                onChange={handleChange}
              />
              <small>100 characters</small>
            </label>
          </div>

          {/* RIGHT SIDE */}
          <div className="form-right">
            <label>
              Email*
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                onChange={handleChange}
              />
            </label>

            <label>
              Phone Number*
              <input
                type="text"
                name="phone"
                placeholder="Please enter a valid phone number"
                onChange={handleChange}
              />
            </label>

            {/* RADIO */}
            <div className="radio-group">
              <p>How should we contact you?</p>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Phone"
                  onChange={handleChange}
                />
                Phone
              </label>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Email"
                  onChange={handleChange}
                />
                Email
              </label>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Both"
                  onChange={handleChange}
                />
                Both
              </label>
            </div>

            {/* CHECKBOX */}
            <div className="checkbox-group">
              <p>How did you hear about us?</p>

              <label>
                <input
                  type="checkbox"
                  value="Friend"
                  onChange={handleChange}
                />
                Friend
              </label>

              <label>
                <input
                  type="checkbox"
                  value="TS Academy"
                  onChange={handleChange}
                />
                TS Academy
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Others"
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactForm;
