import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartArrowDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/img/product1.webp";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);

  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }
  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <section className="w-full relative z-10">
      <main className="w-[90%] mx-auto py-2 flex  items-center justify-between ">
        <Link to={"/"}>
          <img className="w-40 lg:w-52" src={logo} alt="logo" />
        </Link>

        <nav
          className={`w-[100%] h-screen fixed top-0   flex flex-col space-y-7 pl-3 pt-1 bg-heading-clr duration-500 ${
            showNav ? "right-[0%]" : "right-[100%]"
          } md:hidden `}
        >
          <div className="flex items-center justify-between ">
            <Link to={"/"}>
              <img className="w-40 " src={logo} alt="logo" />
            </Link>
            <FontAwesomeIcon
              className="pr-5 mt-2 text-2xl cursor-pointer   text-white "
              icon={faXmark}
              onClick={toggleNav}
            />
          </div>
          <form className="w-full ">
            <input
              className="p-2 w-[90%] mx-auto block outline-none mb-5 rounded-md"
              type="text"
              placeholder="Search for..."
            />
          </form>
          <NavLink className="navLink" to={"/"} onClick={toggleNav}>
            HOME
          </NavLink>
          <NavLink className="navLink" to={"/cart"} onClick={toggleNav}>
            CART
          </NavLink>
          <NavLink className="navLink" to={"/about"} onClick={toggleNav}>
            ABOUT US
          </NavLink>
          <NavLink className="navLink" to={"/shop"} onClick={toggleNav}>
            SHOP
          </NavLink>
          {user.uid ? (
            <Link
              to={"/account"}
              className="navLink font-sans"
              onClick={toggleNav}
            >
              ACCOUNT
            </Link>
          ) : (
            <NavLink className="navLink" to={"/login"} onClick={toggleNav}>
              LOGIN
            </NavLink>
          )}
        </nav>

        <article className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:block ">
            <NavLink className="navLink" to={"/"}>
              HOME
            </NavLink>
            <NavLink className="navLink" to={"/cart"}>
              CART
            </NavLink>
            <NavLink className="navLink" to={"/about"}>
              ABOUT US
            </NavLink>
            <NavLink className="navLink" to={"/shop"}>
              SHOP
            </NavLink>
            {user.uid ? (
              <Link to={"/account"} className="navLink">
                <FontAwesomeIcon className="text-xl" icon={faUser} />
              </Link>
            ) : (
              <NavLink className="navLink" to={"/login"}>
                LOGIN
              </NavLink>
            )}
          </nav>
          <div className="space-x-5 flex mt-2 md:mt-0">
            <div className="relative ">
              <FontAwesomeIcon
                className={`text-2xl cursor-pointer ${
                  showNav ? "text-white " : ""
                } duration-300`}
                icon={faCartArrowDown}
                onClick={toggleCart}
              />
              <p className="absolute -top-3 -right-2 bg-yellow-clr py-0 px-1 rounded-full text-center text-sm">
                9
              </p>
            </div>
            <FontAwesomeIcon
              className="text-2xl cursor-pointer md:hidden"
              icon={faBars}
              onClick={toggleNav}
            />
          </div>
        </article>
      </main>
      {/* shopping cart */}
      <article
        className={`min-h-screen w-[75%] pt-4 pb-8 px-4 bg-white fixed top-0  ${
          showCart ? "right-[0%]" : "right-[-80%]"
        } duration-500 md:w-[60%]  lg:w-[40%] z-20`}
      >
        <div className="flex justify-between items-center pb-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <FontAwesomeIcon
            className="pr-5  text-2xl cursor-pointer   text-black "
            icon={faXmark}
            onClick={toggleCart}
          />
        </div>
        <main>
          <div className="flex  items-center justify-between mt-5 border-b border-gray-100 pb-5">
            <img className="w-20 h-20" src={img} alt="product" />
            <p className="text-base font-semibold">Product 1</p>
            <small>
              1 * <span className="text-green-500">$1000</span>
            </small>
            <FontAwesomeIcon
              className="pr-5  text-2xl cursor-pointer   text-red-600 "
              icon={faXmark}
            />
          </div>
          <div className="flex  items-center justify-between mt-5 border-b border-gray-100 pb-5">
            <img className="w-20 h-20" src={img} alt="product" />
            <p className="text-base font-semibold">Product 1</p>
            <small>
              1 * <span className="text-green-500">$1000</span>
            </small>
            <FontAwesomeIcon
              className="pr-5  text-2xl cursor-pointer   text-red-600 "
              icon={faXmark}
            />
          </div>
          <div className="flex  items-center justify-between mt-5 border-b border-gray-100 pb-5">
            <img className="w-20 h-20" src={img} alt="product" />
            <p className="text-base font-semibold">Product 1</p>
            <small>
              1 * <span className="text-green-500">$1000</span>
            </small>
            <FontAwesomeIcon
              className="pr-5  text-2xl cursor-pointer   text-red-600 "
              icon={faXmark}
            />
          </div>
        </main>
        <div className="mt-5">
          <h2 className="text-right mr-5 font-semibold">
            Subtotal : <span className="text-green-500 ">$26.00</span>
          </h2>
          <div className=" flex gap-5 items-center justify-center mt-7">
            <button className="bg-yellow-clr text-white py-2 px-5 rounded-full duration-500 hover:bg-green-500">
              View cart
            </button>
            <button className="bg-yellow-clr text-white py-2 px-5 rounded-full duration-500 hover:bg-green-500">
              Checkout
            </button>
          </div>
        </div>
      </article>
      {showCart && (
        <div
          className={`h-screen w-screen fixed top-0 right-0 z-10 overlay`}
          onClick={toggleCart}
        ></div>
      )}
    </section>
  );
};

export default Navbar;
