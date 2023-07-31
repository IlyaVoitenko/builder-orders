import React, { useRef } from "react";
import Slider from "react-slick";
import BtnsMove from './BtnsMove'
import "./style.css";

import first from "./first.jpg";
import second from "./second.jpg";
import three from "./three.jpg";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const sliderRef = useRef(null);


  const images = [{ src: first }, { src: second }, { src: three }];
  return (
    <div className="relative ">
      <Slider ref={sliderRef} {...settings} >
        {images.map((item, index) => (
          <img src={item.src} key={index} className="h-96 " alt="logo" />
        ))}
      </Slider>
    <BtnsMove sliderRef={sliderRef}/>
    </div>
  );
};

export default Sliders;
