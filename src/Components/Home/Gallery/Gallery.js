import React from "react";
import gallery1 from "../../../Assets/images/Gallery/gallery-1.png";
import gallery2 from "../../../Assets/images/Gallery/gallery-2.png";
import gallery4 from "../../../Assets/images/Gallery/gallery-4.png";
import gallery10 from "../../../Assets/images/Gallery/gallery-10.jpg";
import gallery11 from "../../../Assets/images/Gallery/gallery-11.jpg";
import gallery12 from "../../../Assets/images/Gallery/gallery-12.png";
const Gallery = () => {
  return (
    <div className="container">
      <div className="my-5">
        <h3 className="text-center">Gallery</h3>
        <p className="text-center text-secondary px-5">
          We're So Excited To Be In The Center Of The Happiest Day In People's
          Lives, And This Energy Drives Us Forward!
          <br /> Look Around, You Can Find The Full Wedding Photo Galleries In
          Our Blog, Have Fun!
        </p>
      </div>
      <div className="row g-2">
        <div className="col-lg-8">
          <img src={gallery1} className="w-100 h-100" alt="" />
        </div>
        <div className="col-lg-4">
          <img src={gallery4} className="w-100" alt="" />
        </div>
        <div className="col-lg-12">
          <img src={gallery12} className="w-100" alt="" />
        </div>
        <div className="col-lg-4">
          <img src={gallery2} className="w-100" alt="" />
        </div>
        <div className="col-lg-4">
          <img className="w-100" src={gallery10} alt="" />
        </div>
        <div className="col-lg-4">
          <img className="w-100" src={gallery11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
