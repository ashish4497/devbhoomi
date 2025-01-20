import React from "react";
import "./style.css";
import UttrakhandTourBanner from "../../components/UttrakhandTourBanner";
import UttarakhandTourPackages from "../../components/AllSeasonPackages";
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
import Footer from "../../components/Footer";

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
    "Personalized-All Season Uttarakhand Tour Packages For Every Traveller",
  mainHeading:
    "Personalized-All Season Uttarakhand Tour Packages For Every Traveller Hand Crafted-Perfect Uttarakhand Tour Escapes For You",
  description:
    "Apart from the Sikh & Hindu pilgrimage Uttarakhand Tours, Uttarakhand facilitates wildlife, skiing, yoga, natural beauty, peaks, rural fascination, rich culture, and picturesque photographic opportunities which can elevate your tour experience. Indulge in the holistic experience of Ayurvedic spas and yoga retreats in the lap of the Himalayas, rejuvenating your mind, body, and soul. With our expertly crafted itineraries, you can customize your Uttarakhand getaway, ensuring a seamless blend of exploration and relaxation. Let the magic of Uttarakhand unfold before you, leaving you with cherished memories of a journey into nature’s embrace. Pick one from the top ten selections or scroll down for the infinite magical possibilities to relish your Uttarakhand tour package.",
  footerDescription:
    "Discover the spiritual allure of Rishikesh and Haridwar, where the Ganges River flows with divine energy. Traverse through the picturesque hill stations of Mussoorie and Nainital, offering breathtaking views and charming colonial architecture. For the avid trekker, Uttarakhand unveils a myriad of trails, including the famous Valley of Flowers and the awe-inspiring Roopkund Lake trek.",
  allPackagesLink: "http://localhost:3000/uttarakhand-tour",
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

const pacakagebtn = "Explore All Uttarakhand's All-season Tours";
function UttrakhandTourPage() {
  return (
    <div>
      <UttrakhandTourBanner />
      <div className="tour-packages-sec-3">
        <UttarakhandTourPackages
          tours={toursData}
          headingData={headingData}
          buttonsData={buttonsData}
          pacakagebtn={pacakagebtn}
        />
        <Footer />
      </div>
    </div>
  );
}

export default UttrakhandTourPage;
