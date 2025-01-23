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
import WeekendGateways from "../../components/WeekendGateways";
import corbett from "../../assets/media/uttarakhand-tours/treks/kedarkantha-trek.jpg";
import nainital from "../../assets/media/uttarakhand-tours/treks/valley-of-flowers-trek.jpg";
import rishikesh from "../../assets/media/uttarakhand-tours/treks/har-ki-dun-trek.jpg";
import InquiryForm from "../../components/InquiryForm";
import CharDhamYatra from "../../components/SpiritualJourney";
import charDham1 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-dehradun.jpg";
import charDham2 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-dehradun-in-eleven-days.jpg";
import charDham3 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-dehradun-in-twelve-days.jpg";
import charDham4 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-with-tungnath-auli-ex-dehradun-in-thirteen-days.jpg";
import charDham5 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-from-delhi.jpg";
import charDham6 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-ex-delhi-in-thirteen-days.jpg";
import charDham7 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-with-tungnath-auli-ex-delhi-in-fourteen-days.jpg";
import charDham8 from "../../assets/media/uttarakhand-tours/pilgrimage/char-dham-yatra-with-valley-of-flowers-ex-delhi-in-sixteen-days.jpg";
import TripAdvisorSection from "../../components/AdvisorTestimonials";
import InstantCallBackForm from "../../components/InstantCallBackForm";
import { AccordionContainer } from "../../components/FAQ";
import Accordion from "../../components/Accordian";

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

//  =============================
const weekEndTourData = [
  {
    title: "Say Hello To Kumaon",
    duration: "07 Nights/08 Days - Ex Delhi",
    itinerary: "03N Nainital, 02N Kausani, 02N Corbett",
    image: rishikesh,
    alt: "uttarakhand tour itinerary",
    link: "https://devbhumitourism.com/uttarakhand-treks/har-ki-dun-trek/",
  },
  {
    title: "Tehri Chopta Auli Tour",
    duration: "08 Nights/09 Days - Ex Dehradun",
    itinerary: "02N Tehri, 02N Chopta, 02N Auli, 02N Rishikesh",
    image: corbett,
    alt: "uttarakhand tour packages",
    link: "https://devbhumitourism.com/uttarakhand-treks/kedarkantha-trek/",
  },
  {
    title: "Chopta Auli Expedition",
    duration: "07 Nights/08 Days - Ex Dehradun",
    itinerary: "01N Rudraprayag, 03N Auli, 02N Chopta, 02N Rishikesh",
    image: nainital,
    alt: "uttarakhand tour package",
    link: "https://devbhumitourism.com/uttarakhand-treks/valley-of-flowers-trek/",
  },
  {
    title: "Nainital Weekend Tour",
    duration: "02 Nights/03 Days - Ex New Delhi",
    itinerary: "02N Tehri, 02N Chopta, 02N Auli, 02N Rishikesh",
    image: nainital,
    link: "https://devbhumitourism.com/tours/nainital-tour/",
    alt: "uttarakhand tour",
  },
];

//===========================
const sectionData = {
  id: "sec-5",
  className: "section-3",
  subHeading:
    "Get Introduced To Divine Char Dham And Dive In Your Spiritual Self!",
  heading: "Discover Divine: The Char Dham Yatra Unveiled",
  description:
    "Up in the misty heights of the majestic Garhwal Himalayas that adorn the magnificent state of Uttarakhand, awaits a rejuvenating spiritual experience for the devout. Nestling in the lofty Peaks is the four most holy pilgrimages of India, well known as Yamunotri, Gangotri, Kedarnath, and Badrinath. Collectively called the Char Dham (or four pilgrimage centres) of Hinduism. For centuries, saints and pilgrims, in their search for the divine, have walked these mystical values known in ancient Hindu scriptures which are written as ‘Kedarkhand’. Devbhumi Tourism welcomes all pilgrims on this sacred Himalayan journey called the Char Dham Yatra for 2025. Check out the below updated Char Dham Yatra’s 10/12 days long ground tours and details customised according to pilgrims who want to start their journey either from Delhi, Haridwar, Rishikesh, or from Dehradun.",
};

const charDhamPackages = [
  {
    title: "Traditional Char Dham Yatra",
    imgSrc: charDham1,
    altText: "char dham yatra",
    duration: "09 Nights/10 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-from-dehradun-in-ten-days/",
  },
  {
    title: "Char Dham Yatra With Haridwar",
    imgSrc: charDham2,
    altText: "char dham",
    duration: "10 Nights/11 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-ex-dehradun-in-eleven-days/",
  },
  {
    title: "Char Dham Yatra With Tungnath",
    imgSrc: charDham3,
    altText: "char dham yatra package",
    duration: "11 Nights/12 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-ex-dehradun-in-twelve-days/",
  },
  {
    title: "Char Dham Yatra With Auli",
    imgSrc: charDham4,
    altText: "char dham yatra packages",
    duration: "12 Nights/13 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-with-tungnath-auli-ex-dehradun-in-thirteen-days/",
  },
  {
    title: "Traditional Char Dham Yatra",
    imgSrc: charDham5,
    altText: "uttarakhand tour",
    duration: "11 Nights/12 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-from-delhi/",
  },
  {
    title: "Char Dham Yatra With Tungnath",
    imgSrc: charDham6,
    altText: "uttarakhand tourism",
    duration: "12 Nights/13 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-ex-delhi-in-thirteen-days/",
  },
  {
    title: "Char Dham Yatra With Auli",
    imgSrc: charDham7,
    altText: "uttarakhand tourism packages",
    duration: "13 Nights/14 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-with-tungnath-auli-ex-delhi-in-fourteen-days/",
  },
  {
    title: "Char Dham Yatra With VOF",
    imgSrc: charDham8,
    altText: "uttarakhand tour packages",
    duration: "15 Nights/16 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-with-valley-of-flowers-ex-delhi-in-sixteen-days/",
  },
];

const buttons = {
  subButtons: [
    {
      label: "Do Dham Yatra Packages",
      link: "https://devbhumitourism.com/do-dham-yatra-packages/",
    },
    {
      label: "Ek Dham Yatra Packages",
      link: "https://devbhumitourism.com/ek-dham-yatra-packages/",
    },
    {
      label: "All Char Dham Yatra Packages",
      link: "https://devbhumitourism.com/char-dham-yatra-packages/",
    },
    {
      label: " Char Dham Yatra Helicopter Packages",
      link: "https://devbhumitourism.com/char-dham-yatra-packages/",
    },
  ],
};

const weekEndTourHeadingInfo = {
  subHeading:
    "Nature's Abode Uttarakhand: Get A Magical Journey Through Our Pre-made Uttarakhand Tour Itineraries",
  mainHeading: "Leisure At Peak: Premium Uttarakhand Tour Experiences",
  description:
    "Its proximity to major cities like Delhi makes it an ideal short escape for nature lovers, adventure enthusiasts, and spiritual seekers. Whether it's the tranquil lakes of Nainital, the adventure sports hub of Rishikesh, or the serene hill station of Mussoorie, Uttarakhand's Destination Expert, Devbhumi Tourism offers a variety of Uttarakhand Tour Packages packed with magical experiences just in a short trip.",
  additionalInfo:
    "Our premium Uttarakhand tour packages are super relaxing tours, designed to immerse you in the natural beauty and spiritual richness of this enchanting region. Here we put rejuvenation in a peaceful retreat, thrilling experiences in the great outdoors, and a chance to explore ancient temples and vibrant local culture of Uttarakhand. This vibrant state has something special for everyone, join us as we guide you through this majestic land, where every moment is a step toward relaxation and peace.",
  buttonLink: "https://devbhumitourism.com/uttarakhand-weekend-tours",
  buttonText: "Premium Uttarakhand Tour Packages",
};

//============ AllUttrakhandWeekEndTourData ====== //
const AllUttrakhandWeekEndTourData = [
  {
    title: "Say Hello To Kumaon",
    duration: "07 Nights/08 Days - Ex Delhi",
    image: rishikesh,
    alt: "uttarakhand tour itinerary",
    link: "https://devbhumitourism.com/uttarakhand-treks/har-ki-dun-trek/",
  },
  {
    title: "Tehri Chopta Auli Tour",
    duration: "08 Nights/09 Days - Ex Dehradun",
    image: corbett,
    alt: "uttarakhand tour packages",
    link: "https://devbhumitourism.com/uttarakhand-treks/kedarkantha-trek/",
  },
  {
    title: "Chopta Auli Expedition",
    duration: "07 Nights/08 Days - Ex Dehradun",
    image: nainital,
    alt: "uttarakhand tour package",
    link: "https://devbhumitourism.com/uttarakhand-treks/valley-of-flowers-trek/",
  },
  {
    title: "Nainital Weekend Tour",
    duration: "02 Nights/03 Days - Ex New Delhi",
    image: nainital,
    link: "https://devbhumitourism.com/tours/nainital-tour/",
    alt: "uttarakhand tour",
  },
];

const AllUttrakhandEeekEndTourHeadingInfo = {
  subHeading:
    "Short on Time, Big on Adventure & Yet Serenity Awaits! Check These Unmissable Uttarakhand Weekend Tours",
  mainHeading: "Discover Uttarakhand's Weekend Gateways and Short Breaks",
  description:
    "Its proximity to major cities like Delhi makes it an ideal short escape for nature lovers, adventure enthusiasts, and spiritual seekers. Whether it's the tranquil lakes of Nainital, the adventure sports hub of Rishikesh, or the serene hill station of Mussoorie, Uttarakhand's Destination Expert, Devbhumi Tourism offers a variety of Uttarakhand Tour Packages packed with magical experiences just in a short trip.",
  additionalInfo:
    "For those looking to escape the hustle of city life, the state's lush green valleys, snow-capped peaks, and sacred rivers provide the perfect setting for rejuvenation. From trekking in the scenic Himalayas to exploring ancient temples and enjoying wildlife safaris, Uttarakhand promises a refreshing blend of adventure, culture, and natural beauty, all easily accessible over a weekend.",
  buttonLink: "https://devbhumitourism.com/uttarakhand-weekend-tours",
  buttonText: "Explore All Uttarakhand WeekEnd Tour ",
};

//============ 7 Days UttrakhandWeekEnd TourData ====== //
const sevenDaysToursData = [
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

const sevenDaysHeadingData = {
  subHeading:
    "Nature's Abode Uttarakhand: Get A Magical Journey Through Our Pre-made Uttarakhand Tour Itineraries",
  mainHeading: "Sorted Uttarakhand Tour Packages By Duration",
  description:
    "When planning a tour of Uttarakhand, the duration of your trip plays a key role in determining the itinerary. If you're short on time, a 3-4 day trip could cover popular destinations like Mussoorie, Dehradun, and Rishikesh. These places offer a mix of serene hill stations, waterfalls, and spiritual sites like the Ganga Aarti at Triveni Ghat. For a week-long tour, you can extend your journey to include places like Nainital, Jim Corbett National Park, and Almora, allowing you to explore wildlife, scenic lakes, and cultural heritage. A longer trip of 10-12 days offers the chance to experience the remote beauty of Auli, Kedarnath, or Valley of Flowers, giving you an in-depth glimpse into Uttarakhand’s majestic landscapes, adventure opportunities, and spiritual experiences. Find out below Uttarakhand tours covering a whole week in the lap of the great Himalayas.",
  footerDescription:
    "*All the above tours are operational round the year, you can plan them anytime, Yoohoo... For more 7 days Uttarakhand tour packages, hit the below big button.",
  allPackagesLink: "http://localhost:3000/uttarakhand-tour",
};

const sevenDaysButtonsData = [
  {
    label: "Uttarakhand Tours For 03 Days",
    link: "#",
  },
  {
    label: "Uttarakhand Tours For 05 Days",
    link: "#",
  },
  {
    label: "Uttarakhand Tours For 10 Days",
    link: "#",
  },
  {
    label: "Uttarakhand Tours For 12 Days",
    link: "#",
  },
  {
    label: "Uttarakhand Tours For 15 Days",
    link: "#",
  },
];
const sevenDaysPacakagebtn = "Uttarakhand Tour Packages For 07 Days";
//=========Treak tour Pacakages ===============
//===========================
const treakTouSectionData = {
  id: "sec-5",
  className: "section-3",
  subHeading:
    "Get Introduced To Divine Char Dham And Dive In Your Spiritual Self!",
  heading: "Discover Divine: The Char Dham Yatra Unveiled",
  description:
    "Up in the misty heights of the majestic Garhwal Himalayas that adorn the magnificent state of Uttarakhand, awaits a rejuvenating spiritual experience for the devout. Nestling in the lofty Peaks is the four most holy pilgrimages of India, well known as Yamunotri, Gangotri, Kedarnath, and Badrinath. Collectively called the Char Dham (or four pilgrimage centres) of Hinduism. For centuries, saints and pilgrims, in their search for the divine, have walked these mystical values known in ancient Hindu scriptures which are written as ‘Kedarkhand’. Devbhumi Tourism welcomes all pilgrims on this sacred Himalayan journey called the Char Dham Yatra for 2025. Check out the below updated Char Dham Yatra’s 10/12 days long ground tours and details customised according to pilgrims who want to start their journey either from Delhi, Haridwar, Rishikesh, or from Dehradun.",
};

const treakTourPackages = [
  {
    title: "Traditional Char Dham Yatra",
    imgSrc: charDham1,
    altText: "char dham yatra",
    duration: "09 Nights/10 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-from-dehradun-in-ten-days/",
  },
  {
    title: "Char Dham Yatra With Haridwar",
    imgSrc: charDham2,
    altText: "char dham",
    duration: "10 Nights/11 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-ex-dehradun-in-eleven-days/",
  },
  {
    title: "Char Dham Yatra With Tungnath",
    imgSrc: charDham3,
    altText: "char dham yatra package",
    duration: "11 Nights/12 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-ex-dehradun-in-twelve-days/",
  },
  {
    title: "Char Dham Yatra With Auli",
    imgSrc: charDham4,
    altText: "char dham yatra packages",
    duration: "12 Nights/13 Days ex Dehradun",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-with-tungnath-auli-ex-dehradun-in-thirteen-days/",
  },
  {
    title: "Traditional Char Dham Yatra",
    imgSrc: charDham5,
    altText: "uttarakhand tour",
    duration: "11 Nights/12 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-from-delhi/",
  },
  {
    title: "Char Dham Yatra With Tungnath",
    imgSrc: charDham6,
    altText: "uttarakhand tourism",
    duration: "12 Nights/13 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-ex-delhi-in-thirteen-days/",
  },
  {
    title: "Char Dham Yatra With Auli",
    imgSrc: charDham7,
    altText: "uttarakhand tourism packages",
    duration: "13 Nights/14 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-with-tungnath-auli-ex-delhi-in-fourteen-days/",
  },
  {
    title: "Char Dham Yatra With VOF",
    imgSrc: charDham8,
    altText: "uttarakhand tour packages",
    duration: "15 Nights/16 Days ex New Delhi",
    url: "https://devbhumitourism.com/tours/char-dham-yatra-with-valley-of-flowers-ex-delhi-in-sixteen-days/",
  },
];

const treakTouButtons = {
  subButtons: [
    {
      label: "Do Dham Yatra Packages",
      link: "https://devbhumitourism.com/do-dham-yatra-packages/",
    },
    {
      label: "Ek Dham Yatra Packages",
      link: "https://devbhumitourism.com/ek-dham-yatra-packages/",
    },
    {
      label: "All Char Dham Yatra Packages",
      link: "https://devbhumitourism.com/char-dham-yatra-packages/",
    },
    {
      label: " Char Dham Yatra Helicopter Packages",
      link: "https://devbhumitourism.com/char-dham-yatra-packages/",
    },
  ],
};

const treakTouHeadingInfo = {
  subHeading:
    "Nature's Abode Uttarakhand: Get A Magical Journey Through Our Pre-made Uttarakhand Tour Itineraries",
  mainHeading: "Leisure At Peak: Premium Uttarakhand Tour Experiences",
  description:
    "Its proximity to major cities like Delhi makes it an ideal short escape for nature lovers, adventure enthusiasts, and spiritual seekers. Whether it's the tranquil lakes of Nainital, the adventure sports hub of Rishikesh, or the serene hill station of Mussoorie, Uttarakhand's Destination Expert, Devbhumi Tourism offers a variety of Uttarakhand Tour Packages packed with magical experiences just in a short trip.",
  additionalInfo:
    "Our premium Uttarakhand tour packages are super relaxing tours, designed to immerse you in the natural beauty and spiritual richness of this enchanting region. Here we put rejuvenation in a peaceful retreat, thrilling experiences in the great outdoors, and a chance to explore ancient temples and vibrant local culture of Uttarakhand. This vibrant state has something special for everyone, join us as we guide you through this majestic land, where every moment is a step toward relaxation and peace.",
  buttonLink: "https://devbhumitourism.com/uttarakhand-weekend-tours",
  buttonText: "Premium Uttarakhand Tour Packages",
};

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
        <WeekendGateways
          headingInfo={weekEndTourHeadingInfo}
          tours={weekEndTourData}
          className={"section-02"}
        />
        <CharDhamYatra
          sectionData={sectionData}
          packages={charDhamPackages}
          buttons={buttons}
        />
        <InquiryForm />
        <WeekendGateways
          headingInfo={AllUttrakhandEeekEndTourHeadingInfo}
          tours={AllUttrakhandWeekEndTourData}
          className={"section-6"}
        />
        <WeekendGateways
          headingInfo={treakTouHeadingInfo}
          tours={weekEndTourData}
          className={"section-02"}
        />
        <InstantCallBackForm />
        <UttarakhandTourPackages
          tours={sevenDaysToursData}
          headingData={sevenDaysHeadingData}
          buttonsData={sevenDaysButtonsData}
          pacakagebtn={sevenDaysPacakagebtn}
        />

        <TripAdvisorSection />
        <AccordionContainer />

        <Footer />
      </div>
    </div>
  );
}

export default UttrakhandTourPage;
