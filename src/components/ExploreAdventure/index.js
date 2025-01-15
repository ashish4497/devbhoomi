import React from "react";
import "./style.css";
import logo from "../../assets/media/Devbhumi-Tourism.png";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="col-3">
      <h2 className="bold-heading text-center">{title}</h2>
      <p className="paragraph text-center" style={{ fontSize: "14px" }}>
        {description}
      </p>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section id="sec-10" className="section-2">
      <div className="container">
        {/* Heading Section */}
        <div className="row w-100 section-3-wrapper">
          <div className="col-12">
            <h2 className="regular-text text-center sup-heading">
              Explore Pilgrimage | Explore Leisure | Explore Adventure | Explore
              Wildlife
            </h2>
            <h3 className="bold-heading text-center section-heading">
              Travelling With Devbhumi Tourism = A Lifetime Experience
            </h3>
            <p className="sec-heading-paragraph text-center">
              It's safe to say that there is no one like us when it comes to
              cherishing{" "}
              <a
                href="https://devbhumitourism.com/uttarakhand-tour-packages/"
                className="font-yellow"
              >
                Uttarakhand Tour Packages
              </a>
              . We give you deep exposure to enchanting Uttarakhand tourist
              places whether you are an explorer or a tourist. Devbhumi Tourism
              is a Limited Liability Partnership based in Haridwar, officially
              known as Devbhumi Travel And Tourism LLP. We are a team of locals
              with astonishing travel expertise and rich knowledge of the
              geography, history, and culture of our state "Uttarakhand". There
              is nothing here in Uttarakhand that we can't provide, it should be
              operational though, whether it’s Bungee Jumping/River Rafting,
              Kayaking, Paragliding, Heli Rides, Jungle Safaris and Forest
              Lodges, Heli services for Kedarnath and Char Dham, or ropeway
              rides, etc. From Haridwar to Auli, Divine Char Dhams, and Nainital
              to Pithoragarh, we cover all the famous and breathtaking Himalayan
              towns and cities. It becomes very demanding when we mix vibrant
              places with enchanting attractions in our Uttarakhand Tour
              Packages in a very genuine and professional manner.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row w-100 mt-20">
          <div className="col-4 mt-20 text-center">
            <img
              loading="lazy"
              fetchpriority="low"
              src={logo}
              alt="devbhumi tourism logo"
            />
          </div>
          <div className="col-8">
            <h4
              className="font-white"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              Why choose Devbhumi Tourism?
            </h4>
            <p>
              Well, all of us want a peaceful & hassle-free recreational tour to
              our favorite places. So, this is where Devbhumi Tourism steps up
              to assist you. With our Uttarakhand tour packages, you will get
              all-inclusive facilities to relish your journey amazingly. All of
              our Uttarakhand tour packages are super affordable and designed
              under a diversified choice of individuals to countless amenities
              in Uttarakhand. Our continuous dedication towards our work gives
              us{" "}
              <b>
                <font style={{ textDecoration: "underline" }}>
                  Excellent Rated on Tripadvisor
                </font>
              </b>
              , and Devbhumi Tourism will try its best to keep it up.
            </p>
            <br />
            <h4
              className="font-white"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              Devbhumi Tourism V/S Other Big Travel Sharks
            </h4>
            <p>
              All the big travel brands like MMT, Thrillophilia, Thomascook,
              etc., always look for local travel agents to cater their tours in
              every state, which includes higher commissions and delays the
              conversation. Sometimes a newbie can ensure you things which
              aren't available on the hills or lack of knowledge can make the
              tour totally different and frustrating. But at Devbhumi Tourism,
              you talk to local travel experts, you get all that is written in
              our tour plans, and you speak straight to the person who
              entertained you from the start.
            </p>
          </div>
        </div>

        <div className="space-20"></div>
        <hr />

        {/* Features Section */}
        <div className="row w-100 mt-20">
          <FeatureCard
            title="Stress-free Travel"
            description="You don’t have to worry about a single booking. Just pick an Uttarakhand Tour and Travel package that suits you, and we’ll take care of the rest."
          />
          <FeatureCard
            title="Best In class"
            description="We work with only the most reliable, top-rated, and the most experienced service partners to deliver you the best-in-class experience."
          />
          <FeatureCard
            title="Easy Access"
            description="As we start our Uttarakhand Tour Packages from Delhi, Dehradun, Haridwar, Rishikesh, Kathgodam, Pantnagar, and Ramnagar. So, just tell us where you are landing and we’ll pick you up."
          />
          <FeatureCard
            title="Customer First"
            description="We provide a single point of contact and 24-hour customer support with all Uttarakhand tour packages. We are always by your side."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
