import React from "react";
import "./style.css";
import package01 from "../../assets/media/uttarakhand-tours/upcoming-tours/christmas-packages.jpg";
import package0 from "../../assets/media/uttarakhand-tours/upcoming-tours/tungnath-trek.jpg";
import package02 from "../../assets/media/uttarakhand-tours/upcoming-tours/new-year-packages.jpg";
import package03 from "../../assets/media/uttarakhand-tours/upcoming-tours/kedarkantha-trek.jpg";
import package04 from "../../assets/media/uttarakhand-tours/upcoming-tours/republic-day-packages.jpg";

const UttrakhandTourBanner = () => {
  return (
    <section className="banner">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex flex-column align-center banner-content">
            <p className="regular-text hero-title text-center banner-content-h2">
              Whispers of the Himalayas: Uttarakhand's Unique Tour Experiences
              For 2024
            </p>
            <h1 className="bold-heading font-yellow banner-content-h1 text-center">
              Divine Heights and Alpine Retreats: <br />
              Uttarakhand Tour Packages
            </h1>
            <p className="banner-content-p text-center">
              Once you book a Uttarakhand tour, it is very obvious that you will
              urge to visit the paradise on earth again & again. Spotted with
              holy Hindu temples along with flamboyant trekking trails, it is a
              travel destination where you cannot only fulfill your religious
              aspirations of blessings from God, but immensely appealing
              adventurous & soothing activities are certain to exuberate your
              experience of Uttarakhand tour packages. Go ahead, Stay ahead, and
              Book ahead the upcoming holiday tours for Uttarakhand.
            </p>
            <div className="space-20"></div>
            <h2
              className="bold-heading font-yellow text-center"
              style={{ textDecoration: "underline" }}
            >
              Discover The Upcoming Holiday Packages For Uttarakhand
            </h2>
          </div>

          {/* Upcoming holidays carousel */}
          <div className="row w-100">
            <div className="col-12">
              <div className="packages-wrapper d-flex flex-wrap tour-packages-slider owl-carousel owl-theme">
                {/* Item 1 */}
                <div className="package-item col-12">
                  <div className="package-card">
                    <div className="package-image">
                      <img
                        className="w-100"
                        src={package01}
                        alt="Christmas Tour Packages"
                        loading="lazy"
                      />
                      <h4
                        className="text-center font-black mt-20"
                        style={{ textDecoration: "underline" }}
                      >
                        Christmas Tour Packages
                      </h4>
                      <p
                        className="text-center font-black"
                        style={{ fontSize: "12px" }}
                      >
                        Plan your Christmas either at Mussoorie, Chopta, Auli,
                        Rishikesh, Nainital, or in Corbett.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="package-item col-12">
                  <div className="package-card">
                    <div className="package-image">
                      <img
                        className="w-100"
                        src={package0}
                        alt="Tungnath Chandrashila Trek"
                        loading="lazy"
                      />
                      <h4
                        className="text-center font-black mt-20"
                        style={{ textDecoration: "underline" }}
                      >
                        Tungnath Chandrashila Trek
                      </h4>
                      <p
                        className="text-center font-black"
                        style={{ fontSize: "12px" }}
                      >
                        Plan a short trek tour to the world's highest Shiva
                        Temple with the mesmerizing views of the Himalayas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="package-item col-12">
                  <div className="package-card">
                    <div className="package-image">
                      <img
                        className="w-100"
                        src={package02}
                        alt="New Year Packages"
                        loading="lazy"
                      />
                      <h4
                        className="text-center font-black mt-20"
                        style={{ textDecoration: "underline" }}
                      >
                        New Year Packages
                      </h4>
                      <p
                        className="text-center font-black"
                        style={{ fontSize: "12px" }}
                      >
                        Plan your New Year eve at Mussoorie, Chopta, Auli,
                        Rishikesh, Nainital, or in Corbett.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="package-item col-12">
                  <div className="package-card">
                    <div className="package-image">
                      <img
                        className="w-100"
                        src={package03}
                        alt="Kedarkantha Winter Trek"
                        loading="lazy"
                      />
                      <h4
                        className="text-center font-black mt-20"
                        style={{ textDecoration: "underline" }}
                      >
                        Kedarkantha Winter Trek
                      </h4>
                      <p
                        className="text-center font-black"
                        style={{ fontSize: "12px" }}
                      >
                        Witness a live snowfall and investigate the snow trails
                        of Kedarkantha's winter paradise summit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="package-item col-12">
                  <div className="package-card">
                    <div className="package-image">
                      <img
                        className="w-100"
                        src={package04}
                        alt="Republic Day Packages 2025"
                        loading="lazy"
                      />
                      <h4
                        className="text-center font-black mt-20"
                        style={{ textDecoration: "underline" }}
                      >
                        Republic Day Packages 2025
                      </h4>
                      <p
                        className="text-center font-black"
                        style={{ fontSize: "12px" }}
                      >
                        Plan a short escape for your Republic day off and hide
                        at Mussoorie, Rishikesh, Nainital, or in Corbett.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Upcoming holidays carousel :END */}
        </div>
      </div>
    </section>
  );
};

export default UttrakhandTourBanner;
