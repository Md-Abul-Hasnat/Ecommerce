import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import { removeUser } from "../features/userSlice";
import img from "../assets/img/lamp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { getProducts } from "../features/productSlice";
import { addProduct } from "../features/ProductEditSlice";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState({
    id: null,
    value: false,
  });
  const { displayName, email, uid } = useSelector((state) => state.user.user);
  const { products } = useSelector((state) => state.products);

  const bannerInfo = {
    title: "PROFILE",
    currentPage: "Profile ",
  };

  function logout() {
    dispatch(removeUser());
    localStorage.setItem("user", JSON.stringify({}));
    toast.success("Successfully logged out!");
    navigate("/");
  }

  async function deleteProduct(docID) {
    setIsDelete({
      id: null,
      value: false,
    });
    await deleteDoc(doc(db, "Products", docID));
    toast.success("Product deleted");
    dispatch(getProducts());
  }

  function handleEditProduct(product) {
    dispatch(addProduct(product));
    navigate(`/edit/${product.docID}`);
  }

  return (
    <section>
      <Banner bannerInfo={bannerInfo} />

      <main className="w-screen py-20 ">
        {/* delete warning markup */}
        {isDelete.value && (
          <>
            <div className="w-screen h-screen overlay fixed top-0 left-0 z-10"></div>
            <div className="w-[70%] fixed centerItem z-20 bg-white px-5 py-10  sm:w-[380px] sm:py-12 lg:w-[450px] lg:py-14">
              <h1 className="text-sm text-center sm:text-lg">
                Do you want to delete this product?
              </h1>
              <div className="flex  mt-7 lg:justify-evenly ">
                <button
                  className="btn !bg-green-500"
                  onClick={() =>
                    setIsDelete({
                      id: null,
                      value: false,
                    })
                  }
                >
                  Cancel
                </button>
                <button
                  className="btn !bg-red-600"
                  onClick={() => deleteProduct(isDelete.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        )}
        <div className="w-[90%] max-w-screen-lg mx-auto sm:w-[70%]">
          <article className=" flex  justify-between items-center ">
            <div>
              <h1 className="text-orange-clr text-2xl font-semibold mb-2 sm:text-3xl ">
                {displayName}
              </h1>
              <h2 className="text-sm font-medium sm:text-xl">{email} </h2>
            </div>
            <div className="flex flex-col gap-y-4 ">
              <button
                className=" bg-red-500 text-white py-2 px-3  rounded-md text-xs  hover:-translate-y-1.5 duration-500 sm:px-5 sm:py-2.5 lg:mx-0 lg:px-7 lg:py-3 lg:text-sm"
                onClick={logout}
              >
                Logout
              </button>
              {uid === "vbvjlolqDERbZuamwGHGjp5SOfC2" && (
                <Link
                  to={"/create"}
                  className=" bg-green-500 text-white py-2 px-3 rounded-md text-xs  hover:-translate-y-1.5 duration-500 sm:px-5 sm:py-2.5 lg:mx-0 lg:px-7 lg:py-3 lg:text-sm"
                >
                  Add Product
                </Link>
              )}
            </div>
          </article>

          {uid === "vbvjlolqDERbZuamwGHGjp5SOfC2" ? (
            <article className="mt-10 border-t pt-5 ">
              <h1 className="text-lg font-medium sm:text-2xl">Products : </h1>
              <div className="mt-6 flex flex-col gap-y-5">
                {products.length === 0 ? (
                  <h1>No product availabe</h1>
                ) : (
                  products.map((product) => {
                    const { finalPrice, img, title, id, docID } = product;
                    return (
                      <article
                        key={id}
                        className="flex  items-center border-b pb-7 pt-5"
                      >
                        <img
                          className="w-[40%] h-24  object-cover lg:w-[30%]"
                          src={img}
                          alt="product image"
                        />
                        <div className="ml-6 flex flex-col gap-y-2 sm:gap-y-5  lg:ml-6">
                          <h1 className="sm:text-xl sm:font-medium">
                            {title}{" "}
                          </h1>
                          <h2 className="sm:text-xl ">${finalPrice}</h2>
                          <div className="flex mt-2 gap-x-4 lg:gap-x-6">
                            <FontAwesomeIcon
                              className={`text-sm sm:text-base cursor-pointer text-heading-clr hover:text-orange-clr duration-300`}
                              icon={faEdit}
                              onClick={() => handleEditProduct(product)}
                            />
                            <FontAwesomeIcon
                              className={`text-sm sm:text-base cursor-pointer text-red-500 
                            `}
                              icon={faTrash}
                              onClick={() =>
                                setIsDelete({
                                  id: docID,
                                  value: true,
                                })
                              }
                            />
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            </article>
          ) : (
            <article className="mt-10 border-t pt-5">
              <h1 className="text-lg font-medium">My orders : </h1>
              <div className="mt-10">
                <article className="flex  items-center gap-5">
                  <img className="w-40" src={img} alt="product image" />
                  <div>
                    <h1>Product name</h1>
                    <h2>$10.0</h2>
                  </div>
                </article>
              </div>
            </article>
          )}
        </div>
      </main>
    </section>
  );
};

export default Account;
