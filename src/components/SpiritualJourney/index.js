import React from "react";
import "./style.css";

import blog1 from "../../assets/tour-img/attractions/kedar-heli.webp";
import blog2 from "../../assets/tour-img/attractions/yamunotri5.webp";
import blog3 from "../../assets/tour-img/attractions/gangotri5.webp";

export const HelicopterYatra = () => {
  return (
    <section id="search-tour" className="section-02">
      <div className="container">
        <div className="row w-100">
          <h3 className="bold-heading text-center section-heading">
            Plan A Char Dham Yatra By Helicopter
          </h3>
          <br />

          {/* Blog 1 :START */}
          <div className="blog-sidebar-item d-flex justify-between align-start col-4">
            <div className="blog-sidebar-item-img-box">
              <img
                src={blog1}
                alt="char dham yatra registration process"
                className="blog-sidebar-item-img"
                loading="lazy"
              />
            </div>
            <div className="blog-sidebar-item-content">
              <a href="https://devbhumitourism.com/char-dham-yatra-by-helicopter/">
                <h3 className="font-white">Char Dham Yatra By Heli</h3>
              </a>
              <div className="blog-sidebar-item-date">
                05N/06D - Ex Dehradun
              </div>
              <h4 className="font-white">Starting From: INR 215,000.00 PP</h4>
            </div>
          </div>
          {/* Blog 1 :END */}

          {/* Blog 2 :START */}
          <div className="blog-sidebar-item d-flex justify-between align-start col-4">
            <div className="blog-sidebar-item-img-box">
              <img
                src={blog2}
                alt="char dham yatra registration process"
                className="blog-sidebar-item-img"
                loading="lazy"
              />
            </div>
            <div className="blog-sidebar-item-content">
              <a href="https://devbhumitourism.com/do-dham-yatra-by-helicopter/">
                <h3 className="font-white">Do Dham Yatra By Heli</h3>
              </a>
              <div className="blog-sidebar-item-date">
                02N/03D - Ex Dehradun
              </div>
              <h4 className="font-white">Starting From: INR 125,000.00 PP</h4>
            </div>
          </div>
          {/* Blog 2 :END */}

          {/* Blog 3 :START */}
          <div className="blog-sidebar-item d-flex justify-between align-start col-4">
            <div className="blog-sidebar-item-img-box">
              <img
                src={blog3}
                alt="char dham yatra registration process"
                className="blog-sidebar-item-img"
                loading="lazy"
              />
            </div>
            <div className="blog-sidebar-item-content">
              <a href="https://devbhumitourism.com/ek-dham-yatra-by-helicopter/">
                <h3 className="font-white">Ek Dham Yatra By Heli</h3>
              </a>
              <div className="blog-sidebar-item-date">
                05N/06D - Ex Dehradun
              </div>
              <h4 className="font-white">Starting From: INR 85,000.00 PP</h4>
            </div>
          </div>
          {/* Blog 3 :END */}
        </div>
      </div>
    </section>
  );
};

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
      <HelicopterYatra />
    </>
  );
};

export default CharDhamYatra;
