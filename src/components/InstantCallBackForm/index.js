import React from "react";
import "./style.css";

const InstantCallBackForm = () => {
  return (
    <section id="search-tour" className="search-tour">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="regular-text text-center sup-heading">
              Connect With An Uttarakhand Destination Expert
            </h2>
            <h3 className="bold-heading text-center section-heading">
              Request An Instant Callback From Us
            </h3>
            <p className="sec-heading-paragraph">
              Devbhumi Tourism is implementing every second to make your
              Uttarakhand tours handy, wow, and awesome. We are designing
              comfortable & mesmerizing Uttarakhand tour packages starting from
              New Delhi, Dehradun, Haridwar, Rishikesh, Kathgodam, and Ramnagar
              to provide you an excellent experience and super comfortable
              journey throughout the whole tour. Fill the below inquiry form and
              get an instant callback from our team.
            </p>
          </div>
        </div>
        <div className="row mt-20">
          <form
            name="callback-request"
            method="get"
            className="w-100 d-flex flex-wrap quote-form search-form align-center"
            data-netlify="true"
          >
            <div className="form-group w-25">
              <label htmlFor="name">Your Full Name?</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Type your full name please."
                required
              />
            </div>
            <div className="form-group w-25">
              <label htmlFor="phone">Your Mobile Number?</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Type your mobile number please."
                required
              />
            </div>
            <div className="form-group w-25">
              <label htmlFor="email">Your Email Address?</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                placeholder="Type your email address please."
                required
              />
            </div>
            <div className="form-group w-25">
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

export default InstantCallBackForm;
