import React from "react";
import uttrakhandTour from "../../assets/media/uttarakhand-tours/treks/tungnath-chandrashila-trek.jpg";
import devBhumiImg from "../../assets/media/uttarakhand-tours/treks/valley-of-flowers-trek.jpg";
import kedarNath from "../../assets/media/uttarakhand-tours/treks/kedarkantha-trek.jpg";
import HarKiDun from "../../assets/media/uttarakhand-tours/treks/har-ki-dun-trek.jpg";
const TourPacks = () => {
  return (
    <section id="sec-2" className="section-2">
      <div className="container">
        <div className="row w-100 section-2-wrapper">
          <div className="col-12">
            <h4 className="regular-text text-center sup-heading">
              Go Offline Over The Himalayan Heights & Nature Trails: Uttarakhand
              Trekking Tours And Packages
            </h4>
            <h2 className="bold-heading text-center section-heading">
              Ultimate Trekking Tour Experiences In Uttarakhand
            </h2>
            <p className="sec-heading-paragraph">
              Himalayas, is a trekking paradise that offers an unmatched blend
              of scenic beauty, adventure, and spiritual energy. Devbhumi
              Tourism offers a great assistance, wheather booking a famous
              trails like the Tungnath, Kedarnath, Kedarkantha and Valley of
              Flowers treks or a lesser-known gems like Har Ki Dun and Roopkund.
              Uttarakhand has something for every trekker-whether you’re a
              beginner or an experienced adventurer.{" "}
              <span className="hide-mobile">
                {" "}
                Trekkers can experience diverse landscapes, from dense forests
                and rolling meadows to glacial lakes and towering snow-clad
                peaks. The trails also offer glimpses of vibrant wildlife,
                charming mountain villages, and sacred sites that dot the
                landscape. Whether you seek the thrill of high-altitude trekking
                or the serenity of nature walks, Uttarakhand’s treks promise an
                unforgettable journey through some of India’s most pristine and
                awe-inspiring terrains.
              </span>
            </p>
          </div>
        </div>

        {/* Trekking Tours Section */}
        <div className="row w-100">
          <div className="col-12">
            <div className="space-20"></div>
            <div className="packages-wrapper d-flex flex-wrap">
              {/* Item 1: Chopta Tungnath Trek */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/uttarakhand-treks/chopta-tungnath-chandrashilla-trek/">
                      <img
                        className="w-100"
                        src={uttrakhandTour}
                        alt="uttarakhand tour"
                        loading="lazy"
                      />
                      <h4 className="package-title text-center bold-heading font-black">
                        Chopta Tungnath Trek
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        Best Season: Round The Year
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 2: Valley of Flowers Trek */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/uttarakhand-treks/valley-of-flowers-trek/">
                      <img
                        className="w-100"
                        src={devBhumiImg}
                        alt="uttarakhand tour package"
                        loading="lazy"
                      />
                      <h4 className="package-title text-center bold-heading font-black">
                        Valley Of Flowers Trek
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        Best Season: July - Aug
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 3: Kedarkantha Trek */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/uttarakhand-treks/kedarkantha-trek/">
                      <img
                        className="w-100"
                        src={kedarNath}
                        alt="uttarakhand tour packages"
                        loading="lazy"
                      />
                      <h4 className="package-title text-center bold-heading font-black">
                        Kedarkantha Trek
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        Best Season: Nov - Feb
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 4: Har Ki Dun Trek */}
              <div className="package-item col-3">
                <div className="package-card">
                  <div className="package-image">
                    <a href="https://devbhumitourism.com/uttarakhand-treks/har-ki-dun-trek/">
                      <img
                        className="w-100"
                        src={HarKiDun}
                        alt="uttarakhand tour itinerary"
                        loading="lazy"
                      />
                      <h4 className="package-title text-center bold-heading font-black">
                        Har Ki Dun Trek
                      </h4>
                      <h6 className="bold-heading text-center font-black">
                        Best Season: Nov - Feb
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trekking Tours Section End */}

        {/* Explore All Trekking Packages Button */}
        <div className="row w-100">
          <div className="col-12 packages-btn-wrapper d-flex justify-center">
            <a
              href="https://devbhumitourism.com/uttarakhand-trek-tour-packages/"
              className="big-button-yellow decoration-none hover-light semi-bold-text"
            >
              Uttarakhand Trek Tour Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPacks;
