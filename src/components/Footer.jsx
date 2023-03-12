import React from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faHeadphones,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-screen mt-52 pt-5 pb-8 bg-footer-bg ">
      <main className="w-[90%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-4 ">
        <article>
          <Link to={"/"}>
            <img className="w-48 mb-5 -ml-2 md:mb-3" src={logo} alt="logo" />
          </Link>
          <p className="text-gray-clr">
            Namkand sodales vel online best prices Amazon Check out ethnic wear,
            formal wear western wear Blood Pressure Rate Monito, Lorem ipsum
            dolor sit amet madan netra...
          </p>
          <div className="flex gap-7 mt-6">
            <FontAwesomeIcon className="footer-icon " icon={faFacebook} />
            <FontAwesomeIcon className="footer-icon " icon={faInstagram} />
            <FontAwesomeIcon className="footer-icon " icon={faLinkedin} />
            <FontAwesomeIcon className="footer-icon " icon={faTwitter} />
            <FontAwesomeIcon className="footer-icon " icon={faYoutube} />
          </div>
        </article>
        <article className="md:mt-5">
          <h2 className="font-medium text-lg mb-3">CUSTOMER SERVICE</h2>
          <div className="flex flex-col gap-2 text-gray-clr">
            <Link to={"/"}>Help Center</Link>
            <Link to={"/"}>Returns </Link>
            <Link to={"/"}>Product Recalls </Link>
            <Link to={"/"}>Accessibility </Link>
            <Link to={"/"}>Contact Us </Link>
          </div>
        </article>
        <article className="md:mt-5">
          <h2 className="font-medium text-lg mb-3">QUICK LINKS</h2>
          <div className="flex flex-col gap-2 text-gray-clr">
            <Link to={"/"}>Return Policy </Link>
            <Link to={"/"}>Terms Of Use </Link>
            <Link to={"/"}> Security</Link>
            <Link to={"/"}>About us </Link>
            <Link to={"/"}>Store Pickup </Link>
          </div>
        </article>
        <article className="md:mt-5">
          <h2 className="font-medium text-lg mb-3"> CONTACT US</h2>
          <div className="flex flex-col gap-3 text-gray-clr">
            <p>
              <FontAwesomeIcon className="mr-4 " icon={faLocationDot} />
              W898 RTower Stat, Suite 56
            </p>
            <p>
              <FontAwesomeIcon className="mr-4 " icon={faHeadphones} />
              458-965-3224
            </p>
            <p>
              <FontAwesomeIcon className=" mr-4" icon={faEnvelope} />
              Support@info.Com
            </p>
            <p>
              <FontAwesomeIcon className=" mr-4" icon={faMobile} />
              458-965-3224
            </p>
          </div>
        </article>
      </main>
      <div className="w-full text-center mt-10 bg-heading-clr py-4">
        <small className="text-gray-300">
          Copyright © {year} - Ecommerce All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
