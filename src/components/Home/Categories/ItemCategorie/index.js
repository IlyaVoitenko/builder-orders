import React from "react";
import {
  currentLanguageSelector,
  translateSelector,
} from "../../../../store/selectors";
import { useSelector } from "react-redux";

const ItemCategorie = ({ item, id }) => {
  const translate = useSelector(translateSelector);
  const currentLanguage = useSelector(currentLanguageSelector);

  return (
    <figure className="flex flex-col  mt-5 items-center w-[45%]">
      <img
        src={item.src}
        className="w-full"
        alt={translate?.home.categories[`card-${id}`].title}
      />
      <figcaption className="mt-3 font-bold text-blue-500 max-lg:h-12 lg:text-xl	">
        {translate?.home.categories[`card-${id}`].title}
      </figcaption>
      <p
        className={`text-left mt-3 h-32 ${
          currentLanguage === "en" ? "max-lg:h-64" : "max-lg:h-80"
        }  max-lg:text-sm	`}
      >
        {translate?.home.categories[`card-${id}`].content}
      </p>
      <nav className="mt-3 ">
        <a href={item.link}>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            {translate?.home.categories.btnText}
          </button>
        </a>
      </nav>
    </figure>
  );
};

export default ItemCategorie;
