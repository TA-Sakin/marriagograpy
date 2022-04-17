import React from "react";

const Footer = () => {
  let year = new Date();
  return (
    <div className="text-center mt-5 py-5 bg-dark text-secondary h-100">
      <p>Marriagograpy &copy; {year.getFullYear()}. All rights reserved.</p>
    </div>
  );
};

export default Footer;
