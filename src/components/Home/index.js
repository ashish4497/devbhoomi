import React from "react";
import "./style.css";
import Logo from "../../assets/media/logo.png";
import CategoriesSection from "../Categories";
import CallbackForm from "../CallbackForm";
import UttarakhandTourPackages from "../AllSeasonPackages";
import DestinationExpert from "../DestinationExpert";
import WeekendGateways from "../WeekendGateways";
import TourPacks from "../TourPacks";
import CharDhamYatra from "../SpiritualJourney";
import InquiryForm from "../InquiryForm";
import AboutUttrakhand from "../ AboutUttarakhandTour";
import UttarakhandBlogsSection from "../TourArticles";
import TripAdvisorSection from "../AdvisorTestimonials";
import WhyChooseUsSection from "../ExploreAdventure";
import Footer from "../Footer";

export default function HeroSection() {
  return (
    <>
      <section id="hero">
        <div className="hero">
          <div className="container">
            <div className="inner-wrapper hero-content-wrapper d-flex flex-column align-center">
              <img
                loading="lazy"
                fetchpriority="low"
                src={Logo}
                alt="devbhumi tourism logo"
                className="hero-img"
              />
              <div className="space-20"></div>
              <h1 className="semi-bold-text hero-title text-center">
                Uttarakhand Tour Packages Tailored For 2025
              </h1>
              <h2 className="hero-title text-center">
                <span className="bold-heading">Devbhumi Tourism</span>
              </h2>
              <p className="semi-bold-text hero-paragraph text-center">
                Nestled in the foothills of the Himalayas, the beautiful hill
                state of Uttarakhand is the dream destination of every
                traveller. After all, there is no day that you don't find
                untouched natural beauty, a tryst with the wild, a journey of
                the soul, and a fun holiday, all packed into one. But, the gem
                of the north "Devbhumi Tourism" manages to pull this off in
                style. With regards to cute quality Uttarakhand Tour Packages,
                Devbhumi Tourism ventures up in any case to furnish you with a
                very acceptable involvement in the recollections for the
                lifetime.
              </p>
              <h3 className="hero-number"># 1</h3>
              <h4 className="text-center font-2x hide-mobile">
                UTTARAKHAND TOUR FACILITATOR
              </h4>
              <h5 className="text-center hide-mobile">
                Devbhumi Travel And Tourism LLP
              </h5>
              <div className="space-50"></div>
              <div className="row w-100 hero-btn-wrapper">
                <div className="col-4 text-center">
                  <a
                    href="https://devbhumitourism.com/uttarakhand-tour-packages/"
                    className="hero-btn decoration-none bold-text"
                  >
                    <i className="fa fa-gift" aria-hidden="true"></i>{" "}
                    Uttarakhand Tour Packages
                  </a>
                </div>
                <div className="col-4 text-center">
                  <a
                    href="https://devbhumitourism-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc"
                    className="hero-btn decoration-none bold-text"
                  >
                    <i className="fa fa-book" aria-hidden="true"></i> हिंदी और
                    120+ भाषाओं में पढ़ें
                  </a>
                </div>
                <div className="col-4 text-center">
                  <a
                    href="https://devbhumitourism.com/char-dham-yatra-packages/"
                    className="hero-btn decoration-none bold-text"
                  >
                    <i className="fa fa-bell" aria-hidden="true"></i> Char Dham
                    Yatra Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoriesSection />
      <CallbackForm />
      <UttarakhandTourPackages />
      <DestinationExpert />
      <WeekendGateways />
      <TourPacks />
      <CharDhamYatra />
      <InquiryForm />
      <AboutUttrakhand />
      <CallbackForm />
      <UttarakhandBlogsSection />
      <TripAdvisorSection />
      <WhyChooseUsSection />
      <Footer />
    </>
  );
}
