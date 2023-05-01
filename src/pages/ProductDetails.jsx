import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { db } from "../firebase/firebase.config";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProductDetails = () => {
  const bannerInfo = {
    title: "Product",
    currentPage: "product ",
  };

  const location = useLocation();
  const { products } = useSelector((state) => state.products);
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const productID = location.pathname.split("/")[2];

    async function getProductData() {
      const docRef = doc(db, "Products", productID);
      const docSnap = await getDoc(docRef);

      setProductData(docSnap.data());
      setIsLoading(false);
    }

    getProductData();
  }, [location.pathname]);

  const {
    img,
    price,
    cetagory,
    description,
    finalPrice,
    quantity,
    discount,
    title,
    id,
  } = productData;

  const suggestedProduct = products.filter(
    (product) => product.cetagory === cetagory && product.id != id
  );

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
            <div className="flex gap-3">
              <p className="bg-gray-200 w-fit px-4 py-1  text-xs mb-4 font-medium">
                {quantity} In Stock
              </p>
              {discount > 0 && (
                <p className="bg-gray-200 w-fit px-4 py-1  text-xs mb-4 font-medium">
                  {discount}% off
                </p>
              )}
            </div>
            <h1 className="text-2xl font-medium mb-3 lg:text-3xl"> {title} </h1>
            <p className="mb-3.5 text-[13px] tracking-wide font-semibold">
              CETAGORY :
              <span className="font-medium text-[15px] ml-1 text-gray-clr">
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

        {/* swiper section */}
        <div className="mt-24 w-[90%] mx-auto max-w-screen-xl  sm:w-[80%] lg:w-[90%] ">
          <h1 className=" border-b pb-3  text-xl font-medium ">
            You May Also Like
          </h1>

          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            modules={[Pagination]}
            className="w-full "
            style={{
              "--swiper-pagination-color": "#ff6000",
              "--swiper-pagination-bullet-size": "9px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {suggestedProduct.map((product) => (
              <SwiperSlide
                key={product.id}
                className="overflow-hidden mt-10 bg-footer-bg  mb-16 "
              >
                <ProductCard data={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
