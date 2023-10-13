import React from "react";
import shortid from "shortid";

const imagesGllery = [
  {
    id: shortid.generate(),
    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  },
  {
    id: shortid.generate(),

    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  },
  {
    id: shortid.generate(),

    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  },
  {
    id: shortid.generate(),

    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
  },
  {
    id: shortid.generate(),

    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  },
  {
    id: shortid.generate(),

    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
  },
  {
    id: shortid.generate(),
    alt: "gallery",
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
  },
];
const Gellery = () => {
  return (
    <div className="container xl:w-[87%]  mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {imagesGllery.map((image) => {
          return (
            <figure className={"w-1/2 p-1 md:p-2"} key={image.id}>
              <img
                alt={image.alt}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image.src}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Gellery;
