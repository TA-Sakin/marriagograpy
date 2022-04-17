import React from "react";

const Footer = () => {
  let year = new Date();
  return <div>Copyright &copy; {year.getFullYear()}</div>;
};

export default Footer;
