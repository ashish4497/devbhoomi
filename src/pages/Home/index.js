import React from "react";
import "./style.css";
import Logo from "../../assets/media/logo.png";
import CategoriesSection from "../../components/Categories";
import CallbackForm from "../../components/CallbackForm";
import UttarakhandTourPackages from "../../components/AllSeasonPackages";
import DestinationExpert from "../../components/DestinationExpert";
import WeekendGateways from "../../components/WeekendGateways";
import corbett from "../../assets/media/uttarakhand-tours/all-season/corbett-family-tour.jpg";
import nainital from "../../assets/media/uttarakhand-tours/all-season/nainital-tour.jpg";
import rishikesh from "../../assets/media/uttarakhand-tours/all-season/rishikesh-rafting-and-camping-tour.jpg";
import mussoorie from "../../assets/media/uttarakhand-tours/all-season/dehradun-rishikesh-mussoorie-tour.jpg";

import TourPacks from "../../components/TourPacks";
import CharDhamYatra from "../../components/SpiritualJourney";
import InquiryForm from "../../components/InquiryForm";
import AboutUttrakhand from "../../components/ AboutUttarakhandTour";
import UttarakhandBlogsSection from "../../components/TourArticles";
import TripAdvisorSection from "../../components/AdvisorTestimonials";
import WhyChooseUsSection from "../../components/ExploreAdventure";
import Footer from "../../components/Footer";
import tourOne from "../../assets/media/uttarakhand-tours/all-season/explore-garhwal-tour.jpg";
import tourTwo from "../../assets/media/uttarakhand-tours/all-season/mesmerising-uttarakhand-tour.jpg";
import tourThree from "../../assets/media/uttarakhand-tours/all-season/thrilling-uttarakhand-tour.jpg";
import tourFour from "../../assets/media/uttarakhand-tours/all-season/explore-kumaon-tour.jpg";
import tourFive from "../../assets/media/uttarakhand-tours/all-season/delightful-uttarakhand-tour.jpg";
import tourSix from "../../assets/media/uttarakhand-tours/all-season/mussoorie-rishikesh-nainital-corbett-tour.jpg";
import tourSeven from "../../assets/media/uttarakhand-tours/all-season/haridwar-mussoorie-rishikesh-nainital-kausani-corbett-tour.jpg";
import tourEight from "../../assets/media/uttarakhand-tours/all-season/rishikesh-auli-kausani-corbett-tour.jpg";
import tourNine from "../../assets/media/uttarakhand-tours/all-season/chopta-auli-tour-ex-ded.jpg";
import tourTen from "../../assets/media/uttarakhand-tours/all-season/mussoorie-chopta-kausani-corbett-tour.jpg";
import tourEleven from "../../assets/media/uttarakhand-tours/all-season/nainital-almora-kausani-corbett-ex-kathgodam.jpg";
import tourTwelve from "../../assets/media/uttarakhand-tours/all-season/complete-uttarakhand-tour.jpg";

const toursData = [
  {
    id: 1,
    title: "Explore Garhwal Tour",
    duration: "08 Nights/09 Days - Ex New Delhi",
    description:
      "Discover Haridwar, Mussoorie, Dhanolti, Tehri, Ukhimath, Chopta, Gopeshwar, Joshimath, Auli, Rudraprayag, Devprayag, and Rishikesh.",
    image: tourOne,
    link: "https://devbhumitourism.com/tours/explore-garhwal-tour/",
  },
  {
    id: 2,
    title: "Mesmerising Uttarakhand Tour",
    duration: "09 Nights/10 Days - Ex New Delhi",
    description:
      "Discover Mussoorie, Dhanolti, Tehri, Ukhimath, Chopta, Gopeshwar, Joshimath, Auli, Kausani, Ranikhet, Nainital, and Corbett.",
    image: tourTwo,
    link: "https://devbhumitourism.com/tours/mesmerising-uttarakhand-tour/",
  },
  {
    id: 3,
    title: "Thrilling Uttarakhand Tour",
    duration: "07 Nights/08 Days - Ex New Delhi",
    description:
      "Discover Mussoorie, Rishikesh, Haridwar, Nainital, Bhimtal, Sattal, Bhowali, Almora, Kausani, Ranikhet, and Jim Corbett National Park.",
    image: tourThree,
    link: "https://devbhumitourism.com/tours/thrilling-uttarakhand-tour/",
  },
  {
    id: 4,
    title: "Explore Kumaon Tour",
    duration: "07 Nights/08 Days - Ex New Delhi",
    description:
      "Discover Nainital, Bhimtal, Sattal, Bhowali, Mukteshwar, Almora, Jageshwar, Binsar, Kausani, Ranikhet, and Jim Corbett National Park.",
    image: tourFour,
    link: "https://devbhumitourism.com/tours/explore-kumaon-tour/",
  },
  {
    id: 5,
    title: "Delightful Uttarakhand Tour",
    duration: "12 Nights/13 Days - Ex New Delhi",
    description:
      "Discover Haridwar, Mussoorie, Dhanolti, Tehri, Ukhimath, Chopta, Gopeshwar, Auli, Joshimath, Kausani, Ranikhet, Bhowali, Nainital, and Corbett.",
    image: tourFive,
    link: "https://devbhumitourism.com/tours/delightful-uttarakhand-tour/",
  },
  {
    id: 6,
    title: "Mussoorie Rishikesh Nainital Corbett Tour",
    duration: "06 Nights/07 Days - Ex New Delhi",
    description:
      "Discover Mussoorie, Rishikesh, Haridwar, Nainital, Bhimtal, Sattal, Bhowali, and Corbett National Park.",
    image: tourSix,
    link: "https://devbhumitourism.com/tours/mussoorie-rishikesh-nainital-corbett-tour/",
  },
  {
    id: 7,
    title: "Haridwar Mussoorie Rishikesh Nainital Kausani Corbett Tour",
    duration: "08 Nights/09 Days - Ex New Delhi",
    description:
      "Discover Haridwar, Mussoorie, Rishikesh, Nainital, Almora, Kausani, Ranikhet, and Corbett.",
    image: tourSeven,
    link: "https://devbhumitourism.com/tours/haridwar-mussoorie-rishikesh-nainital-kausani-corbett-tour/",
  },
  {
    id: 8,
    title: "Rishikesh Auli Kausani Corbett Tour",
    duration: "07 Nights/08 Days - Ex New Delhi",
    description:
      "Explore Rishikesh, Haridwar, Auli, Kausani, Corbett National Park, and Nainital.",
    image: tourEight,
    link: "https://devbhumitourism.com/tours/rishikesh-auli-kausani-corbett-tour/",
  },
  {
    id: 9,
    title: "Chopta Auli Tour",
    duration: "04 Nights/05 Days - Ex Dehradun",
    description:
      "Discover magnificent Haridwar, Rishikesh, Devprayag, Ukhimath, Chopta, Gopeshwar, Joshimath, Auli, Rudraprayag, and Srinagar of Garhwal.",
    image: tourNine,
    link: "https://devbhumitourism.com/tours/chopta-auli-tour-ex-dehradun/",
  },
  {
    id: 10,
    title: "Mussoorie Chopta Kausani Corbett Tour",
    duration: "06 Nights/07 Days - Ex New Delhi",
    description:
      "Discover Mussoorie, Dhanolti, Tehri, Rudraprayag, Chopta, Gopeshwar, Kausani, Ranikhet, and Corbett.",
    image: tourTen,
    link: "https://devbhumitourism.com/tours/mussoorie-chopta-kausani-corbett-tour/",
  },
  {
    id: 11,
    title: "Nainital Almora Kausani Corbett Tour",
    duration: "05 Nights/06 Days - Ex Kathgodam",
    description:
      "Discover Nainital, Bhimtal, Sattal, Bhowali, Almora, Kausani, Ranikhet, and Corbett National Park.",
    image: tourEleven,
    link: "https://devbhumitourism.com/tours/nainital-almora-kausani-corbett-tour-ex-kathgodam/",
  },
  {
    id: 12,
    title: "Complete Uttarakhand Tour",
    duration: "19 Nights/20 Days - Ex New Delhi",
    description:
      "Discover Haridwar, Mussoorie, Dhanolti, Tehri, Ukhimath, Chopta, Gopeshwar, Auli, Joshimath, Kausani, Chaukori, Munsiyari, Jageshwar, Bhowali, Nainital, and Corbett.",
    image: tourTwelve,
    link: "https://devbhumitourism.com/tours/complete-uttarakhand-tour/",
  },
];

const headingData = {
  subHeading:
    "From Green Valleys To Snowy Peaks: Book Unforgettable Uttarakhand Travel Experiences At Devbhumi Tourism",
  mainHeading: "Tailor-Made All Season Uttarakhand Tour Packages For You",
  description:
    "One Uttarakhand tour is enough to showcase the magic of the hills. But it is certainly not enough to capture the sheer awesomeness that is this pristine beauty. That is why we have carefully designed a variety of Uttarakhand tours that will take you on epic journeys and create fun memories that will last you a lifetime. Interestingly, Uttarakhand is divided into two regions, including Kumaon and Garhwal. Our Uttarakhand Tour Packages include both these regions which attract throngs of tourists from all over the world. After all, who wouldn’t want to enjoy sightseeing, adventure and wildlife all rolled into one trip? You, too, can experience this! Check out the below All Season Uttarakhand Tour Packages starting from Delhi, Dehradun and so on and leave the rest to us.",
  footerDescription:
    "Dive in the holistic experience of Ayurvedic spas and yoga retreats in the lap of the divine Himalayas, rejuvenating your mind, body, and soul. With our expertly crafted Uttarakhand itineraries, you can customize your Uttarakhand getaway, ensuring a seamless blend of exploration and relaxation. Let the magic of Uttarakhand unfold before you, leaving you with cherished memories of a journey into nature’s embrace. Refine your search for a Uttarakhand tour with the below tags.",
  allPackagesLink: "https://devbhumitourism.com/uttarakhand-tour-packages/",
};

const buttonsData = [
  {
    label: "Uttarakhand Tour Packages From Delhi",
    link: "https://devbhumitourism.com/uttarakhand-tour-packages-from-delhi/",
  },
  {
    label: "Uttarakhand Tour Packages From Dehradun",
    link: "https://devbhumitourism.com/uttarakhand-tour-packages-from-dehradun/",
  },
  {
    label: "Uttarakhand Tour Packages From Haridwar",
    link: "https://devbhumitourism.com/uttarakhand-tour-packages-from-haridwar/",
  },
  {
    label: "Uttarakhand Tour Packages From Kathgodam",
    link: "https://devbhumitourism.com/uttarakhand-tour-packages-from-kathgodam/",
  },
];
const pacakagebtn = "All Uttarakhand Tour Packages";

// ==============
const weekEndTourData = [
  {
    title: "Corbett Family Tour",
    duration: "02 Nights/03 Days - Ex New Delhi",
    image: corbett,
    link: "https://devbhumitourism.com/tours/corbett-family-tour/",
    alt: "uttarakhand weekend tours",
  },
  {
    title: "Nainital Weekend Tour",
    duration: "02 Nights/03 Days - Ex New Delhi",
    image: nainital,
    link: "https://devbhumitourism.com/tours/nainital-tour/",
    alt: "uttarakhand tour",
  },
  {
    title: "Rishikesh Rafting Tour",
    duration: "01 Nights/02 Days - Ex New Delhi",
    image: rishikesh,
    link: "https://devbhumitourism.com/tours/rishikesh-rafting-tour/",
    alt: "uttarakhand tours",
  },
  {
    title: "Mussoorie Weekend Tour",
    duration: "02 Nights/03 Days - Ex New Delhi",
    image: mussoorie,
    link: "https://devbhumitourism.com/tours/mussoorie-weekend-tour/",
    alt: "uttarakhand tour packages",
  },
];

const weekEndTourHeadingInfo = {
  subHeading:
    "Short on Time, Big on Adventure & Yet Serenity Awaits! Check These Unmissable Uttarakhand Weekend Tours",
  mainHeading: "Discover Uttarakhand's Weekend Gateways and Short Breaks",
  description:
    "Its proximity to major cities like Delhi makes it an ideal short escape for nature lovers, adventure enthusiasts, and spiritual seekers. Whether it's the tranquil lakes of Nainital, the adventure sports hub of Rishikesh, or the serene hill station of Mussoorie, Uttarakhand's Destination Expert, Devbhumi Tourism offers a variety of Uttarakhand Tour Packages packed with magical experiences just in a short trip.",
  additionalInfo:
    "For those looking to escape the hustle of city life, the state's lush green valleys, snow-capped peaks, and sacred rivers provide the perfect setting for rejuvenation. From trekking in the scenic Himalayas to exploring ancient temples and enjoying wildlife safaris, Uttarakhand promises a refreshing blend of adventure, culture, and natural beauty, all easily accessible over a weekend.",
  buttonLink: "https://devbhumitourism.com/uttarakhand-weekend-tours",
  buttonText: "Explore All Uttarakhand Weekend Tours",
};

export default function HeroSection() {
  return (
    <>
      <section id="hero">
        <div className="hero">
          <div className="container">
            <div className="inner-wrapper hero-content-wrapper d-flex flex-column align-center">
              <img
                loading="lazy"
                fetchpriority="low"
                src={Logo}
                alt="devbhumi tourism logo"
                className="hero-img"
              />
              <div className="space-20"></div>
              <h1 className="semi-bold-text hero-title text-center">
                Uttarakhand Tour Packages Tailored For 2025
              </h1>
              <h2 className="hero-title text-center">
                <span className="bold-heading">Devbhumi Tourism</span>
              </h2>
              <p className="semi-bold-text hero-paragraph text-center">
                Nestled in the foothills of the Himalayas, the beautiful hill
                state of Uttarakhand is the dream destination of every
                traveller. After all, there is no day that you don't find
                untouched natural beauty, a tryst with the wild, a journey of
                the soul, and a fun holiday, all packed into one. But, the gem
                of the north "Devbhumi Tourism" manages to pull this off in
                style. With regards to cute quality Uttarakhand Tour Packages,
                Devbhumi Tourism ventures up in any case to furnish you with a
                very acceptable involvement in the recollections for the
                lifetime.
              </p>
              <h3 className="hero-number"># 1</h3>
              <h4 className="text-center font-2x hide-mobile">
                UTTARAKHAND TOUR FACILITATOR
              </h4>
              <h5 className="text-center hide-mobile">
                Devbhumi Travel And Tourism LLP
              </h5>
              <div className="space-50"></div>
              <div className="row w-100 hero-btn-wrapper">
                <div className="col-4 text-center">
                  <a
                    href="https://devbhumitourism.com/uttarakhand-tour-packages/"
                    className="hero-btn decoration-none bold-text"
                  >
                    <i className="fa fa-gift" aria-hidden="true"></i>{" "}
                    Uttarakhand Tour Packages
                  </a>
                </div>
                <div className="col-4 text-center">
                  <a
                    href="https://devbhumitourism-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc"
                    className="hero-btn decoration-none bold-text"
                  >
                    <i className="fa fa-book" aria-hidden="true"></i> हिंदी और
                    120+ भाषाओं में पढ़ें
                  </a>
                </div>
                <div className="col-4 text-center">
                  <a
                    href="https://devbhumitourism.com/char-dham-yatra-packages/"
                    className="hero-btn decoration-none bold-text"
                  >
                    <i className="fa fa-bell" aria-hidden="true"></i> Char Dham
                    Yatra Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoriesSection />
      <CallbackForm />
      <UttarakhandTourPackages
        tours={toursData}
        headingData={headingData}
        buttonsData={buttonsData}
        pacakagebtn={pacakagebtn}
      />
      <DestinationExpert />
      <WeekendGateways
        headingInfo={weekEndTourHeadingInfo}
        tours={weekEndTourData}
      />
      <TourPacks />
      <CharDhamYatra />
      <InquiryForm />
      <AboutUttrakhand />
      <CallbackForm />
      <UttarakhandBlogsSection />
      <TripAdvisorSection />
      <WhyChooseUsSection />
      <Footer />
    </>
  );
}
