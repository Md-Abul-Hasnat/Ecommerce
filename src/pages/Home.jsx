import React from "react";
import CetagoryBanner from "../components/CetagoryBanner";
import HomeHero from "../components/HomeHero";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
    <>
      <HomeHero />
      <SpecialOffer />
      <CetagoryBanner />
    </>
  );
};

export default Home;
