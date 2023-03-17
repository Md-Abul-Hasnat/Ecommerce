import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/img/product11.webp";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link
      to={"/"}
      className="w-full px-4 py-10 rounded-md  bg-footer-bg text-center cursor-pointer relative overflow-hidden group "
    >
      <FontAwesomeIcon
        className={`bg-yellow-clr text-white p-2.5 text-sm rounded-full absolute right-[100px] top-4 duration-300 md:-top-10 md:group-hover:top-4 hover:bg-orange-clr`}
        icon={faEye}
      />
      <FontAwesomeIcon
        className={`bg-yellow-clr text-white text-sm p-2.5 rounded-full absolute right-[50px] top-4 duration-300 md:-top-10 md:group-hover:top-4 hover:bg-orange-clr `}
        icon={faCartArrowDown}
      />
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
