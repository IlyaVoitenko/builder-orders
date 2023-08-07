import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const ItemCategorie = ({ item, id }) => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <figure className="flex flex-col  mt-5 items-center w-[45%]">
      <img
        src={item.src}
        className="w-full"
        alt={t(`home.categories.card-${id}.title`)}
      />
      <figcaption className="mt-3 font-bold text-blue-500 max-lg:h-12 lg:bg-black">
        {t(`home.categories.card-${id}.title`)}
      </figcaption>
      <p
        className={`text-left mt-3 h-32 ${
          currentLanguage === "en" ? "max-lg:h-64" : "max-lg:h-80"
        }  max-lg:text-sm	`}
      >
        {t(`home.categories.card-${id}.content`)}
      </p>
      <nav className="mt-3 ">
        <a href={item.link}>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            {t(`home.categories.btnText`)}
          </button>
        </a>
      </nav>
    </figure>
  );
};

export default ItemCategorie;
