import React from "react";
import "./style.css";

const CharDhamYatra = ({ sectionData, packages, buttons }) => {
  return (
    <>
      <section id={sectionData.id} className={sectionData.className}>
        <div className="container">
          {/* Section Header */}
          <div className="row w-100 section-3-wrapper">
            <div className="col-12">
              <h4 className="regular-text text-center sup-heading">
                {sectionData.subHeading}
              </h4>
              <h2 className="bold-heading text-center section-heading">
                {sectionData.heading}
              </h2>
              <p className="sec-heading-paragraph">
                {sectionData.description}
                <span className="hide-mobile">
                  {sectionData.additionalText}
                </span>
              </p>
            </div>
          </div>

          {/* Char Dham Tours */}
          <div className="row w-100">
            <div className="col-12">
              <div className="space-20"></div>
              <div className="packages-wrapper d-flex flex-wrap">
                {packages.map((pkg, index) => (
                  <div className="package-item col-3" key={index}>
                    <div className="package-card">
                      <div className="package-image">
                        <a href={pkg.link}>
                          <img
                            className="w-100"
                            src={pkg.imgSrc}
                            alt={pkg.altText}
                            loading="lazy"
                          />
                          <h4 className="package-small-title text-center bold-heading font-white">
                            {pkg.title}
                          </h4>
                          <p className="package-info semi-bold-text">
                            {pkg.duration}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-20"></div>

          {/* Additional Text */}
          <p className="sec-heading-paragraph hide-mobile">
            {sectionData.footerText}
            <strong>{sectionData.footerHighlight}</strong>
          </p>
          <div className="space-20"></div>

          {/* Buttons */}
          <div className="col-12 d-flex justify-center _buttons_wrapper">
            {buttons.subButtons.map((btn, index) => (
              <a
                href={btn.link}
                key={index}
                className="about-me-btn hover-dark decoration-none semi-bold-text mt-10"
              >
                {btn.label}
              </a>
            ))}
          </div>

          <div className="row w-100">
            <div className="col-12 packages-btn-wrapper d-flex justify-center">
              {buttons.mainButton ? (
                <a
                  href={buttons.mainButton.link}
                  className="big-button-yellow hover-dark decoration-none semi-bold-text mt-10"
                >
                  {buttons.mainButton.label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharDhamYatra;
