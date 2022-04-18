import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  let year = new Date();
  return (
    <div className="text-center w-100 mt-5 py-5 bg-dark text-secondary h-100 footer">
      <p>Marriagograpy &copy; {year.getFullYear()}. All rights reserved.</p>
      <div className="d-flex justify-content-center fs-5">
        <FaFacebook className="mx-2" />
        <FaInstagram className="mx-2" />
        <FaYoutube className="mx-2" />
        <FaTwitter className="mx-2" />
        <FaPinterest className="mx-2" />
      </div>
    </div>
  );
};

export default Footer;
