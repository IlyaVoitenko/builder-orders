import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const BtnsMove = ({ sliderRef }) => {
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="absolute top-[50%] transform translate-y-[-50%] w-[100%] flex justify-between">
      <button
        className="pl-5  text-white border-none cursor-pointer text-[16px]"
        onClick={previousSlide}
        aria-label="button slide right"
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        className="pr-5  text-white border-none cursor-pointer text-[16px]"
        onClick={nextSlide}
        aria-label="button slide left"
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default BtnsMove;
