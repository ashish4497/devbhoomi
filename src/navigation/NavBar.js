import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu d-flex semi-bold-text">
      {[
        { name: "Home", link: "/" },
        { name: "Uttarakhand Tour", link: "/uttarakhand-tour" },
        { name: "Char Dham Yatra", link: "/char-dham-yatra" },
        { name: "Discover", link: "/discover" },
        { name: "Destinations", link: "/destinations" },
        { name: "Blogs", link: "/blogs" },
        { name: "About Us", link: "/about-us" },
        { name: "Contact Us", link: "/contact-us" },
      ].map((menu, index) => (
        <li key={index}>
          <h2 style={{ textTransform: "uppercase", fontSize: "12px" }}>
            <Link
              to={menu.link}
              className={`menu-item ${index === 0 ? "active" : ""}`}
            >
              {menu.name}
            </Link>
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
