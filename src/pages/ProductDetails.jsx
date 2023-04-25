import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { db } from "../firebase/firebase.config";
import Banner from "../components/Banner";

const ProductDetails = () => {
  const bannerInfo = {
    title: "Product",
    currentPage: "product ",
  };

  const location = useLocation();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productID = location.pathname.split("/")[2];

    async function getProductData() {
      const docRef = doc(db, "Products", productID);
      const docSnap = await getDoc(docRef);

      setProductData(docSnap.data());
      setLoading(false);
    }

    getProductData();
  }, []);

  const {
    img,
    price,
    cetagory,
    description,
    finalPrice,
    quantity,
    subCetagory,
    title,
  } = productData;

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <main className="w-screen py-20 ">
        <div className="w-[90%] max-w-screen-xl mx-auto grid grid-cols-1 gap-10 sm:w-[80%] lg:w-[90%] lg:grid-cols-2 lg:gap-6">
          <article className="w-full ">
            <img
              className="w-full  md:h-[320px] md:w-[450px] mx-auto lg:w-full object-contain lg:h-[400px]"
              src={img}
              alt="product preview"
            />
          </article>
          <article>
            <p className="bg-gray-200 w-fit px-4 py-1  text-xs mb-4 font-medium">
              {quantity} In Stock
            </p>
            <h1 className="text-2xl font-medium mb-3 "> {title} </h1>
            <p className="mb-3.5 text-[13px] tracking-wide font-semibold">
              CETAGORY :
              <span className="font-medium text-[15px]  text-gray-clr">
                {cetagory}
              </span>
            </p>

            <h2 className="text-2xl text-orange-clr font-semibold mb-3">
              ${finalPrice}
              <span className="ml-4 text-base text-gray-400 line-through">
                ${price}
              </span>
            </h2>
            <p className="font-sans text-sm leading-6 text-justify md:text-base md:leading-7">
              {description}
            </p>

            <div className="flex gap-7 mt-7">
              <article className="flex items-center gap-7 border px-3 py-1 lg:px-5">
                <button className="text-3xl mb-1 hover:text-orange-clr duration-300">
                  -
                </button>
                <p className="text-lg">0</p>
                <button className="text-xl hover:text-orange-clr duration-300">
                  +
                </button>
              </article>
              <article>
                <button className="btn !py-3.5 !px-7">ADD TO CART</button>
              </article>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
