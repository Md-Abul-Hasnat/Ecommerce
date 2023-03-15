import React, { useState } from "react";
import Banner from "../components/Banner";
import img from "../assets/img/register.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const bannerInfo = {
    title: "REGISTER",
    currentPage: "register",
  };

  function updateUserInfo(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleCreateUser(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userInfo.username,
        })
          .then(() => {
            toast.success("User created successfully!");
            setUserInfo({
              username: "",
              email: "",
              password: "",
            });
          })
          .catch(() => {
            toast.error("Something went wrong while setting Username!");
          });
      })
      .catch((error) => {
        toast.error(`${error.message}!`);
      });
  }

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

          <form className="px-10 lg:px-5" onSubmit={handleCreateUser}>
            <h1 className="text-4xl font-semibold text-center mb-7">
              Register Form
            </h1>
            <input
              className="input-style"
              type="text"
              placeholder="username"
              value={userInfo.username}
              name="username"
              onChange={updateUserInfo}
              required
            />
            <br />
            <input
              className="input-style"
              type="email"
              placeholder="email"
              value={userInfo.email}
              name="email"
              onChange={updateUserInfo}
              required
            />
            <br />
            <input
              className="input-style"
              type="password"
              placeholder="password"
              value={userInfo.password}
              name="password"
              onChange={updateUserInfo}
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
