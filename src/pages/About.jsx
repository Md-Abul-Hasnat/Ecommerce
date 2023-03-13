import React from "react";
import Banner from "../components/Banner";

const About = () => {
  const bannerInfo = {
    title: "ABOUT US",
    currentPage: "about us",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
    </>
  );
};

export default About;
