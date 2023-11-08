import React, { useRef } from "react";
import Slider from "react-slick";
import BtnsMove from "./BtnsMove";
import "./style.css";

import first from "../../../assets/images/istoriya-i-sovremennost-lepniny-iz-gipsa.jpg";
import second from "../../../assets/images/1647718981_71-na-dache-pro-p-mariinskii-dvorets-sankt-peterburg-vnutri-78.jpg";
import three from "../../../assets/images/IMG-6f131f778228efd8929e31cdeb4f02f4-V.jpg";
import four from "../../../assets/images/Mariinski_palace_2.jpg";

const images = [{ src: first }, { src: second }, { src: three }, { src: four }];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
const Sliders = () => {
  const sliderRef = useRef(null);

  return (
    <div className="relative ">
      <Slider ref={sliderRef} {...settings}>
        {images.map((item, index) => (
          <img src={item.src} key={index} className="h-[45vw] " alt="logo" />
        ))}
      </Slider>
      <BtnsMove sliderRef={sliderRef} />
    </div>
  );
};

export default Sliders;
