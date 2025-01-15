import React, { useState } from "react";
import "./style.css";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    tourName: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    adults: "",
    children: "",
    rooms: "",
    arrivalDate: "",
    pickupLocation: "",
    pickupTime: "",
    departureDate: "",
    dropoffLocation: "",
    dropoffTime: "",
    cab: "",
    budget: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="inquiry" className="section-7">
      <div className="container">
        <div className="row w-100 section-7-wrapper">
          <div className="col-12">
            <h3 className="regular-text text-center font-white">
              Fill Out The Below Inquiry Form
            </h3>
            <h4 className="bold-heading text-center font-white font-2x">
              Get A Free, Well-Crafted, And Highly Competitive
              <br /> Quote Within 24 Hours.
            </h4>
          </div>
        </div>
        <div className="row mt-40">
          <div className="col-12 mt-20 d-flex justify-center">
            <form
              name="reservation-inquiry"
              id="char-dham-reservation-form"
              method="POST"
              className="w-70 d-flex flex-wrap quote-form"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <div className="form-group w-100">
                <input
                  type="text"
                  id="tour-name"
                  name="tourName"
                  className="form-control"
                  placeholder="Please type a tour name or type the name of a few places you want to explore..."
                  value={formData.tourName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  className="form-control"
                  placeholder="Your Full Name?"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="mobile-number">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile-number"
                  name="mobileNumber"
                  className="form-control"
                  placeholder="Your Mobile Number?"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email ID?"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="adults">Total Adults (Above 12 Years)</label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  className="form-control"
                  placeholder="How many adults are there?"
                  required
                  value={formData.adults}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="children">Total Children (6 to 11 Years)</label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  className="form-control"
                  placeholder="How many children are there?"
                  required
                  value={formData.children}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="rooms">Preferred Number of Rooms</label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  className="form-control"
                  placeholder="How many rooms you want?"
                  required
                  value={formData.rooms}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="arrival-date">Arrival Date</label>
                <input
                  type="date"
                  id="arrival-date"
                  name="arrivalDate"
                  className="form-control"
                  required
                  value={formData.arrivalDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="pickup-location">Pickup Location</label>
                <input
                  type="text"
                  id="pickup-location"
                  name="pickupLocation"
                  className="form-control"
                  placeholder="From Where To Pick You?"
                  required
                  value={formData.pickupLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="pickup-time">Pickup Time</label>
                <input
                  type="time"
                  id="pickup-time"
                  name="pickupTime"
                  className="form-control"
                  value={formData.pickupTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="departure-date">Departure Date</label>
                <input
                  type="date"
                  id="departure-date"
                  name="departureDate"
                  className="form-control"
                  required
                  value={formData.departureDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="dropoff-location">Drop-off Location</label>
                <input
                  type="text"
                  id="dropoff-location"
                  name="dropoffLocation"
                  className="form-control"
                  placeholder="Where To Drop You?"
                  required
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-33">
                <label htmlFor="dropoff-time">Drop-off Time</label>
                <input
                  type="time"
                  id="dropoff-time"
                  name="dropoffTime"
                  className="form-control"
                  value={formData.dropoffTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-50">
                <label htmlFor="cab">Preferred Cab</label>
                <select
                  id="cab"
                  name="cab"
                  className="form-control"
                  required
                  value={formData.cab}
                  onChange={handleChange}
                >
                  <option value="">Select Cab</option>
                  <option value="Sedan">Sedan Cab (4+1 Seater)</option>
                  <option value="SUV">SUV Cab (6+1)</option>
                  <option value="Tempo Traveller (12+1)">
                    Tempo Traveller (12+1 Seater)
                  </option>
                  <option value="Tempo Traveller (16+1)">
                    Tempo Traveller (16+1 Seater)
                  </option>
                  <option value="Tempo Traveller (24+1)">
                    Tempo Traveller (24+1 Seater)
                  </option>
                  <option value="Bus/Coach">Bus/Coach (27+ Seater)</option>
                </select>
              </div>
              <div className="form-group w-50">
                <label htmlFor="budget">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  className="form-control"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="premium">Premium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="form-group w-100">
                <label htmlFor="requirements">Specific Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  className="form-control"
                  placeholder="Do you have any specific requirements? Please write em' all here."
                  rows="4"
                  value={formData.requirements}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group w-100 d-flex align-center">
                <button type="submit" className="big-button-yellow hover-light">
                  Request a Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
