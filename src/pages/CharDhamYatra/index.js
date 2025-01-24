import React from "react";
import CharDhamBanner from "../../components/CharDhamBanner";
import Footer from "../../components/Footer";
import InquiryForm from "../../components/InquiryForm";
import KnowAboutHimalyan from "../../components/KnowAboutHimalyan";
import BestSeasonDuration from "../../components/BestSeasonDuration";
import CallbackForm from "../../components/CallbackForm";
import WorthyAttaractions from "../../components/WorthyAttaractions";

export const CharDhamYatra = () => {
  return (
    <div>
      <CharDhamBanner />
      <KnowAboutHimalyan />
      <BestSeasonDuration />
      <CallbackForm />
      <WorthyAttaractions />
      <InquiryForm />
      <Footer />
    </div>
  );
};
