import React from "react";
import ItemCategorie from "./ItemCategorie";
import logo from "../Sliders/first.jpg";

const Categories = () => {
  const categoriesList = [
    {
      id: 1,
      src: logo,
      link: "#",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    },
    {
      id: 2,
      src: logo,
      link: "#",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    },
    {
      id: 3,
      src: logo,
      link: "#",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    },
    {
      id: 4,
      src: logo,
      link: "#",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    },
  ];
  return (
    <div className="flex  w-3/4 flex-row	justify-around flex-wrap mt-5">
      {categoriesList.map((item) => (
        <ItemCategorie key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
