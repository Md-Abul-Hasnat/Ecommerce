import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/img/banner1.jpeg";
import banner2 from "../assets/img/banner2.jpeg";
import banner3 from "../assets/img/banner3.jpg";
import product1 from "../assets/img/lamp.webp";
import product2 from "../assets/img/wood chair.webp";
import product3 from "../assets/img/chair.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HomeHero = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        speed={1800}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-screen h-[100vh] "
        style={{
          "--swiper-pagination-color": "#ff6000",
          "--swiper-pagination-bullet-size": "9px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide>
          <main className=" w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5  lg:flex-row xl:w-[80%] ">
            <article className="text-center lg:basis-[80%] lg:text-left lg:mb-5 ">
              <h1 className="text-4xl font-black mb-3 text-heading-clr lg:text-6xl lg:font-semibold lg:mb-5">
                BEST DEAL
              </h1>
              <h2 className="text-xl font-semibold mb-2 text-heading-clr lg:text-3xl lg:font-normal lg:mb-3 xl:text-4xl xl:leading-[50px]">
                MODERN COMFORTABLE BED
              </h2>
              <p className="mb-5 text-orange-clr lg:text-lg">
                Get upto 50% off today Only!
              </p>
              <Link to={"/shop"} className="btn">
                SHOP NOW
              </Link>
            </article>
            <article className="lg:basis-full ">
              <img
                className="sm:h-[300px] lg:h-auto"
                src={banner1}
                alt="Banner Image"
              />
            </article>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main className=" w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5  lg:flex-row xl:w-[80%] ">
            <article className="text-center lg:basis-[80%] lg:text-left lg:mb-5 ">
              <h1 className="text-4xl font-black mb-3 text-heading-clr lg:text-6xl lg:font-semibold lg:mb-5">
                BEST DEAL
              </h1>
              <h2 className="text-xl font-semibold mb-2 text-heading-clr lg:text-3xl lg:font-normal lg:mb-3 xl:text-4xl xl:leading-[50px]">
                MODERN COMFORTABLE SOFA
              </h2>
              <p className="mb-5 text-orange-clr lg:text-lg">
                Get upto 50% off today Only!
              </p>
              <Link to={"/shop"} className="btn">
                SHOP NOW
              </Link>
            </article>
            <article className="lg:basis-full ">
              <img
                className="sm:h-[300px] lg:h-auto"
                src={banner3}
                alt="Banner Image"
              />
            </article>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main className=" w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5  lg:flex-row xl:w-[80%] ">
            <article className="text-center lg:basis-[80%] lg:text-left lg:mb-5 ">
              <h1 className="text-4xl font-black mb-3 text-heading-clr lg:text-6xl lg:font-semibold lg:mb-5">
                BEST DEAL
              </h1>
              <h2 className="text-xl font-semibold mb-2 text-heading-clr lg:text-3xl lg:font-normal lg:mb-3 xl:text-4xl xl:leading-[50px]">
                COMFORTABLE SOFA
              </h2>
              <p className="mb-5 text-orange-clr lg:text-lg">
                Get upto 30% off today Only!
              </p>
              <Link to={"/shop"} className="btn">
                SHOP NOW
              </Link>
            </article>
            <article className="lg:basis-full ">
              <img
                className="sm:h-[300px] lg:h-auto"
                src={banner2}
                alt="Banner Image"
              />
            </article>
          </main>
        </SwiperSlide>
      </Swiper>
      <div className="w-screen grid grid-cols-2 gap-3 mt-8 sm:grid-cols-3 ">
        <Link to={"/shop"}>
          <img src={product1} alt="product image" />
        </Link>
        <Link to={"/shop"}>
          <img src={product2} alt="product image" />
        </Link>
        <Link className="w-screen sm:w-full" to={"/shop"}>
          <img className="w-full " src={product3} alt="product image" />
        </Link>
      </div>
    </>
  );
};

export default HomeHero;
