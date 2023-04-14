import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { discount, finalPrice, img, title, docID } = data;

  return (
    <Link
      to={`/product/${docID}`}
      className="w-full  pt-10 pb-6 rounded-md  bg-footer-bg text-center cursor-pointer relative overflow-hidden group lg:hover:shadow-xl duration-500 "
    >
      <FontAwesomeIcon
        className={`bg-yellow-clr text-white p-2.5 text-sm rounded-full absolute right-[70px] top-4 duration-300  md:-top-10 md:group-hover:top-4 hover:bg-orange-clr `}
        icon={faEye}
      />
      <FontAwesomeIcon
        className={`bg-yellow-clr text-white text-sm p-2.5 rounded-full absolute right-[25px] top-4 duration-300 md:-top-10 md:group-hover:top-4 hover:bg-orange-clr `}
        icon={faCartArrowDown}
      />
      {discount && (
        <div className="bg-orange-clr text-white -rotate-45 absolute top-8 -left-12 py-2 w-[200px]">
          {discount}% off
        </div>
      )}
      <div className="w-full ">
        <img
          className="w-[200px] mx-auto mt-10 sm:w-[80%] sm:h-[140px] sm:object-cover lg:w-[85%]"
          src={img}
          alt="Product image"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-normal text-heading-clr mb-1">{title}</h1>
        <p className="text-orange-clr text-lg">${finalPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
