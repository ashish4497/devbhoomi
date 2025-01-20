import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const WeekendGateways = ({ headingInfo, tours, className }) => {
  return (
    <section id="sec-6" className={className}>
      <div className="container">
        {/* Section Heading */}
        <div className="row w-100">
          <div className="col-12">
            <h4 className="regular-text text-center sup-heading">
              {headingInfo.subHeading}
            </h4>
            <h2 className="bold-heading text-center section-heading">
              {headingInfo.mainHeading}
            </h2>
            <p className="sec-heading-paragraph">
              {headingInfo.description}
              <span className="hide-mobile">{headingInfo.additionalInfo}</span>
            </p>
          </div>
        </div>

        {/* Weekend Tours Section */}
        <div className="row w-100">
          <div className="col-12">
            <div className="packages-wrapper d-flex flex-wrap">
              {tours.map((tour, index) => (
                <div key={index} className="package-item col-3">
                  <div className="package-card">
                    <div className="package-image">
                      <a href={tour.link}>
                        <img
                          className="w-100"
                          src={tour.image}
                          alt={tour.alt}
                          loading="lazy"
                        />
                        <h4 className="package-small-title text-center bold-heading font-black">
                          {tour.title}
                        </h4>
                        <h6 className="bold-heading text-center font-black">
                          {tour.duration}
                        </h6>
                      </a>
                      <Link to={tour.link}>
                        <p className="sec-heading-paragraph text-center">
                          {tour.itinerary}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Weekend Tours Section End */}

        {/* Explore All Weekend Tours Button */}
        <div className="row w-100">
          <div className="col-12 team-btn-wrapper d-flex justify-center">
            <a
              href={headingInfo.buttonLink}
              className="team-btn decoration-none semi-bold-text"
            >
              {headingInfo.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendGateways;
