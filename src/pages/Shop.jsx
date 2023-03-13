import React from "react";
import Banner from "../components/Banner";

const Shop = () => {
  const bannerInfo = {
    title: "SHOP",
    currentPage: "shop ",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
    </>
  );
};

export default Shop;
