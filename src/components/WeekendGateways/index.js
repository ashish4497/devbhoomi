import React from "react";
import "./style.css";
import corbett from "../../assets/media/uttarakhand-tours/all-season/corbett-family-tour.jpg";
import nainital from "../../assets/media/uttarakhand-tours/all-season/nainital-tour.jpg";
import rishikesh from "../../assets/media/uttarakhand-tours/all-season/rishikesh-rafting-and-camping-tour.jpg";
import mussoorie from "../../assets/media/uttarakhand-tours/all-season/dehradun-rishikesh-mussoorie-tour.jpg";

const WeekendGateways = () => {
  return (
    <section id="sec-6" className="section-6">
      <div className="container">
        <div className="row w-100">
          <div className="col-12">
            <h4 className="regular-text text-center sup-heading">
              Short on Time, Big on Adventure & Yet Serenity Awaits! Check These
              Unmissable Uttarakhand Weekend Tours
            </h4>
            <h2 className="bold-heading text-center section-heading">
              Discover Uttarakhand's Weekend Gateways and Short Breaks
            </h2>
            <p className="sec-heading-paragraph">
              Its proximity to major cities like Delhi makes it an ideal short
              escape for nature lovers, adventure enthusiasts, and spiritual
              seekers. Whether it's the tranquil lakes of Nainital, the
              adventure sports hub of Rishikesh, or the serene hill station of
              Mussoorie, Uttarakhand's Destination Expert, Devbhumi Tourism
              offers a variety of Uttarakhand Tour Packages packed with magical
              experiences just in a short trip.{" "}
              <span className="hide-mobile">
                For those looking to escape the hustle of city life, the state's
                lush green valleys, snow-capped peaks, and sacred rivers provide
                the perfect setting for rejuvenation. From trekking in the
                scenic Himalayas to exploring ancient temples and enjoying
                wildlife safaris, Uttarakhand promises a refreshing blend of
                adventure, culture, and natural beauty, all easily accessible
                over a weekend.
              </span>
            </p>
          </div>
        </div>

        {/* Weekend Tours Section */}
        <div className="row w-100">
          <div className="col-12">
            <div className="packages-wrapper d-flex flex-wrap">
              {/* Item 1: Corbett Family Tour */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/tours/corbett-family-tour/">
                      <img
                        className="w-100"
                        src={corbett}
                        alt="uttarakhand weekend tours"
                        loading="lazy"
                      />
                      <h4 className="package-small-title text-center bold-heading font-black">
                        Corbett Family Tour
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        02 Nights/03 Days - Ex New Delhi
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 2: Nainital Weekend Tour */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/tours/nainital-tour/">
                      <img
                        className="w-100"
                        src={nainital}
                        alt="uttarakhand tour"
                        loading="lazy"
                      />
                      <h4 className="package-small-title text-center bold-heading font-black">
                        Nainital Weekend Tour
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        02 Nights/03 Days - Ex New Delhi
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 3: Rishikesh Rafting Tour */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/tours/rishikesh-rafting-tour/">
                      <img
                        className="w-100"
                        src={rishikesh}
                        alt="uttarakhand tours"
                        loading="lazy"
                      />
                      <h4 className="package-small-title text-center bold-heading font-black">
                        Rishikesh Rafting Tour
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        01 Nights/02 Days - Ex New Delhi
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 4: Mussoorie Weekend Tour */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/tours/mussoorie-weekend-tour/">
                      <img
                        className="w-100"
                        src={mussoorie}
                        alt="uttarakhand tour packages"
                        loading="lazy"
                      />
                      <h4 className="package-small-title text-center bold-heading font-black">
                        Mussoorie Weekend Tour
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        02 Nights/03 Days - Ex New Delhi
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Weekend Tours Section End */}

        {/* Explore All Weekend Tours Button */}
        <div className="row w-100">
          <div className="col-12 team-btn-wrapper d-flex justify-center">
            <a
              href="https://devbhumitourism.com/uttarakhand-weekend-tours"
              className="team-btn decoration-none semi-bold-text"
            >
              Explore All Uttarakhand Weekend Tours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendGateways;
