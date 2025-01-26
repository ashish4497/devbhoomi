import React from "react";
import Accordion from "../Accordian";
import { ItemOne } from "./ItemOne";
import { ItemTwo } from "./ItemTwo";
import { ItemThree } from "./ItemThree";
import { ItemFour } from "./ItemFour";
import { ItemFive } from "./ItemFive";
import { ItemSix } from "./ItemSix";

const VisitUttrakhand = [
  {
    question: "1. What is Char Dham Yatra?",
  },
];
const touristPlacesData = [
  {
    question: "2. From where to start the Char Dham Yatra?",
  },
];
const doInUttrakhand = [
  {
    question: " 3. Where is Yamunotri Dham located?",
  },
];
const questionFour = [
  {
    question: "4. Where is Gangotri Dham located?",
  },
];
const questionFive = [
  {
    question: "5. Where is Kedarnath Dham located?",
  },
];
const questionSix = [
  {
    question: "6. Where is Badrinath Dham located?",
  },
];

export const CharDhamYatraFAQ = () => {
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
                Read, Investigate, and Learn the best about Uttarakhand, explore
                the top frequently asked questions about Uttarakhand Tour
                Package.
              </p>
            </div>
          </div>

          <div class="row mt-20">
            <div class="col-6">
              <Accordion items={VisitUttrakhand} component={ItemOne} />
              <Accordion items={touristPlacesData} component={ItemTwo} />
              <Accordion items={doInUttrakhand} component={ItemThree} />
              <Accordion items={questionFour} component={ItemFour} />
              <Accordion items={questionFive} component={ItemFive} />
              <Accordion items={questionSix} component={ItemSix} />
            </div>
            <div class="col-6">
              <Accordion items={VisitUttrakhand} component={ItemOne} />
              <Accordion items={touristPlacesData} component={ItemTwo} />
              <Accordion items={doInUttrakhand} component={ItemThree} />
              <Accordion items={questionFour} component={ItemFour} />
              <Accordion items={questionFive} component={ItemFive} />
              <Accordion items={questionSix} component={ItemSix} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
