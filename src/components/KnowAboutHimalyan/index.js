import React, { useState } from "react";
import "./style.css";
import ImageZero from "../../assets/tour-img/attractions/yamunotri5.webp";
import ImageOne from "../../assets/tour-img/attractions/gangotri1.webp";
import ImageTow from "../../assets/tour-img/attractions/kedarnath9.webp";
import ImageThree from "../../assets/tour-img/attractions/badrinath7.webp";
import ViedoImage from "../../assets/media/profile.jpg";
const KnowAboutHimalyan = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  const videoContent = `
  <style>
    * { padding: 0; margin: 0; overflow: hidden; }
    html, body { height: 100%; }
    img, span { position: absolute; width: 100%; top: 0; bottom: 0; margin: auto; }
    span { height: 1.5em; text-align: center; font: 48px/1.5 sans-serif; color: white; text-shadow: 0 0 0.5em black; }
  </style>
  <a href="https://www.youtube.com/embed/aa9KXWzqd84?autoplay=1">
    <img src="${ViedoImage}" alt="Char Dham Yatra Guide">
    <span>▶</span>
  </a>
`;

  return (
    <section className="tour-content" id="tour-content">
      <div className="container">
        <div className="row">
          <div className="col-8 p-20 mt-20">
            <h2 className="tour-heading font-black bold-heading">
              All You Need To Know About The Himalayan Char Dham Yatra, We Wrote
              It All Here <i className="fa fa-pencil" aria-hidden="true"></i>
            </h2>
            <h3 className="font-blue">
              So, The First Thing First, What Is The "Char Dham Yatra"?
            </h3>
            <p style={{ fontSize: "14px" }}>
              The Char Dham Yatra refers to the pilgrimage to the four sacred
              shrines of{" "}
              <a href="https://devbhumitourism.com/uttarakhand-destinations/yamunotri/">
                Yamunotri
              </a>
              ,{" "}
              <a href="https://devbhumitourism.com/uttarakhand-destinations/gangotri/">
                Gangotri
              </a>
              ,{" "}
              <a href="https://devbhumitourism.com/uttarakhand-destinations/kedarnath/">
                Kedarnath
              </a>
              , and{" "}
              <a href="https://devbhumitourism.com/uttarakhand-destinations/badrinath/">
                Badrinath
              </a>{" "}
              in the Indian state of{" "}
              <a href="https://devbhumitourism.com/discover-uttarakhand/">
                Uttarakhand
              </a>
              . These shrines are highly revered by Hindus and are located in
              the Garhwal region of the Himalayas. The legends say that the Char
              Dham Yatra emerged after the battle of Mahabharata. After
              murdering their brothers, Pandavas felt guilty and in search of
              the divine they went to Shiva. Shiva used to reside in Kashi in
              Banaras those days. When Shiva heard them coming, he hid himself
              in a place known as Guptkashi. It is the same place just below
              Kedarnath in the Garhwal Himalayas of Uttarakhand. Then Pandavas
              pleased all the Gods and brought the Yamuna and Ganges to the
              earth to vanish their sins. Later they worshipped Shiva at
              Kedarnath and then they took the blessing of Lord Vishnu at
              Badrinath.
            </p>
            <button
              id="learnMoreBtn"
              className="bold-heading font-red decoration-none"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
            {showMoreInfo && (
              <div id="moreInfo">
                <p>
                  The place where they brought Yamuna to the earth is known as
                  Yamunotri and where they brought the Ganges to the earth is
                  referred as Gangotri. Since then it’s believed that completing
                  a pilgrimage circuit of all the above divine holy sites
                  Yamunotri, Gangotri, Kedarnath, and Badrinath in one journey
                  is referred to as the holy Himalayan Char Dham Yatra. The Char
                  Dham Yatra takes a minimum of 10 days from
                  Haridwar/Rishikesh/Dehradun and a minimum of 12 days from New
                  Delhi.
                </p>
                <br />
                <p>
                  The word Char Dham can be understood as Char stands for “Four”
                  and Dham stands for “A Holy Pilgrim Place” and altogether it
                  becomes Char Dham and Yatra is referred to as Journey. So
                  there are four holy hindu pilgrimage sites in the lower region
                  of the great Himalayas of the Uttarakhand state of India.
                </p>
                <br />
                <p>
                  The holy Char Dham Yatra begins in the foothills of mighty
                  Himalayan peaks that are naturally untouched. This sacred
                  journey touches straight to the heart of every pilgrim and
                  makes the soul pure and peaceful. Snow-clad mountains will be
                  a mirror to all your questions about your life and
                  imagination.
                </p>
                <br />
                <p>
                  This sacred journey can begin from
                  Haridwar/Rishikesh/Dehradun/Delhi and takes you to the four
                  holiest and ancient places of INDIA located in the top-notch
                  remote areas of Uttarakhand. These four places are publically
                  known as Yamunotri, Gangotri, Kedarnath, and Badrinath. These
                  four places are dedicated to the Hindu goddesses and lords,
                  the Yamunotri temple is dedicated to the goddess Yamuna, the
                  Gangotri temple is dedicated to the goddess Ganga, the
                  Kedarnath temple is dedicated to Lord Shiva, and the Badrinath
                  temple is dedicated to Lord Vishnu.
                </p>
                <br />
                <p>
                  The complete Char Dham Yatra tour takes a minimum of 10 days
                  to complete when you start from Dehradun. This tour duration
                  can be extended to make the tour more comfortable and
                  relaxing. Char Dham Yatra plan can also be customised from the
                  different places like Delhi, Haridwar or Rishikesh.
                </p>
              </div>
            )}
            <div className="divider"></div>
            <h2 className="tour-heading font-black semi-bold-heading">
              Learn How To Plan A Divine Char Dham Expedition Like A Pro{" "}
              <i className="fa fa-black-tie" aria-hidden="true"></i>
            </h2>
            <h3
              className="font-blue"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              1- Know About The Char Dham Yatra Opening/Closing Schedule For
              2025
            </h3>
            <p style={{ fontSize: "14px" }}>
              It's still a dream for so many people to feel the presence,
              fragrance, and calmness of Kedarnath Dham, which is the source of
              the universe. But the Char Dham Yatra means to cover a lot along
              with the divine Kedarnath Dham. The complete Char Dham Tour covers
              four main temples nestled in the foothills of the northern
              Himalayas of Uttarakhand. This pilgrimage is a soul-stirring
              journey which takes pilgrims through the sacred shrines of
              Yamunotri, Gangotri, Kedarnath, and Badrinath, each holding
              profound spiritual significance in Hinduism. <br />
              <br />
              <b>
                We have to say this but it makes sense, all the Char Dham Yatra
                temples are not accessible round the year. All the holy temples
                are located in the high altitude of northern Himalayas which
                make them closed for winters due to heavy snowfall.{" "}
                <font className="font-blue">
                  Here are the tentative opening and closing dates for all the
                  shrines for the year 2025.
                </font>
              </b>
            </p>
            <div className="route-map">
              <div className="place">
                <img src={ImageZero} alt="char dham yatra from dehradun" />
                <h4>Yamunotri Temple</h4>
                <p>
                  <b>Opening:</b> April 30, 2025
                  <br />
                  <b>Closing:</b> Nov 03, 2025
                </p>
              </div>
              <div className="place">
                <img
                  src={ImageOne}
                  alt="char dham yatra package from dehradun"
                />
                <h4>Gangotri Temple</h4>
                <p>
                  <b>Opening:</b> April 30, 2025
                  <br />
                  <b>Closing:</b> Nov 03, 2025
                </p>
              </div>
              <div className="place">
                <img src={ImageTow} alt="char dham yatra ex dehradun" />
                <h4>Kedarnath Temple</h4>
                <p>
                  <b>Opening:</b> May 02, 2025
                  <br />
                  <b>Closing:</b> Nov 08, 2025
                </p>
              </div>
              <div className="place">
                <img src={ImageThree} alt="char dham package from dehradun" />
                <h4>Badrinath Temple</h4>
                <p>
                  <b>Opening:</b> May 02, 2025
                  <br />
                  <b>Closing:</b> Nov 15, 2025
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-20 mt-50">
            <div className="new-tour-sidebar">
              <div className="sidebar-box _sticky">
                <div className="banner-slider-item">
                  <iframe
                    srcDoc={videoContent}
                    width="350"
                    height="620"
                    title="Char Dham Yatra Guide"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="divider"></div>
                <div className="_price">
                  Watch This 05 Min Char Dham Guide
                  <h4>By: Lalit Mohan</h4>
                  <span className="small-text">
                    Uttarakhand Destination Expert @Devbhumi Tourism
                  </span>
                  <div className="short-name">
                    <div>
                      <h3>05 Min Char Dham Yatra Guide</h3>
                    </div>
                    <p>
                      <i className="fa fa-youtube" aria-hidden="true"></i> By
                      Lalit Mohan: Local Travel Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowAboutHimalyan;
