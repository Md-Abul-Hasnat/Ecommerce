import React from "react";
import Banner from "../components/Banner";
import img from "../assets/img/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const bannerInfo = {
    title: "LOGIN",
    currentPage: "login",
  };

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <section className="w-screen max-w-screen-lg h-fit my-16 mx-auto lg:my-20">
        <main className="w-[90%] h-full mx-auto   grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-5">
          <div className="w-full ">
            <img className="w-[90%] mx-auto md:w-full" src={img} alt="image" />
            <p className="text-center">
              Don't have an account ?
              <Link className="text-orange-clr ml-2" to={"/register"}>
                Create Account
              </Link>
            </p>
          </div>

          <form className="px-10 lg:px-5">
            <h1 className="text-4xl font-semibold text-center mb-7">
              Login Form
            </h1>

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
              Login
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default Login;
