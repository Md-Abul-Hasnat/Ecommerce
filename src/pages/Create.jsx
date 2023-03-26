import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import img from "../assets/img/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { storage } from "../firebase/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Create = () => {
  const bannerInfo = {
    title: "ADD PRODUCT",
    currentPage: "Add Product",
  };

  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    img: "",
    title: "",
    cetagory: "",
    subCetagory: "",
    price: "",
    discount: "",
    finalPrice: "",
    quantity: "",
    description: "",
  });
  console.log(productDetails);

  const readImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  function uploadImage(e) {
    readImage(e);
    const storageRef = ref(
      storage,
      `images/${e.target.value} ${Math.random()}`
    );
    uploadBytes(storageRef, e.target.files[0]).then(() => {
      getDownloadURL(storageRef)
        .then((url) => {
          setProductDetails({ ...productDetails, img: `${url}` });
        })
        .catch(() => {
          toast.error("Image upload failed!!");
        });
    });
  }

  function updateProductDetails(e) {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    const discount = +productDetails.price * (+productDetails.discount / 100);

    setProductDetails({
      ...productDetails,
      finalPrice: productDetails.price - discount,
    });
  }, [productDetails.price, productDetails.discount]);

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <main className="w-screen py-12">
        <h1 className="text-center text-xl font-medium">Add New Product</h1>
        <form className="w-[85%] max-w-screen-md mx-auto mt-5">
          <div className="relative w-full h-full bg-gray-200">
            <input
              type="file"
              className=" h-48 w-full z-10 relative opacity-0 cursor-pointer sm:h-64 md:h-72"
              name="img"
              value={productDetails.img}
              onChange={uploadImage}
              accept="image"
            />
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={image || img}
              alt="product preview"
            />

            <FontAwesomeIcon
              className="z-0 text-3xl cursor-pointer absolute left-[47%] top-[40%] text-gray-500"
              icon={faPlusCircle}
            />
          </div>
          <p className="text-xl font-medium mt-6 mb-4 text-orange-clr">
            Product Details :
          </p>
          <div>
            <label className="mb-1 block">Product Name :</label>
            <input
              className="input-style !mb-4"
              type="text"
              placeholder="Dining Table"
              value={productDetails.title}
              onChange={updateProductDetails}
              name="title"
              required
            />
          </div>
          <div className="mt-1">
            <label className="mb-1 block"> Cetagory :</label>
            <select
              className="input-style"
              value={productDetails.cetagory}
              onChange={updateProductDetails}
              name="cetagory"
              required
            >
              <option value="">select a cetagory</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className="-mt-1">
            <label className="mb-1 block ">Sub Cetagory :</label>
            <select
              className="input-style"
              value={productDetails.subCetagory}
              onChange={updateProductDetails}
              name="subCetagory"
              required
            >
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
              value={productDetails.price}
              onChange={updateProductDetails}
              name="price"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Discount (%) :</label>
            <input
              className="input-style !mb-4"
              type="number"
              placeholder="10%"
              value={productDetails.discount}
              onChange={updateProductDetails}
              name="discount"
              required
            />
          </div>
          <div>
            <label className="mb-1 block">Final Price ($) :</label>
            <input
              className="input-style !mb-4"
              type="number"
              value={productDetails.finalPrice}
              onChange={updateProductDetails}
              name="finalPrice"
              readOnly
            />
          </div>
          <div>
            <label className="mb-1 block"> Quantity :</label>
            <input
              className="input-style !mb-4"
              type="number"
              placeholder="10"
              value={productDetails.quantity}
              onChange={updateProductDetails}
              name="quantity"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Description :</label>
            <textarea
              className="input-style h-52"
              placeholder="Descibe your product briefly"
              value={productDetails.description}
              onChange={updateProductDetails}
              name="description"
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
