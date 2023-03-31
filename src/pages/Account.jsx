import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import { removeUser } from "../features/userSlice";
import img from "../assets/img/lamp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <>
      <Banner bannerInfo={bannerInfo} />

      <main className="w-screen py-20">
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
                {products.map((product) => {
                  const { finalPrice, img, title, id } = product;
                  return (
                    <article
                      key={+id}
                      className="flex  items-center  shadow-md py-5"
                    >
                      <img
                        className="w-[40%] h-24  object-cover lg:w-[30%]"
                        src={img}
                        alt="product image"
                      />
                      <div className="ml-6 flex flex-col gap-y-2 sm:gap-y-5  lg:ml-6">
                        <h1 className="sm:text-xl sm:font-medium">{title} </h1>
                        <h2 className="sm:text-xl ">${finalPrice}</h2>
                        <div className="flex mt-2 gap-x-4 lg:gap-x-6">
                          <FontAwesomeIcon
                            className={`text-sm sm:text-base cursor-pointer text-heading-clr `}
                            icon={faEdit}
                          />
                          <FontAwesomeIcon
                            className={`text-sm sm:text-base cursor-pointer text-red-500 
                          `}
                            icon={faTrash}
                          />
                        </div>
                      </div>
                    </article>
                  );
                })}
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
    </>
  );
};

export default Account;
