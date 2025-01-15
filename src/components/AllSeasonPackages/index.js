import React from "react";
import "./style.css";
import tourOne from "../../assets/media/uttarakhand-tours/all-season/explore-garhwal-tour.jpg";
import tourTwo from "../../assets/media/uttarakhand-tours/all-season/mesmerising-uttarakhand-tour.jpg";
import tourThree from "../../assets/media/uttarakhand-tours/all-season/thrilling-uttarakhand-tour.jpg";
import tourFour from "../../assets/media/uttarakhand-tours/all-season/explore-kumaon-tour.jpg";
import tourFive from "../../assets/media/uttarakhand-tours/all-season/delightful-uttarakhand-tour.jpg";
import tourSix from "../../assets/media/uttarakhand-tours/all-season/mussoorie-rishikesh-nainital-corbett-tour.jpg";
import tourSeven from "../../assets/media/uttarakhand-tours/all-season/haridwar-mussoorie-rishikesh-nainital-kausani-corbett-tour.jpg";
import tourEignt from "../../assets/media/uttarakhand-tours/all-season/rishikesh-auli-kausani-corbett-tour.jpg";
import tourNine from "../../assets/media/uttarakhand-tours/all-season/chopta-auli-tour-ex-ded.jpg";
import tourTen from "../../assets/media/uttarakhand-tours/all-season/mussoorie-chopta-kausani-corbett-tour.jpg";
import tourElvn from "../../assets/media/uttarakhand-tours/all-season/nainital-almora-kausani-corbett-ex-kathgodam.jpg";
import tourTlv from "../../assets/media/uttarakhand-tours/all-season/complete-uttarakhand-tour.jpg";

const UttarakhandTourPackages = () => {
  return (
    <section id="sec-3" className="section-3">
      <div className="container">
        <div className="row w-100 section-2-wrapper">
          <div className="col-12">
            <h4 className="regular-text text-center sup-heading">
              From Green Valleys To Snowy Peaks: Book Unforgettable Uttarakhand
              Travel Experiences At Devbhumi Tourism
            </h4>
            <h2 className="bold-heading text-center section-heading">
              Tailor-Made All Season Uttarakhand Tour Packages For You
            </h2>
            <p className="sec-heading-paragraph">
              One Uttarakhand tour is enough to showcase the magic of the hills.
              But it is certainly not enough to capture the sheer awesomeness
              that is this pristine beauty. That is why we have carefully
              designed a variety of Uttarakhand tours that will take you on epic
              journeys and create fun memories that will last you a lifetime.
              Interestingly, Uttarakhand is divided into two regions, including
              Kumaon and Garhwal. Our Uttarakhand Tour Packages include both
              these regions which attract throngs of tourists from all over the
              world. After all, who wouldn’t want to enjoy sightseeing,
              adventure, and wildlife all rolled into one trip? You, too, can
              experience this! Check out the below All Season Uttarakhand Tour
              Packages starting from Delhi, Dehradun, and so on and leave the
              rest to us.
            </p>
          </div>
        </div>

        {/* All-Season Tours Start */}
        <div className="row w-100">
          <div className="col-12">
            <div className="space-20"></div>
            <div className="packages-wrapper d-flex flex-wrap">
              <div className="row w-100">
                <div className="col-12">
                  <div className="space-20"></div>
                  <div className="packages-wrapper d-flex flex-wrap">
                    {/* item 1 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/explore-garhwal-tour/">
                            <img
                              className="w-100"
                              src={tourOne}
                              alt="uttarakhand tour"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Explore Garhwal Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              08 Nights/09 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Haridwar, Mussoorie, Dhanolti, Tehri,
                              Ukhimath, Chopta, Gopeswhar, Joshimath, Auli,
                              Rudraprayag, Devprayag, and Rishikesh.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 1 :END */}

                    {/* item 2 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/mesmerising-uttarakhand-tour/">
                            <img
                              className="w-100"
                              src={tourTwo}
                              alt="uttarakhand tour package"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Mesmerising Uttarakhand Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              09 Nights/10 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Mussoorie, Dhanolti, Tehri, Ukhimath,
                              Chopta, Gopeshwar, Joshimath, Auli, Kausani,
                              Ranikhet, Nainital, and Corbett.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 2 :END */}

                    {/* item 3 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/thrilling-uttarakhand-tour/">
                            <img
                              className="w-100"
                              src={tourThree}
                              alt="uttarakhand tour packages"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Thrilling Uttarakhand Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              07 Nights/08 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Mussoorie, Rishikesh, Haridwar, Nainital,
                              Bhimtal, Sattal, Bhowali, Almora, Kausani,
                              Ranikhet, and Jim Corbett National Park.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 3 :END */}

                    {/* item 4 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/explore-kumaon-tour/">
                            <img
                              className="w-100"
                              src={tourFour}
                              alt="uttarakhand tours"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Explore Kumaon Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              07 Nights/08 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Nainital, Bhimtal, Sattal, Bhowali,
                              Mukteshwar, Almora, Jageshwar, Binsar, Kausani,
                              Ranikhet, and Jim Corbett National Park.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 4 :END */}

                    {/* item 5 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/delightful-uttarakhand-tour/">
                            <img
                              className="w-100"
                              src={tourFive}
                              alt="uttarakhand tour itinerary"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Delightful Uttarakhand Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              12 Nights/13 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Haridwar, Mussoorie, Dhanolti, Tehri,
                              Ukhimath, Chopta, Gopeshwar, Auli, Joshimath,
                              Kausani, Ranikhet, Bhowali, Nainital, and Corbett.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 5 :END */}

                    {/* item 6 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/mussoorie-rishikesh-nainital-corbett-tour/">
                            <img
                              className="w-100"
                              src={tourSix}
                              alt="uttarakhand tour itineraries"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Mussoorie Rishikesh Nainital Corbett Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              06 Nights/07 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Mussoorie, Rishikesh, Haridwar, Nainital,
                              Bhimtal, Sattal, Bhowali, and Corbett National
                              Park.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 6 :END */}

                    {/* item 7 :START */}
                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/haridwar-mussoorie-rishikesh-nainital-kausani-corbett-tour/">
                            <img
                              className="w-100"
                              src={tourSeven}
                              alt="uttarakhand tour"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Haridwar Mussoorie Rishikesh Nainital Kausani
                              Corbett Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              08 Nights/09 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Discover Haridwar, Mussoorie, Rishikesh, Nainital,
                              Almora, Kausani, Ranikhet, and Corbett.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 7 :END */}

                    {/* item 8 :START */}

                    <div className="package-item col-3">
                      <div className="package-card">
                        <div className="package-image">
                          <a href="https://devbhumitourism.com/tours/haridwar-mussoorie-rishikesh-nainital-kausani-corbett-tour/">
                            <img
                              className="w-100"
                              src={tourEignt}
                              alt="uttarakhand tourism"
                              loading="lazy"
                            />
                            <h4 className="text-center font-white">
                              Rishikesh Auli Kausani Corbett Tour
                            </h4>
                            <h6 className="package-duration thin-text">
                              07 Nights/08 Days - Ex New Delhi
                            </h6>
                            <p className="package-info semi-bold-text">
                              Explore Rishikesh, Haridwar, Auli, Kausani,
                              Corbett National Park, and Nainital.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* item 8 :END */}
                    {/* <!-- item 8 :END --> */}
                    {/* <!-- item 7 :START --> */}
                    <div class="package-item col-3">
                      <div class="package-card">
                        <div class="package-image">
                          <a href="https://devbhumitourism.com/tours/chopta-auli-tour-ex-dehradun/">
                            <img
                              class="w-100"
                              src={tourNine}
                              alt="uttarakhand tourism package"
                              loading="lazy"
                            />
                            <h4 class="text-center font-white">
                              Chopta Auli Tour
                            </h4>
                            <h6 class="package-duration thin-text">
                              04 Nights/05 Days - Ex Dehradun
                            </h6>
                            <p class="package-info semi-bold-text">
                              Discover magnificent Haridwar, Rishikesh,
                              Devprayag, Ukhimath, Chopta, Gopeshwar, Joshimath,
                              Auli, Rudraprayg, and Srinagar of Garhwal.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 7 :END --> */}

                    {/* <!-- item 6 :START --> */}
                    <div class="package-item col-3">
                      <div class="package-card">
                        <div class="package-image">
                          <a href="https://devbhumitourism.com/tours/mussoorie-rishikesh-nainital-corbett-tour/">
                            {" "}
                            <img
                              class="w-100"
                              src={tourTen}
                              alt="uttarakhand tourism packages"
                              loading="lazy"
                            />
                            <h4 class="text-center font-white">
                              Mussoorie Chopta Kausani Corbett Tour
                            </h4>
                            <h6 class="package-duration thin-text">
                              06 Nights/07 Days - Ex New Delhi
                            </h6>
                            <p class="package-info semi-bold-text">
                              Discover Mussoorie, Dhanolti, Tehri, Rudraprayag,
                              Chopta, Gopeshwar, Kausani, Ranikhet and Corbett.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 6 :END --> */}

                    {/* <!-- item 8 :START --> */}
                    <div class="package-item col-3">
                      <div class="package-card">
                        <div class="package-image">
                          <a href="https://devbhumitourism.com/tours/nainital-almora-kausani-corbett-tour-ex-kathgodam/">
                            {" "}
                            <img
                              class="w-100"
                              src={tourElvn}
                              alt="uttarakhand travel agents"
                              loading="lazy"
                            />
                            <h4 class="text-center font-white">
                              Nainital Almora Kausani Corbett Tour
                            </h4>
                            <h6 class="package-duration thin-text">
                              05 Nights/06 Days - Ex Kathgodam
                            </h6>
                            <p class="package-info semi-bold-text">
                              Discover Nainital, Bhimtal, Sattal, Bhowali,
                              Almora, Kausani, Ranikhet and Corbett National
                              Park.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 8 :END - */}
                    {/* <!-- item 9 :START --> */}
                    <div class="package-item col-3">
                      <div class="package-card">
                        <div class="package-image">
                          <a href="https://devbhumitourism.com/tours/complete-uttarakhand-tour/">
                            <img
                              class="w-100"
                              src={tourTlv}
                              alt="uttarakhand travel packages"
                              loading="lazy"
                            />
                            <h4 class="text-center font-white">
                              Complete Uttarakhand Tour
                            </h4>
                            <h6 class="package-duration thin-text">
                              19 Nights/20 Days - Ex New Delhi
                            </h6>
                            <p class="package-info semi-bold-text">
                              Discover Haridwar, Mussoorie, Dhanolti, Tehri,
                              Ukhimath, Chopta, Gopeshwar, Auli, Joshimath,
                              Kausani, Chaukori, Munsiyari, Jageshwar, Bhowali,
                              Nainital, and Corbett.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 5 :END --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* All-Season Tours End */}

        <div className="row">
          <div className="space-10"></div>
          <p className="sec-heading-paragraph hide-mobile">
            Dive in the holistic experience of Ayurvedic spas and yoga retreats
            in the lap of the divine Himalayas, rejuvenating your mind, body,
            and soul. With our expertly crafted Uttarakhand itineraries, you can
            customize your Uttarakhand getaway, ensuring a seamless blend of
            exploration and relaxation. Let the magic of Uttarakhand unfold
            before you, leaving you with cherished memories of a journey into
            nature’s embrace. Refine your search for a Uttarakhand tour with the
            below tags.
          </p>
          <div className="space-20"></div>

          <div className="col-12 d-flex justify-center _buttons_wrapper">
            <a
              href="https://devbhumitourism.com/uttarakhand-tour-packages-from-delhi/"
              className="packages-btn-1 hover-dark decoration-none semi-bold-text mt-10"
            >
              Uttarakhand Tour Packages From Delhi
            </a>
            <a
              href="https://devbhumitourism.com/uttarakhand-tour-packages-from-dehradun/"
              className="packages-btn-1 hover-dark decoration-none semi-bold-text mt-10"
            >
              Uttarakhand Tour Packages From Dehradun
            </a>
            <a
              href="https://devbhumitourism.com/uttarakhand-tour-packages-from-haridwar/"
              className="packages-btn-1 hover-dark decoration-none semi-bold-text mt-10"
            >
              Uttarakhand Tour Packages From Haridwar
            </a>
            <a
              href="https://devbhumitourism.com/uttarakhand-tour-packages-from-kathgodam/"
              className="packages-btn-1 hover-dark decoration-none semi-bold-text mt-10"
            >
              Uttarakhand Tour Packages From Kathgodam
            </a>
          </div>
          <div className="row w-100">
            <div className="col-12 packages-btn-wrapper d-flex justify-center">
              <a
                href="https://devbhumitourism.com/uttarakhand-tour-packages/"
                className="team-btn decoration-none bold-text"
              >
                All Uttarakhand Tour Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UttarakhandTourPackages;
