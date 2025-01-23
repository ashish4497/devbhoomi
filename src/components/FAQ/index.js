import React from "react";
import "./style.css";
import Accordion from "../Accordian";
import { AccordianOneItem } from "./AccordianOneItem";
import { AccordianItemTwo } from "./AccordianItemTwo";
import { AccordianItemThree } from "./AccordianItemThree";
import { AccordianItemSix } from "./AccordianItemSix";
import { AccordianitemFive } from "./AccordianitemFive";
import { AccordianitemFour } from "./AccordianItemFour";
import Marquee from "../Marquee";

const VisitUttrakhand = [
  {
    question: "1. WHICH ARE THE TOP TOURIST PLACES OF UTTARAKHAND?",
  },
];
const touristPlacesData = [
  {
    question: "2. WHICH ARE THE TOP TOURIST PLACES OF UTTARAKHAND?",
  },
];
const doInUttrakhand = [
  {
    question: "3. WHAT TO DO IN UTTARAKHAND?",
  },
];
const questionFour = [
  {
    question: "4. WHAT ARE THE DELICIOUS CUISINES OF UTTARAKHAND?",
  },
];
const questionFive = [
  {
    question: "5. WILDLIFE SANCTUARIES, AND NATIONAL PARKS IN UTTARAKHAND",
  },
];
const questionSix = [
  {
    question: "6. WHAT IS THE BEST TIME TO VISIT UTTARAKHAND?",
  },
];

export const AccordionContainer = () => {
  return (
    <div>
      <section class="tour-faq hide-mobile" id="tour-faq">
        <div class="container">
          <div class="row w-100 section-3-wrapper">
            <div class="col-12">
              <h4 class="regular-text text-center sup-heading">
                Questions you may have in your mind.
              </h4>
              <h2 class="bold-heading text-center section-heading">
                Frequently Asked Questions?
              </h2>
              <p class="sec-heading-paragraph">
                Uttarakhand, a beautiful northern state in India, is renowned
                for its breathtaking Himalayan landscapes, spiritual sites,
                vibrant hill stations, and rich cultural heritage. Whether
                you're planning an adventure trek, a pilgrimage, or a relaxing
                getaway, our FAQ page is here to answer common questions and
                help you make the most of your trip. From the best times to
                visit and top tourist attractions to guidance on transportation,
                safety tips, and necessary permits, this page offers all the
                essential information travelers need. Let us guide you through
                an unforgettable experience in the Land of Gods, Uttarakhand.
                Read, Investigate, and Learn the best about Uttarakhand, explore
                the top frequently asked questions from our Uttarakhand Tour
                Packages.
              </p>
            </div>
          </div>

          {/* <!-- uttarakhand packages faqs --> */}
          <div class="row mt-20">
            <div class="col-6">
              <Accordion items={VisitUttrakhand} component={AccordianOneItem} />
              <Accordion
                items={touristPlacesData}
                component={AccordianItemTwo}
              />
              <Accordion
                items={doInUttrakhand}
                component={AccordianItemThree}
              />
              <Accordion items={questionFour} component={AccordianitemFour} />
              <Accordion items={questionFive} component={AccordianitemFive} />
              <Accordion items={questionSix} component={AccordianItemSix} />
            </div>
            <div class="col-6">
              {/* <!-- Accordion item Start --> */}
              <Accordion items={VisitUttrakhand} component={AccordianOneItem} />
              <Accordion
                items={touristPlacesData}
                component={AccordianItemTwo}
              />
              <Accordion
                items={doInUttrakhand}
                component={AccordianItemThree}
              />
              <Accordion items={questionFour} component={AccordianitemFour} />
              <Accordion items={questionFive} component={AccordianitemFive} />
              <Accordion items={questionSix} component={AccordianItemSix} />
            </div>
          </div>

          {/* <!-- uttarakhand packages faqs :END --> */}
        </div>
      </section>
      {/* <!-- Section 11: End --> */}
      <Marquee />
    </div>
  );
};
