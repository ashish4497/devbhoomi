import React, { useState } from "react";
import "./style.css";

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="search-tour" className="section-02">
      <div className="container">
        <div className="row">
          <form
            name="callback-request"
            method="get"
            className="w-100 d-flex flex-wrap quote-form search-form align-center"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <div className="form-group w-20">
              <h3 className="bold-heading text-center section-heading">
                Request A Callback
              </h3>
            </div>

            <div className="form-group w-20">
              <label htmlFor="name" style={{ color: "#fff" }}>
                Your Full Name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Type your full name please."
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-20">
              <label htmlFor="phone" style={{ color: "#fff" }}>
                Your Mobile Number?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Type your mobile number please."
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-20">
              <label htmlFor="email" style={{ color: "#fff" }}>
                Your Email Address?
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                placeholder="Type your email address please."
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-20">
              <button type="submit" className="btn quote-submit-btn w-100">
                Submit Your Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallbackForm;
