import React from "react";
import Banner from "../components/Banner";

const Cart = () => {
  const bannerInfo = {
    title: "CART",
    currentPage: "cart ",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
    </>
  );
};

export default Cart;
