import React, { useState } from "react";
import Banner from "../components/Banner";
import img from "../assets/img/login.jpg";
import { json, Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const bannerInfo = {
    title: "LOGIN",
    currentPage: "login",
  };

  function updateUserInfo(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(" successfully logged in!");
        dispatch(addUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        setUserInfo({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <section className="w-screen max-w-screen-lg h-fit my-16 mx-auto lg:my-20">
        <main className="w-[90%] h-full mx-auto   grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-5">
          <div className="w-full  md:-mt-5 lg:-mt-7">
            <img className="w-[90%] mx-auto md:w-full" src={img} alt="image" />
            <p className="text-center">
              Don't have an account ?
              <Link className="text-orange-clr ml-2" to={"/register"}>
                Create Account
              </Link>
            </p>
          </div>

          <form className=" pt-4 px-10 lg:px-5 lg:pt-6" onSubmit={handleLogin}>
            <h1 className="text-4xl font-semibold text-center mb-7">
              Login Form
            </h1>

            <input
              className="input-style"
              type="email"
              placeholder="email"
              name="email"
              value={userInfo.email}
              onChange={updateUserInfo}
              required
            />
            <br />
            <input
              className="input-style"
              type="password"
              placeholder="password"
              name="password"
              value={userInfo.password}
              onChange={updateUserInfo}
              required
            />
            <br />
            <div className="flex justify-between">
              <button className="submit-btn inline-block" type="submit">
                Login
              </button>
              <Link
                to={"/resetpassword"}
                className="cursor-pointer text-right inline-block hover:text-orange-clr duration-300 "
              >
                Forgot password ?
              </Link>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export default Login;
