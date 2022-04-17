import React from "react";
import "./Footer.css";
const Footer = () => {
  let year = new Date();
  return (
    <div className="text-center w-100 mt-5 py-5 bg-dark text-secondary h-100 footer">
      <p>Marriagograpy &copy; {year.getFullYear()}. All rights reserved.</p>
    </div>
  );
};

export default Footer;
