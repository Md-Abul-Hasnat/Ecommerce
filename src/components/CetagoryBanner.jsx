import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/sub-banner.webp";
import product1 from "../assets/img/product3.webp";
import product2 from "../assets/img/product4.webp";
import product3 from "../assets/img/product14.webp";
import product4 from "../assets/img/product2.webp";

const CetagoryBanner = () => {
  return (
    <section className="w-screen  py-20 mt-24 bg-banner-bg ">
      <main className="w-[85%] max-w-screen-2xl 2xl:max-h-screen mx-auto grid grid-cols-1 gap-y-12 md:w-[90%]  lg:grid-cols-[37%,63%] lg:gap-x-5 ">
        <article>
          <img
            className="w-full md:h-[650px] md:object-cover lg:h-auto "
            src={banner}
            alt="banner image"
          />
        </article>
        <article className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-5 lg:gap-y-5">
          <div className="grid grid-cols-1 bg-white p-5 shadow-sm duration-300 hover:shadow-lg lg:grid-cols-2 lg:gap-x-3 lg:p-3 lg:pb-0 lg:place-items-center">
            <img className="mx-auto" src={product1} alt="product image" />
            <div>
              <h1 className="text-xl mb-3 font-medium lg:text-sm xl:text-base">
                Comfortable Table
              </h1>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem ipsum dol </p>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem, ipsum</p>
              <p className="text-gray-clr mb-2 lg:text-xs"> ipsum dolor </p>
              <p className="text-gray-clr mb-7 lg:text-xs">Lorem ipsum dolor</p>

              <Link
                className="text-right block w-fit ml-auto mt-4 text-orange-clr underline lg:text-sm"
                to={"/"}
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-white p-5 shadow-sm duration-300 hover:shadow-lg lg:grid-cols-2 lg:gap-x-3 lg:p-3 lg:pb-0 lg:place-items-center">
            <img className="mx-auto" src={product2} alt="product image" />
            <div>
              <h1 className="text-xl mb-3 font-medium lg:text-sm xl:text-base">
                Modern Chair
              </h1>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem ipsum dol </p>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem, ipsum</p>
              <p className="text-gray-clr mb-2 lg:text-xs"> ipsum dolor </p>
              <p className="text-gray-clr mb-7 lg:text-xs">Lorem ipsum dolor</p>

              <Link
                className="text-right block w-fit ml-auto mt-4 text-orange-clr underline lg:text-sm"
                to={"/"}
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-white p-5 shadow-sm duration-300 hover:shadow-lg lg:grid-cols-2 lg:gap-x-3 lg:p-3 lg:pb-0 lg:place-items-center">
            <img className="mx-auto" src={product3} alt="product image" />
            <div>
              <h1 className="text-xl mb-3 font-medium lg:text-sm xl:text-base">
                Modern Dining Table
              </h1>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem ipsum dol </p>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem, ipsum</p>
              <p className="text-gray-clr mb-2 lg:text-xs"> ipsum dolor </p>
              <p className="text-gray-clr mb-7 lg:text-xs">Lorem ipsum dolor</p>

              <Link
                className="text-right block w-fit ml-auto mt-4 text-orange-clr underline lg:text-sm"
                to={"/"}
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 bg-white p-5 shadow-sm duration-300 hover:shadow-lg lg:grid-cols-2 lg:gap-x-3 lg:p-3 lg:pb-0 lg:place-items-center">
            <img className="mx-auto" src={product4} alt="product image" />
            <div>
              <h1 className="text-xl mb-3 font-medium lg:text-sm xl:text-base">
                Comfortable Sofa
              </h1>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem ipsum dol </p>
              <p className="text-gray-clr mb-2 lg:text-xs">Lorem, ipsum</p>
              <p className="text-gray-clr mb-2 lg:text-xs"> ipsum dolor </p>
              <p className="text-gray-clr mb-7 lg:text-xs">Lorem ipsum dolor</p>

              <Link
                className="text-right block w-fit ml-auto mt-4 text-orange-clr underline lg:text-sm"
                to={"/"}
              >
                View All
              </Link>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default CetagoryBanner;
