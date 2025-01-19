import React from "react";
import "./style.css";

const UttarakhandTourPackages = ({
  tours,
  headingData,
  buttonsData,
  pacakagebtn,
}) => {
  return (
    <section id="sec-3" className="section-3">
      <div className="container">
        <div className="row w-100 section-2-wrapper">
          <div className="col-12">
            <h4 className="regular-text text-center sup-heading">
              {headingData.subHeading}
            </h4>
            <h2 className="bold-heading text-center section-heading">
              {headingData.mainHeading}
            </h2>
            <p className="sec-heading-paragraph">{headingData.description}</p>
          </div>
        </div>

        {/* All-Season Tours Start */}
        <div className="row w-100">
          <div className="col-12">
            <div className="space-20"></div>
            <div className="packages-wrapper d-flex flex-wrap">
              <div className="row w-100">
                <div className="col-12">
                  <div className="space-20"></div>
                  <div className="packages-wrapper d-flex flex-wrap">
                    {tours.map((tour, index) => (
                      <div className="package-item col-3" key={index}>
                        <div className="package-card">
                          <div className="package-image">
                            <a href={tour.link}>
                              <img
                                className="w-100"
                                src={tour.image}
                                alt={tour.alt}
                                loading="lazy"
                              />
                              <h4 className="text-center font-white">
                                {tour.title}
                              </h4>
                              <h6 className="package-duration thin-text">
                                {tour.duration}
                              </h6>
                              <p className="package-info semi-bold-text">
                                {tour.description}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* All-Season Tours End */}

        <div className="row">
          <div className="space-10"></div>
          <p className="sec-heading-paragraph hide-mobile">
            {headingData.footerDescription}
          </p>
          <div className="space-20"></div>

          <div className="col-12 d-flex justify-center _buttons_wrapper">
            {buttonsData.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className="packages-btn-1 hover-dark decoration-none semi-bold-text mt-10"
              >
                {button.label}
              </a>
            ))}
          </div>
          <div className="row w-100">
            <div className="col-12 packages-btn-wrapper d-flex justify-center">
              <a
                href={headingData.allPackagesLink}
                className="team-btn decoration-none bold-text"
              >
                {pacakagebtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UttarakhandTourPackages;
