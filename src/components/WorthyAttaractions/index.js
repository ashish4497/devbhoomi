import React from "react";

const WorthyAttaractions = () => {
  const attractions = [
    {
      src: "assets/tour-img/attractions/lakha-mandal3.webp",
      alt: "lakha mandal barkot",
      title: "Lakha Mandal",
    },
    {
      src: "assets/tour-img/attractions/barkot.webp",
      alt: "barkot uttarkashi",
      title: "Barkot",
    },
    {
      src: "assets/tour-img/attractions/yamunotri5.webp",
      alt: "yamunotri dham uttarakhand",
      title: "Yamunotri Dham",
    },
    {
      src: "assets/tour-img/attractions/kashi-vishwanath-uttarkashi1.webp",
      alt: "kashi vishwanath temple uttarkashi",
      title: "Kashi Vishwanath Temple",
    },
    {
      src: "assets/tour-img/attractions/uttarkashi.webp",
      alt: "uttarkashi city",
      title: "Uttarkashi",
    },
    {
      src: "assets/tour-img/attractions/harshil6.webp",
      alt: "harshil hill station",
      title: "Harshil",
    },
    {
      src: "assets/tour-img/attractions/gangotri1.webp",
      alt: "gangotri dham",
      title: "Gangotri Dham",
    },
    {
      src: "assets/tour-img/attractions/tehri5.webp",
      alt: "tehri uttarakhand",
      title: "Tehri",
    },
    {
      src: "assets/tour-img/attractions/rudraprayag.webp",
      alt: "rudraprayag uttarakhand",
      title: "Rudraprayag",
    },
    {
      src: "assets/tour-img/attractions/guptkashi.webp",
      alt: "guptkashi uttarakhand",
      title: "Guptkashi",
    },
    {
      src: "assets/tour-img/attractions/gaurikund.webp",
      alt: "gaurikund kedarnath",
      title: "Gaurikund",
    },
    {
      src: "assets/tour-img/attractions/kedarnath9.webp",
      alt: "kedarnath uttarakhand",
      title: "Kedarnath",
    },
    {
      src: "assets/tour-img/attractions/omkareshwar1.webp",
      alt: "Omkareshwar temple ukhimath",
      title: "Omkareshwar Temple Ukhimath",
    },
    {
      src: "assets/tour-img/attractions/chopta1.webp",
      alt: "chopta uttarakhand",
      title: "Chopta",
    },
    {
      src: "assets/tour-img/attractions/gopinath.webp",
      alt: "gopinath temple uttarakhand",
      title: "Gopinath Temple Gopeshwar",
    },
    {
      src: "assets/tour-img/attractions/narsingh-temple.webp",
      alt: "Narsingh temple joshimath",
      title: "Narsingh Temple Joshimath",
    },
    {
      src: "assets/tour-img/attractions/badrinath7.webp",
      alt: "bardrinath temple",
      title: "Badrinath",
    },
    {
      src: "assets/tour-img/attractions/mana-village.webp",
      alt: "mana village",
      title: "Mana",
    },
    {
      src: "assets/tour-img/attractions/joshimath.webp",
      alt: "joshimath city",
      title: "Joshimath",
    },
    {
      src: "assets/tour-img/attractions/dhari-devi1.webp",
      alt: "dhari devi temple",
      title: "Dhari Devi Temple",
    },
    {
      src: "assets/tour-img/attractions/devprayag4.webp",
      alt: "devprayag",
      title: "Devprayag",
    },
    {
      src: "assets/tour-img/attractions/rishikesh4.webp",
      alt: "rishikesh",
      title: "Rishikesh",
    },
    {
      src: "assets/tour-img/attractions/more-min.webp",
      alt: "many more local attractions",
      title: "+ Many More Local Attractions",
    },
  ];

  return (
    <section className="tour-content" id="tour-content">
      <div className="container">
        <div className="row">
          <div className="col-8 p-20 mt-20">
            <h3 className="tour-heading font-black semi-bold-heading">
              3- Worthy Attractions, How To Reach? and Essential Packing Tips
              For A Pleasant Char Dham Yatra
            </h3>

            <h4
              className="font-blue"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              3.1- What Are The Famous Attractions On A Char Dham Yatra Tour?
            </h4>
            <p style={{ fontSize: "14px" }}>
              Our Char Dham Packages offer more than just a well-written
              itinerary. Our Char Dham tours give you countless opportunities to
              unfold the secrets of the majestic Himalayas and to sober in
              divine temples. Here are the top tourist attractions we won't let
              you miss during your Char Dham expedition. All the below Char Dham
              attractions are being covered in our all Char Dham Yatra packages
              so just grab a Char Dham package, leave all the worries to us, and
              witness them in real.
            </p>

            <div className="owl-carousel attraction-covered mt-20">
              {attractions.map((item, index) => (
                <div key={index} className="banner-slider-item">
                  <img src={item.src} alt={item.alt} />
                  <a href="#">
                    <h4 style={{ fontSize: "12px" }}>{item.title}</h4>
                  </a>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <h4
              className="font-blue"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              3.2- How And Where To Reach For Char Dham Yatra Tour?
            </h4>
            <p style={{ fontSize: "14px" }}>
              As per the temple visiting sequence in Char Dham Yatra, people do
              Yamunotri, Gangotri, Kedarnath, and then Badrianth in the last.
              The most nearest railway stations are Rishikesh, Haridwar, and
              Dehradun and the only airport is Jolly Grant (DED) airport. You
              can take a flight to Dehradun or a train to
              Haridwar/Rishikesh/Dehradun to quickstart your Char Dham Yatra
              tour. Besides this, you can also plan to reach Delhi and we make
              arrangements from there too but requires two more nights to be
              added to the tour. Here are the best Char Dham routes which
              provide magnificent sights along the way, you can follow these
              routes for a complete Char Dham Yatra or you can also plan them
              individually or in a pair, which are also referred to as Ek Dham
              Yatra Packages and Do Dham Yatra Packages.
            </p>
            <br />
            <p style={{ fontSize: "14px" }}>
              <b>i) Char Dham Route From Dehradun:</b> Dehradun >> Mussoorie
              <sup>(Small Cabs Only)</sup>/Vikas Nagar >> Lakha Mandal >> Barkot
              >> Janki Chatti<sup>(07 km trek)</sup> >> Yamunotri Dham
              <sup>(07 km trek)</sup> >> Janki Chatti >> Barkot >> Uttarkashi >>
              Harshil >> Gangotri Dham >> Harshil >> Uttarkashi >> Tehri >>
              Srinagar >> Dhari Devi >> Rudraprayag >> Agastmuni >> Guptkashi >>
              Phata >> Sersi >> Rampur >> Sitapur >> Sonprayag >> Gaurikund
              <sup>(21 km trek)</sup> >> Kedarnath Dham<sup>(21 km trek)</sup>{" "}
              >> Gaurikund >> Sonprayag >> Guptkashi >> Ukhimath >> Chopta >>
              Gopeshwar >> Joshimath >> Badrinath >> Joshimath >> Karnprayag >>
              Rudraprayag >> Devprayag >> Rishikesh >> Dehradun
            </p>
            <br />
            <p style={{ fontSize: "14px" }}>
              <b>ii) Char Dham Route From Delhi:</b> Delhi >> Haridwar/Rishikesh
              >> Mussoorie<sup>(Small Cabs Only)</sup>/Vikas Nagar >> Lakha
              Mandal >> Barkot >> Janki Chatti<sup>(07 km trek)</sup> >>
              Yamunotri Dham<sup>(07 km trek)</sup> >> Janki Chatti >> Barkot >>
              Uttarkashi >> Harshil >> Gangotri Dham >> Harshil >> Uttarkashi >>
              Tehri >> Srinagar >> Dhari Devi >> Rudraprayag >> Agastmuni >>
              Guptkashi >> Phata >> Sersi >> Rampur >> Sitapur >> Sonprayag >>
              Gaurikund<sup>(21 km trek)</sup> >> Kedarnath Dham
              <sup>(21 km trek)</sup> >> Gaurikund >> Sonprayag >> Guptkashi >>
              Ukhimath >> Chopta >> Gopeshwar >> Joshimath >> Badrinath >>
              Joshimath >> Karnprayag >> Rudraprayag >> Devprayag >>
              Rishikesh/Haridwar >> Delhi
            </p>

            <div className="divider"></div>

            <h4
              className="font-blue"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              3.3- What Are Essential Packings For Char Dham Yatra?
            </h4>
            <p style={{ fontSize: "14px" }}>
              Packing for the Char Dham Yatra requires careful planning due to
              the challenging weather and terrain. Essentials include warm
              clothing such as thermals, sweaters, and jackets, as temperatures
              can drop significantly, especially at night. Layering is key to
              adjusting to changing weather. Comfortable and sturdy trekking
              shoes are crucial for the rocky, steep paths, along with extra
              socks to keep feet warm and dry.
            </p>
            <br />
            <p style={{ fontSize: "14px" }}>
              Rain gear, including waterproof jackets and umbrellas, is
              essential, as unexpected rain is common. Basic medications, first
              aid, and any personal medicines are a must, as pharmacies are
              scarce. Since high-altitude travel can cause health issues, pack
              items like energy bars, hydration salts, and a portable oxygen
              canister. Other essentials include a durable backpack, water
              bottle, flashlight, personal hygiene items, sunscreen, and
              sunglasses to protect against the sun’s intensity. Keeping a
              lightweight power bank is also wise, as charging options can be
              limited. Lastly, carry personal ID, cash, and copies of necessary
              travel permits.
            </p>
            <br />
            <b>
              You may not need to carry all of the above, check out this
              detailed{" "}
              <a
                href="https://devbhumitourism.com/char-dham-yatra-packing-guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Essential Char Dham Yatra Packing Guide
              </a>{" "}
              according to the seasons.
            </b>
          </div>

          <div className="col-4 single-blog-sidebar mt-20">
            <div className="blog-sidebar-wrapper _sticky">
              <div className="blog-sidebar-items">
                <h2
                  className="tour-heading font-black semi-bold-heading mt-20"
                  style={{ fontSize: "20px" }}
                >
                  Most Useful Char Dham Blogs
                </h2>
                <h3>By: Lalit Mohan</h3>
                <span className="small-text">Founder @Devbhumi Tourism</span>
                <div className="divider"></div>

                {/* Blog Entries */}
                {/* Similar structure can be repeated for each blog */}
                <div className="blog-sidebar-item d-flex justify-between align-start">
                  <div className="blog-sidebar-item-img-box">
                    <img
                      src="assets/blog-img/thumbs/2.jpg"
                      alt="char dham yatra registration process"
                      className="blog-sidebar-item-img"
                    />
                  </div>
                  <div className="blog-sidebar-item-content">
                    <a href="how-to-register-for-char-dham-yatra">
                      <h3 className="blog-sidebar-item-title">
                        Char Dham Yatra Registration Process
                      </h3>
                    </a>
                    <div className="blog-sidebar-item-date">
                      Published On: Mar 16, 2024
                    </div>
                  </div>
                </div>

                {/* Add more blogs in the same pattern */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorthyAttaractions;
