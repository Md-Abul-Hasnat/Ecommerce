import React, { useState } from "react";
import Banner from "../components/Banner";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const bannerInfo = {
    title: "Reset Password",
    currentPage: "reset password",
  };

  function handleResetPass(e) {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Password reset email sent to ${email}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <section>
        <main className="w-screen my-20">
          <form
            className="w-[70vw] mx-auto max-w-md"
            onSubmit={handleResetPass}
          >
            <h1 className="mb-3 font-semibold">Write your email</h1>
            <input
              className="input-style"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="submit-btn mx-auto block  " type="submit">
              Submit
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default ResetPassword;
