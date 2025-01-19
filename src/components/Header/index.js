import React, { useState } from "react";
import Logo from "../../assets/media/logo-head.webp";
import Menu from "../../navigation/NavBar";
import MobileMenu from "../../navigation/MobileMenu";
import "./style.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isMenuOpen ? "show" : ""}>
      <div className="container d-flex justify-between align-center">
        {/* Logo Section */}
        <div className="flex-20">
          <a className="logo" href="/">
            <img src={Logo} alt="Uttarakhand Tour Packages" loading="lazy" />
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="flex-60 d-flex justify-center menu-container">
          <nav className="desktop-menu">
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
        <div
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-wrapper">
          <MobileMenu toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
