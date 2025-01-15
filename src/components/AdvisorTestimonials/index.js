import React from "react";
import Slider from "react-slick";
import "./style.css";
import tripAdvisor from "../../assets/media/tripadvisor.png";

const Testimonial = ({ name, text }) => {
  return (
    <div className="testimonial">
      <h3 className="bold-heading">{name}</h3>
      <p className="sec-heading-paragraph text-center">{text}</p>
    </div>
  );
};

const TripAdvisorSection = () => {
  const sliderSettings = {
    dots: !true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: !true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="sec-8" className="section-8">
      <div className="container">
        <div className="row w-100 section-8-wrapper">
          <div className="col-12">
            <h2 className="bold-heading text-center section-heading font-yellow font-2x">
              TripAdvisor Testimonials
            </h2>
            <img
              src={tripAdvisor}
              alt="devbhumi tourism"
              className="tripadvisor"
            />
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="row w-100">
          <Slider {...sliderSettings} className="owl-carouse">
            <p style={{ color: "white" }}>Mr. Saish Narvekar, Mumbai</p>
            {/* <Testimonial
              name="Mr. Saish Narvekar, Mumbai"
              text="If you plan to visit Uttarakhand, there cannot be a better tour operator than Mr. Lalit Mohan. He is a 100% professional and provides the best hotels at affordable prices. Being a local, he has tie-ups all over Uttarakhand. We had booked a 7 nights and 8 days tour to Mussoorie, Rishikesh, Nainital, Jim Corbett and Haridwar. While on tour, we didn't like the hotel at Nainital. Mr. Lalit Mohan was so humble that he changed our hotel at the 11th hour. Our driver during the entire trip Mr. Satish ji Rawat is a nice man. He is a friendly and polite person and has no extraordinary demands like other drivers."
            /> */}
            {/* <Testimonial
              name="Mr. Girish Girkinde, Mumbai"
              text="Devbhumi Tourism arranged in Feb 2023, for me and other 5 members of the family an excellent tour of 8N & 9D to Haridwar, Chopta, Devprayag, Mussori and Rishikesh. The tour was customized as per our requirement and within the budget. Throughout the tour Mr. Lalit Mohan, MD of this Company was in touch with us for getting the update, with the drivers for the next day's program and the hotel where our stay was arranged. All the hotel rooms allotted were super deluxe rooms in MAP plan, with scenic views, best amenities, humble treatment and delicious food."
            />
            <Testimonial
              name="Dr. Bipin Thorat, Chennai"
              text="We were planning for Uttarakhand family trip in Dec 2022 and looked for travel experts and came across Dev Bhoomi. The existing reviews were amazing and requested for quote. Mr Lalit was very prompt to provide a tailored itinerary based on our need. We requested for specific hotels and also requested for a tempo traveller as we were big in number. His quote was very competitive and we didn't find it overpriced. We all decided to choose Dev Bhoomi which was a very good decision. The entire trip was carried out as per planned itinerary. He was prompt to resolve our minor issues during the trip."
            /> */}
          </Slider>
        </div>

        {/* Read All Reviews Button */}
        <div className="row w-100">
          <div className="col-12 d-flex justify-center">
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g616028-d15813251-Reviews-Devbhumi_Tourism-Haridwar_Haridwar_District_Uttarakhand.html"
              target="_blank"
              rel="noopener noreferrer"
              className="team-btn decoration-none semi-bold-text"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripAdvisorSection;
