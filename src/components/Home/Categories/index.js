import React from "react";
import ItemCategorie from "./ItemCategorie";
import logo from "../../../assets/images/first.jpg";
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

const Categories = () => {
  return (
    <div className="flex  w-3/4 max-sm:w-[95%] flex-row	justify-around flex-wrap mt-5">
      {categoriesList.map((item) => (
        <ItemCategorie key={item.id} item={item} id={item.id} />
      ))}
    </div>
  );
};

export default Categories;
