import React from "react";
import "./style.css";
import Logo from "../../assets/media/logo-head.webp";

export default function Header() {
  return (
    <header>
      <div className="container d-flex justify-between align-center">
        {/* Logo Section */}
        <div className="flex-20">
          <a className="logo" href="https://devbhumitourism.com/">
            <img src={Logo} alt="Uttarakhand Tour Packages" loading="lazy" />
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="flex-60 d-flex justify-center menu-container">
          <nav>
            <ul className="menu d-flex semi-bold-text">
              {[
                { name: "Home", link: "https://devbhumitourism.com/" },
                {
                  name: "Uttarakhand Tour",
                  link: "https://devbhumitourism.com/uttarakhand-tour-packages/",
                },
                {
                  name: "Char Dham Yatra",
                  link: "https://devbhumitourism.com/char-dham-yatra/",
                },
                {
                  name: "Discover",
                  link: "https://devbhumitourism.com/discover-uttarakhand/",
                },
                {
                  name: "Destinations",
                  link: "https://devbhumitourism.com/uttarakhand-tourist-places/",
                },
                {
                  name: "Blogs",
                  link: "https://devbhumitourism.com/uttarakhand-travel-guide/",
                },
                {
                  name: "About Us",
                  link: "https://devbhumitourism.com/about-us/",
                },
                {
                  name: "Contact Us",
                  link: "https://devbhumitourism.com/contact-us/",
                },
              ].map((menu, index) => (
                <li key={index}>
                  <h2 style={{ textTransform: "uppercase", fontSize: "12px" }}>
                    <a
                      href={menu.link}
                      className={`menu-item ${index === 0 ? "active" : ""}`}
                    >
                      {menu.name}
                    </a>
                  </h2>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Get a Quote Button */}
        <div className="flex-20 justify-end">
          <a href="#inquiry" className="btn decoration-none">
            <i className="fa fa-file-text" aria-hidden="true"></i> Get A Quote
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="close-btn">&times;</div>
        <ul className="menu semi-bold-text">
          {[
            {
              name: "Home",
              link: "https://devbhumitourism.com/",
              icon: "fa-home",
            },
            {
              name: "Uttarakhand Tour",
              link: "https://devbhumitourism.com/uttarakhand-tour-packages/",
              icon: "fa-gift",
            },
            {
              name: "Char Dham Yatra",
              link: "https://devbhumitourism.com/char-dham-yatra/",
              icon: "fa-bell",
            },
            {
              name: "Discover",
              link: "https://devbhumitourism.com/discover-uttarakhand/",
              icon: "fa-globe",
            },
            {
              name: "Destinations",
              link: "https://devbhumitourism.com/uttarakhand-tourist-places/",
              icon: "fa-map-marker",
            },
            {
              name: "Blogs",
              link: "https://devbhumitourism.com/uttarakhand-travel-guide/",
              icon: "fa-book",
            },
            {
              name: "About Us",
              link: "https://devbhumitourism.com/about-us/",
              icon: "fa-users",
            },
            {
              name: "Contact Us",
              link: "https://devbhumitourism.com/contact-us/",
              icon: "fa-phone-square",
            },
          ].map((menu, index) => (
            <li key={index}>
              <h2 style={{ textTransform: "uppercase" }}>
                <a href={menu.link} className="menu-item">
                  <i className={`fa ${menu.icon}`} aria-hidden="true"></i>{" "}
                  {menu.name}
                </a>
              </h2>
            </li>
          ))}

          {/* Contact Information */}
          <div className="col-4 text-center hero-btn decoration-none bold-text">
            <a
              href="https://api.whatsapp.com/send/?phone=919012466887&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn decoration-none w-100"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i> 9012 466 887
            </a>
          </div>
          <div className="col-4 text-center hero-btn decoration-none bold-text">
            <a
              href="https://api.whatsapp.com/send/?phone=917252808808&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn decoration-none w-100"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i> 7252 808 808
            </a>
          </div>
          <div className="col-4 text-center hero-btn decoration-none bold-text">
            <a href="tel:+919012466887" className="btn decoration-none w-100">
              <i className="fa fa-mobile" aria-hidden="true"></i> 9012 466 887
            </a>
          </div>
          <div className="col-4 text-center hero-btn decoration-none bold-text">
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            info(@)devbhumitourism.com
          </div>
        </ul>
      </div>
    </header>
  );
}
