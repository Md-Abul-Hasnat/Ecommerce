import React from "react";
import banner1 from "../assets/img/banner.png";
import banner2 from "../assets/img/banner2.png";
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
      className="w-screen h-[90vh] border"
    >
      <SwiperSlide>
        <main className="w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-5">
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
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-1">
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
          <article className="">
            <img src={banner2} alt="Banner Image" />
          </article>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="w-[90%] h-full mx-auto flex flex-col items-center justify-center gap-0">
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
            <img src={banner3} alt="Banner Image" />
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
