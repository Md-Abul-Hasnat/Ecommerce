import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ bannerInfo }) => {
  const { title, currentPage } = bannerInfo;

  return (
    <section className="h-[40vh] w-screen flex items-center justify-center bg-banner-bg">
      <main className="text-center flex flex-col gap-4">
        <h1 className=" text-3xl font-semibold">{title}</h1>
        <div>
          <Link
            className="text-gray-clr hover:text-orange-clr duration-300"
            to={"/"}
          >
            Home
          </Link>
          <span className="mx-2 "> >> </span>
          <p className="text-orange-clr inline-block"> {currentPage} </p>
        </div>
      </main>
    </section>
  );
};

export default Banner;
