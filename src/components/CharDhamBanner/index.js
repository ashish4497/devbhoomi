import React from "react";

const PackageItem = ({
  href,
  imgSrc,
  alt,
  title,
  duration,
  salePrice,
  actualPrice,
}) => {
  return (
    <div className="package-item col-3">
      <div className="package-card">
        <div className="package-image">
          <a href={href}>
            <img className="w-100" src={imgSrc} alt={alt} loading="lazy" />
            <h4 className="text-center bold-heading font-white">{title}</h4>
            <p className="sec-heading-paragraph text-center font-yellow">
              {duration}
            </p>
          </a>
          <div className="badge-container">
            <div className="circular-badge">
              <span className="sale-price">₹{salePrice}</span>
              <span className="actual-price">₹{actualPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharDhamBanner = () => {
  return (
    <section className="banner-char-dham">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex flex-column align-center banner-content">
            <h1 className="regular-text hero-title text-center banner-content-h2">
              Char Dham Yatra: An Intro To The Ancient Himalayan Gods
            </h1>
            <h2 className="bold-heading font-yellow banner-content-h1 text-center">
              Sacred Retreats to Scenic Vistas, Char Dham Yatra Packages For All
            </h2>
            <p className="banner-content-p text-center">
              The Char Dham Yatra is a pilgrimage tour to the four sacred places
              located in the foothills of the great Himalayas of the Indian
              state Uttarakhand. The main goal of this sacred journey is to
              cover four holy destinations known as Yamunotri, Gangotri,
              Kedarnath, and Badrinath. These four destinations are located
              above the clouds in the Garhwal region of the Uttarakhand state of
              India. Gangotri and Badrinath are easily accessible by road, but
              Yamunotri and Kedarnath are not completely accessible by road. For
              Kedarnath, you will need to trek for about 18 km/side whereas for
              Yamunotri you will need to trek for about for 7 km/side. Shared
              Chopper seats are available for Kedarnath for easy access but
              Yamunotri will have only have Doly/Pony/Pitthu options to bypass
              the trek. Kedarnath trekkers also find these Doly/Pony/Pitthu
              options when they start their trek at Gaurikund.
            </p>
            <h4 className="font-yellow text-center mt-20">
              <i>
                “Completing these four ancient temples in one journey is
                referred to as Char Dham Yatra. Keep scrolling to learn more.”
              </i>
            </h4>
          </div>
          <div className="row w-100">
            <div className="col-12">
              <div className="packages-wrapper d-flex _buttons_wrapper">
                {/* Item 9 */}
                <PackageItem
                  href="https://devbhumitourism.com/tours/char-dham-yatra-from-dehradun-in-ten-days/"
                  imgSrc="../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-dehradun.jpg"
                  alt="char dham yatra"
                  title="Traditional Char Dham Yatra"
                  duration="09 Nights/10 Days ex Dehradun"
                  salePrice="28000"
                  actualPrice="30400"
                />
                {/* Item 4 */}
                <PackageItem
                  href="https://devbhumitourism.com/tours/char-dham-yatra-from-delhi-in-twelve-days/"
                  imgSrc="assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-from-delhi.jpg"
                  alt="char dham yatra packages"
                  title="Traditional Char Dham Yatra"
                  duration="11 Nights/12 Days ex New Delhi"
                  salePrice="33750"
                  actualPrice="37500"
                />
                {/* Item 1 */}
                <PackageItem
                  href="https://devbhumitourism.com/tours/char-dham-yatra-ex-dehradun-in-eleven-days/"
                  imgSrc="assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-dehradun-in-eleven-days.jpg"
                  alt="char dham"
                  title="Char Dham Yatra With Haridwar"
                  duration="10 Nights/11 Days ex Dehradun"
                  salePrice="30780"
                  actualPrice="34200"
                />
                {/* Item 5 */}
                <PackageItem
                  href="https://devbhumitourism.com/tours/char-dham-yatra-ex-delhi-in-thirteen-days/"
                  imgSrc="assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-delhi-in-thirteen-days.jpg"
                  alt="uttarakhand tourism"
                  title="Char Dham Yatra With Tungnath"
                  duration="12 Nights/13 Days ex New Delhi"
                  salePrice="36720"
                  actualPrice="40800"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-50"></div>
      </div>
    </section>
  );
};

export default CharDhamBanner;
