import React from "react";
import "./style.css";
import kumaonTourImage from "../../assets/media/uttarakhand-tours/tour-categories/private-leisure-tours-discover-garhwal-min.jpg";
import gharwaltourImg from "../../assets/media/uttarakhand-tours/tour-categories/private-leisure-tours-discover-garhwal-min.jpg";
import charDhamImg from "../../assets/media/uttarakhand-tours/tour-categories/char-dham-yatra-by-helicopter-min.jpg";
import charDhamYatra from "../../assets/media/uttarakhand-tours/tour-categories/char-dham-yatra-by-road-min.jpg";
import doDhamYatraImg from "../../assets/media/uttarakhand-tours/tour-categories/do-dham-yatra-by-road-min.jpg";
import ekDhamYatraImg from "../../assets/media/uttarakhand-tours/tour-categories/ek-dham-yatra-by-road-min.jpg";

export default function CategoriesSection() {
  return (
    <section id="sec-2" className="section-2">
      <div className="container">
        {/* Section Header */}
        <div className="row w-100 section-2-wrapper">
          <div className="col-12">
            <h4 className="regular-text text-center sup-heading">
              Fresh And Hand Crafted Uttarakhand Tour Itineraries, Just For You!
            </h4>
            <h2 className="bold-heading text-center section-heading">
              Top Trending Uttarakhand Tour Categories For 2025
            </h2>
            <p className="sec-heading-paragraph">
              Indulge in our dramatic Uttarakhand Tour Packages and get
              introduced to the holistic experience of Ayurvedic spas and Yoga
              retreats in the lap of the northern Himalayas. Here we showcase
              our trending Uttarakhand Tour Packages loved by millions of
              travellers. Get pre-planned itineraries on an arial Himalayan Char
              Dham Yatra By Helicopter, Char Dham Yatra Ground Tours, Kedarnath
              Heli Services, Dhikala Forest Lodges, and rejuvenating Uttarakhand
              Tour Packages for Kumaon and Garhwal.
            </p>
          </div>
        </div>

        {/* Trending Tour Categories */}
        <div className="row w-100">
          <div className="col-12">
            <div className="space-20"></div>
            <div className="packages-wrapper d-flex flex-wrap _buttons_wrapper">
              {/* Package Items */}
              {[
                {
                  link: "https://devbhumitourism.com/kumaon-tour-packages/",
                  imgSrc: kumaonTourImage,
                  alt: "uttarakhand tour packages",
                  title: "Kumaon Tour Packages",
                },
                {
                  link: "https://devbhumitourism.com/garhwal-tour-packages/",
                  imgSrc: gharwaltourImg,
                  alt: "uttarakhand tourism packages",
                  title: "Garhwal Tour Packages",
                },
                {
                  link: "https://devbhumitourism.com/char-dham-yatra-by-helicopter/",
                  imgSrc: charDhamImg,
                  alt: "uttarakhand tour",
                  title: "Char Dham Yatra By Heli",
                },
                {
                  link: "https://devbhumitourism.com/char-dham-yatra-packages/",
                  imgSrc: charDhamYatra,
                  alt: "char dham yatra packages",
                  title: "Char Dham Yatra By Road",
                },
                {
                  link: "https://devbhumitourism.com/do-dham-yatra-packages/",
                  imgSrc: doDhamYatraImg,

                  alt: "do dham yatra packages",
                  title: "Do Dham Yatra By Road",
                },
                {
                  link: "https://devbhumitourism.com/ek-dham-yatra-packages/",
                  imgSrc: ekDhamYatraImg,
                  alt: "ek dham yatra packages",
                  title: "Ek Dham Yatra By Road",
                },
              ].map((item, index) => (
                <div key={index} className="package-item col-4">
                  <div className="package-card">
                    <div className="package-image">
                      <a href={item.link}>
                        <img
                          className="w-100"
                          src={item.imgSrc}
                          alt={item.alt}
                          loading="lazy"
                        />
                        <h4 className="package-title text-center bold-heading font-black">
                          {item.title}
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="row w-100">
          <div className="col-12 packages-btn-wrapper d-flex justify-center">
            <a
              href="https://devbhumitourism.com/uttarakhand-tour-packages/"
              className="packages-btn decoration-none bold-text"
            >
              Uttarakhand Tour Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
