import React, { useState } from "react";
import ProductCard from "./ProductCard";

const SpecialOffer = () => {
  const cetagoryArr = [
    "ALL",
    "LIVING ROOM",
    "BATH ROOM",
    "BED ROOM",
    "KITCHEN",
    "ACCESSORIES",
  ];
  const [cetagory, setCetagory] = useState("ALL");

  function selectedCetagory(e) {
    setCetagory(e.target.innerText);
  }

  return (
    <section className="w-screen mt-40 ">
      <h3 className="sub-heading">SPECIAL OFFER</h3>
      <h1 className="main-heading">TOP COLLECTION 2023</h1>
      <ul className="bg-footer-bg w-[90%] mx-auto mt-7 grid grid-cols-3 gap-y-3 text-center py-4 px-3 rounded-full text-gray-clr sm:w-[70%] lg:grid-cols-6 ">
        {cetagoryArr.map((arr, i) => {
          return (
            <li
              key={i}
              onClick={selectedCetagory}
              className={`cetagory-btn ${
                cetagory === arr && "text-orange-clr"
              }`}
            >
              {arr}
            </li>
          );
        })}
      </ul>
      <main className="w-[85%] mx-auto mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-[90%]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </section>
  );
};

export default SpecialOffer;
