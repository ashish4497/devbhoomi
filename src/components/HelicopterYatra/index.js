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
