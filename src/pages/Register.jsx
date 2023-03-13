import React from "react";
import Banner from "../components/Banner";
import img from "../assets/img/register.png";
import { Link } from "react-router-dom";

const Register = () => {
  const bannerInfo = {
    title: "REGISTER",
    currentPage: "register",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <section className="w-screen max-w-screen-lg h-fit my-16 mx-auto lg:my-20">
        <main className="w-[90%] h-full mx-auto   grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-5">
          <div className="w-full ">
            <img
              className="w-[90%] mx-auto mb-3 md:w-full"
              src={img}
              alt="image"
            />
            <p className="text-center">
              Already have an account ?
              <Link className="text-orange-clr ml-2" to={"/login"}>
                Login
              </Link>
            </p>
          </div>

          <form className="px-10 lg:px-5">
            <h1 className="text-4xl font-semibold text-center mb-7">
              Register Form
            </h1>
            <input
              className="input-style"
              type="text"
              placeholder="username"
              required
            />
            <br />
            <input
              className="input-style"
              type="email"
              placeholder="email"
              required
            />
            <br />
            <input
              className="input-style"
              type="password"
              placeholder="password"
              required
            />
            <br />
            <button className="submit-btn" type="submit">
              Register
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default Register;
