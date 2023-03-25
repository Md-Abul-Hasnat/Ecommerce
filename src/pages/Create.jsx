import React from "react";
import Banner from "../components/Banner";
import img from "../assets/img/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Create = () => {
  const bannerInfo = {
    title: "ADD PRODUCT",
    currentPage: "Add Product",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <main className="w-screen py-12">
        <h1 className="text-center text-xl font-medium ">Add New Product</h1>
        <form className="w-[85%] mx-auto mt-5">
          <div className="relative w-full h-full ">
            <input
              type="file"
              className=" h-52 w-full z-10 relative opacity-0  cursor-pointer"
            />
            <img
              src={img}
              className="w-full h-48 object-cover absolute  top-0 z-0 border border-gray-300 bg-gray-100"
              alt="placeholder"
            />
            <FontAwesomeIcon
              className="pr-5 mt-2 text-2xl cursor-pointer absolute -right-2 bottom-6 text-gray-500"
              icon={faCloudArrowUp}
            />
          </div>
          <p className="text-xl font-medium mt-3 mb-4 text-orange-clr">
            Product Details :
          </p>
          <div>
            <label className="mb-1 block">Product Name :</label>
            <input
              className="input-style !mb-4"
              type="text"
              placeholder="Dining Table"
              required
            />
          </div>
          <div className="mt-1">
            <label className="mb-1 block"> Cetagory :</label>
            <select className="input-style" required>
              <option value="">select a cetagory</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className="-mt-1">
            <label className="mb-1 block ">Sub Cetagory :</label>
            <select className="input-style" required>
              <option value="">select a Sub Cetagory</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block">Regular Price ($):</label>
            <input
              className="input-style !mb-4"
              type="number"
              placeholder="25.5$"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Discount (%) :</label>
            <input
              className="input-style !mb-4"
              type="number"
              placeholder="10%"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Final Price ($) :</label>
            <input
              className="input-style !mb-4"
              type="number"
              value={5}
              readOnly
            />
          </div>
          <div>
            <label className="mb-1 block"> Quantity :</label>
            <input
              className="input-style !mb-4"
              type="number"
              placeholder="10"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Description :</label>
            <textarea
              className="input-style h-52"
              placeholder="Descibe your product briefly"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className=" w-full py-2.5 rounded-sm bg-orange-clr text-white hover:-translate-y-1 duration-300 cursor-pointer hover:shadow-xl"
          />
        </form>
      </main>
    </>
  );
};

export default Create;
