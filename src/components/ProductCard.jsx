import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/img/product11.webp";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link
      to={"/"}
      className="w-full  py-10 rounded-md  bg-footer-bg text-center cursor-pointer relative overflow-hidden group lg:hover:shadow-xl duration-500 "
    >
      <FontAwesomeIcon
        className={`bg-yellow-clr text-white p-2.5 text-sm rounded-full absolute right-[70px] top-4 duration-300  md:-top-10 md:group-hover:top-4 hover:bg-orange-clr `}
        icon={faEye}
      />
      <FontAwesomeIcon
        className={`bg-yellow-clr text-white text-sm p-2.5 rounded-full absolute right-[25px] top-4 duration-300 md:-top-10 md:group-hover:top-4 hover:bg-orange-clr `}
        icon={faCartArrowDown}
      />
      <div className="bg-orange-clr text-white -rotate-45 absolute top-8 -left-12 py-2 w-[200px]">
        10% off
      </div>
      <div className="w-full ">
        <img className="h-[200px] mx-auto" src={p1} alt="Product image" />
      </div>
      <div className="mt-2">
        <h1 className="text-2xl font-normal text-heading-clr mb-1">
          Product name
        </h1>
        <p className="text-orange-clr text-lg">$10.00</p>
      </div>
    </Link>
  );
};

export default ProductCard;
