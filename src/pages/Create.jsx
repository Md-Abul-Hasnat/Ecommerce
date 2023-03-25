import React from "react";
import Banner from "../components/Banner";

const Create = () => {
  const bannerInfo = {
    title: "ADD PRODUCT",
    currentPage: "Add Product",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
    </>
  );
};

export default Create;
