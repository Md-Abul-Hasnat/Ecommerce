import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const SpecialOffer = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const [filteredItem, setFilteredItem] = useState([]);
  const [cetagory, setCetagory] = useState("ALL");

  const cetagories = [
    "ALL",
    "DRAWING ROOM",
    "BED ROOM",
    "BATH ROOM",
    "KITCHEN",
    "OTHERS",
  ];

  useEffect(() => {
    if (cetagory === "ALL") {
      setFilteredItem(products);
    } else {
      const data = products.filter((product) => product.cetagory === cetagory);
      setFilteredItem(data);
    }
  }, [cetagory, products]);

  return (
    <>
      {loading && <h1>Loading</h1>}
      <section className="w-screen mt-40 ">
        <h3 className="sub-heading">SPECIAL OFFER</h3>
        <h1 className="main-heading">TOP COLLECTION 2023</h1>
        <ul className="bg-footer-bg w-[90%] mx-auto mt-7 grid grid-cols-3 gap-y-3 text-center py-4 px-3 rounded-md text-gray-clr sm:w-[70%] lg:rounded-full lg:grid-cols-6 ">
          {cetagories.map((arr, i) => {
            return (
              <li
                key={i}
                onClick={(e) => setCetagory(e.target.innerText)}
                className={`cetagory-btn ${
                  cetagory === arr && "text-orange-clr"
                }`}
              >
                {arr}
              </li>
            );
          })}
        </ul>
        <main className="w-[85%] mx-auto mt-14 grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-[90%] duration-300">
          {filteredItem.length !== 0 ? (
            filteredItem.map((product) => {
              return <ProductCard key={+product.id} data={product} />;
            })
          ) : (
            <h2 className="w-[100vw] text-center text-base md:text-lg">
              No product available!
            </h2>
          )}
        </main>
      </section>
    </>
  );
};

export default SpecialOffer;
