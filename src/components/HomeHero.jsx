import React from "react";
import banner1 from "../assets/img/banner.png";
import banner2 from "../assets/img/banner.webp";
import banner3 from "../assets/img/banner3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeHero = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="w-screen h-[90vh] "
      style={{
        "--swiper-pagination-color": "#ff6000",
        "--swiper-pagination-bullet-size": "9px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <SwiperSlide>
        <main className=" w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5 sm:gap-0 lg:flex-row xl:w-[80%] ">
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
            <button className="btn">SHOP NOW</button>
          </article>
          <article className="lg:basis-full ">
            <img
              className="md:h-[300px] lg:h-auto"
              src={banner1}
              alt="Banner Image"
            />
          </article>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className=" w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5 sm:gap-0 lg:flex-row xl:w-[80%] ">
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
            <button className="btn">SHOP NOW</button>
          </article>
          <article className="lg:basis-full ">
            <img
              className="md:h-[300px] lg:h-auto"
              src={banner2}
              alt="Banner Image"
            />
          </article>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className=" w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5 sm:gap-0 lg:flex-row xl:w-[80%] ">
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
            <button className="btn">SHOP NOW</button>
          </article>
          <article className="lg:basis-full ">
            <img
              className="md:h-[300px] lg:h-auto"
              src={banner3}
              alt="Banner Image"
            />
          </article>
        </main>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;

{
  /* <main className="w-[90%] h-full mx-auto grid grid-cols-1 gap-6 place-content-center">
        <article className="text-center">
          <h1 className="text-4xl font-black mb-3 text-heading-clr">
            BEST DEAL
          </h1>
          <h2 className="text-xl font-semibold mb-2 text-heading-clr">
            MODERN COMFORTABLE SOFA
          </h2>
          <p className="mb-5 text-orange-clr">Get upto 50% off today Only!</p>
          <button className="btn">SHOP NOW</button>
        </article>
        <article>
          <img src={banner1} alt="Banner Image" />
        </article>
      </main> */
}
