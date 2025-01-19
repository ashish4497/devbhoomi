import React from "react";
import "./style.css";
import package01 from "../../assets/media/uttarakhand-tours/upcoming-tours/christmas-packages.jpg";
import package0 from "../../assets/media/uttarakhand-tours/upcoming-tours/tungnath-trek.jpg";
import package02 from "../../assets/media/uttarakhand-tours/upcoming-tours/new-year-packages.jpg";
import package03 from "../../assets/media/uttarakhand-tours/upcoming-tours/kedarkantha-trek.jpg";
import package04 from "../../assets/media/uttarakhand-tours/upcoming-tours/republic-day-packages.jpg";
import Carousel from "react-multi-carousel";

const packages = [
  {
    img: package01,
    title: "Christmas Tour Packages",
    description:
      "Plan your Christmas either at Mussoorie, Chopta, Auli, Rishikesh, Nainital, or in Corbett.",
  },
  {
    img: package0,
    title: "Tungnath Chandrashila Trek",
    description:
      "Plan a short trek tour to the world's highest Shiva Temple with the mesmerizing views of the Himalayas.",
  },
  {
    img: package02,
    title: "New Year Packages",
    description:
      "Plan your New Year eve at Mussoorie, Chopta, Auli, Rishikesh, Nainital, or in Corbett.",
  },
  {
    img: package03,
    title: "Kedarkantha Winter Trek",
    description:
      "Witness a live snowfall and investigate the snow trails of Kedarkantha's winter paradise summit.",
  },
  {
    img: package04,
    title: "Republic Day Packages 2025",
    description:
      "Plan a short escape for your Republic day off and hide at Mussoorie, Rishikesh, Nainital, or in Corbett.",
  },
];

const carouselSettings = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlay: true,
  autoPlaySpeed: 3000,
  centerMode: false, // Disable center mode for consistent sizing
  className: "",
  containerClass: "container-r",
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  keyBoardControl: true,
  minimumTouchDrag: 80,
  pauseOnHover: true,
  renderArrowsWhenDisabled: false,
  renderButtonGroupOutside: false,
  renderDotsOutside: true,
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  },
  rewind: false,
  rewindWithAnimation: false,
  rtl: false,
  shouldResetAutoplay: true,
  showDots: true,
  itemClass: "carousel-item",
  // sliderClass: "carousel-slider",
  swipeable: true,
};

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
          {/* Upcoming  carousel */}
          <div className="row card-container">
            <div className="col-1">
              <Carousel {...carouselSettings}>
                {packages.map((pkg, index) => (
                  <div key={index} className="package-item">
                    <div className="package-card">
                      <div className="package-image">
                        <img
                          className="w-100"
                          src={pkg.img}
                          alt={pkg.title}
                          loading="lazy"
                        />
                        <h4
                          className="text-center font-black mt-20"
                          style={{ textDecoration: "underline" }}
                        >
                          {pkg.title}
                        </h4>
                        <p
                          className="text-center font-black"
                          style={{ fontSize: "12px" }}
                        >
                          {pkg.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UttrakhandTourBanner;
