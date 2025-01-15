import React from "react";
import Logo from "../../assets/media/logo-head.webp";
import Menu from "../../navigation/NavBar";
import MobileMenu from "../../navigation/MobileMenu";
import "./style.css";

const Header = () => {
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
            <Menu />
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
      <MobileMenu />
    </header>
  );
};

export default Header;
