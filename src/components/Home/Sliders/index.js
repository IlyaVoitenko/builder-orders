import React, { useRef } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  const images = [{ src: first }, { src: second }, { src: three }];
  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((item, index) => (
          <img src={item.src} key={index} className="h-96" alt="logo" />
        ))}
      </Slider>
      <div className="absolute top-[50%] transform translate-y-[-50%] w-[100%] flex justify-between">
        <button
          className="pl-5  text-white border-none cursor-pointer text-[16px]"
          onClick={previousSlide}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="pr-5  text-white border-none cursor-pointer text-[16px]"
          onClick={nextSlide}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Sliders;
