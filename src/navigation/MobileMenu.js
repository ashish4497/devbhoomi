import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="close-btn">&times;</div>
      <ul className="menu semi-bold-text">
        {[
          { name: "Home", link: "/", icon: "fa-home" },
          {
            name: "Uttarakhand Tour",
            link: "/uttarakhand-tour",
            icon: "fa-gift",
          },
          {
            name: "Char Dham Yatra",
            link: "/char-dham-yatra",
            icon: "fa-bell",
          },
          { name: "Discover", link: "/discover", icon: "fa-globe" },
          {
            name: "Destinations",
            link: "/destinations",
            icon: "fa-map-marker",
          },
          { name: "Blogs", link: "/blogs", icon: "fa-book" },
          { name: "About Us", link: "/about-us", icon: "fa-users" },
          { name: "Contact Us", link: "/contact-us", icon: "fa-phone-square" },
        ].map((menu, index) => (
          <li key={index}>
            <h2 style={{ textTransform: "uppercase" }}>
              <Link to={menu.link} className="menu-item">
                <i className={`fa ${menu.icon}`} aria-hidden="true"></i>{" "}
                {menu.name}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
