import React from "react";
import { imagesGllery } from "./constants";

const Gallery = () => {
  return (
    <div className="container xl:w-[87%]  mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {imagesGllery.map((image) => {
          return (
            <figure className={"w-1/2 p-1 md:p-2"} key={image.id}>
              <img
                alt={image.alt}
                className="block h-[30vw] w-full rounded-lg object-cover object-center"
                src={image.src}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
