import React from "react";
import "./style.css";
import expertImg from "../../assets/media/profile.jpg";

const DestinationExpert = () => {
  return (
    <section id="sec-4" className="section-4">
      <div className="container">
        <div className="row w-100 section-4-wrapper">
          <div className="col-6">
            <h4 className="regular-text text-left sup-heading font-white">
              Who You Are Talking To For Your Uttarakhand Tour Packages?
            </h4>
            <h2 className="bold-heading text-left section-heading font-white w-100">
              Meet The Host: Uttarakhand Destination Expert
            </h2>
            <p className="sec-heading-paragraph text-left font-white w-100 thin-text about-text">
              Hi There, my name is Lalit Mohan, I am from Ramnagar, Uttarakhand,
              which is also well known as Jim Corbett National Park. I am
              wandering and serving Uttarakhand since 2010 and I got the amazing
              people and contacts all around Uttarakhand which makes me an
              astonishing Uttarakhand Tour and Travel / Destination Expert.
            </p>
            <p className="sec-heading-paragraph font-white w-100 thin-text about-text text-left hide-mobile">
              I would love to serve people who know the value of Hospitality,
              Services, and Time-saving. I can make you done at just a single
              tap for anything in Uttarakhand whether it’s Bungee Jumping/River
              Rafting/Camping in Rishikesh, Paragliding in
              Dehradun/Mussoorie/Bhimtal, Jungle Safaris in Corbett/Rajaji
              National Park, Heli services for Kedarnath and Char Dham, or Auli
              ropeway etc. If we talk about the stay options, I have worked with
              hundreds of hotels in Uttarakhand and now we are left with only
              the greatest option at every budget scale, anywhere in
              Uttarakhand. We deal in stays who are polite, humble, responsive
              and top-rated in their class. I can bring you the real 4*
              Hotels/Resorts in Uttarakhand at highly competitive prices and
              trusted by thousands of Uttarakhand Tour and Travel & guest
              testimonials...
            </p>
            <h6 className="font-white bold-heading call-heading">
              I am just a Hi away, get connected on a Call/WhatsApp instantly
              and let’s plan your Uttarakhand tour package.
            </h6>
            <div className="col-12 d-flex _buttons_wrapper">
              <a
                href="https://wa.me/919012466887"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me-btn hover-light decoration-none semi-bold-text mt-10"
              >
                Chat Now
              </a>
              <a
                href="https://devbhumitourism.com/about-us/"
                className="about-me-btn hover-light decoration-none semi-bold-text mt-10"
              >
                About Us
              </a>
              <a
                href="https://devbhumitourism.com/uttarakhand-group-departures/"
                className="about-me-btn hover-light decoration-none semi-bold-text mt-10"
              >
                Join Me On Group Departures
              </a>
            </div>
          </div>
          <div className="col-6 text-center">
            <img
              src={expertImg}
              alt="Uttarakhand Destination Expert - Lalit Mohan"
              className="profile-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="row">
          <marquee onMouseOver={(e) => e.stop()} onMouseOut={(e) => e.start()}>
            <p style={{ fontSize: "18px" }} className="font-white">
              Here are the upcoming group tours:{" "}
              <a
                href="https://devbhumitourism.com/chopta-tungnath-group-departures/"
                className="font-white"
              >
                <b>Chopta Tungnath Winter Trek Group Departures</b>
              </a>{" "}
              <a
                href="https://devbhumitourism.com/kedarkantha-trek-group-departures/"
                className="font-white"
              >
                <b>Kedarkantha Winter Trek Group Departures</b>
              </a>
              <a
                href="https://devbhumitourism.com/char-dham-group-departures/"
                className="font-white"
              >
                <b>Char Dham Yatra Group Departures 2025</b>
              </a>
            </p>
          </marquee>
        </div>
      </div>
    </section>
  );
};

export default DestinationExpert;
