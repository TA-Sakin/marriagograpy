import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Assets/images/banner-1.png";
import banner2 from "../../../Assets/images/banner-2.png";
import banner3 from "../../../Assets/images/banner-3.png";
import gallery10 from "../../../Assets/images/Gallery/gallery-10.jpg";
import "./Banner.css";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="banner">
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Enjoy The Moment</h3>
          <p>
            We discover ourselves in the midst of something that's why
            <br />
            we try to capture that moment for you to reminisce.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Enjoy The Moment</h3>
          <p>
            We discover ourselves in the midst of something that's why
            <br />
            we try to capture that moment for you to reminisce.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Enjoy The Moment</h3>
          <p>
            We discover ourselves in the midst of something that's why
            <br />
            we try to capture that moment for you to reminisce.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
