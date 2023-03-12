import React, { useState } from "react";
import logo from "../assets/img/logo2.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <section className="w-full relative ">
      <main className="w-[90%] mx-auto py-2 flex  items-center justify-between ">
        <Link to={"/"}>
          <img className="w-40 lg:w-52" src={logo} alt="logo" />
        </Link>

        <nav
          className={`w-[100%] h-screen absolute top-0   flex flex-col space-y-7 pl-3 pt-1 bg-heading-clr duration-500 ${
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
          <NavLink className="navLink" to={"/"}>
            HOME
          </NavLink>
          <NavLink className="navLink" to={"/"}>
            CART
          </NavLink>
          <NavLink className="navLink" to={"/"}>
            ABOUT US
          </NavLink>
          <NavLink className="navLink" to={"/"}>
            SHOP
          </NavLink>
          <NavLink className="navLink" to={"/"}>
            CONTACT
          </NavLink>
        </nav>

        <article className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:block">
            <NavLink className="navLink" to={"/"}>
              HOME
            </NavLink>
            <NavLink className="navLink" to={"/"}>
              CART
            </NavLink>
            <NavLink className="navLink" to={"/"}>
              ABOUT US
            </NavLink>
            <NavLink className="navLink" to={"/"}>
              SHOP
            </NavLink>
            <NavLink className="navLink" to={"/"}>
              CONTACT
            </NavLink>
          </nav>
          <div className="space-x-5 flex mt-2 md:mt-0">
            <div className="relative ">
              <FontAwesomeIcon
                className={`text-2xl cursor-pointer ${
                  showNav ? "text-white " : ""
                } duration-300`}
                icon={faCartArrowDown}
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
    </section>
  );
};

export default Navbar;
