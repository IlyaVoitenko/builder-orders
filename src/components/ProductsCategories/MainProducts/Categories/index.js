import React from "react";
import { translateSelector } from "../../../../store/selectors";
import Categorie from "./Categorie";
import { useSelector } from "react-redux";
import logo from "../../../../assets/images/second.jpg";

const Categories = ({ isProductsCategoriesPage = false }) => {
  const translate = useSelector(translateSelector);
  return (
    <div
      className={`flex flex-col  max-lg:mt-4${
        isProductsCategoriesPage
          ? "w-[64rem] max-lg:w-full pl-3  border-l-2 border-blue-500"
          : " pl-3 lg:w-80 max-lg:mt-5 border-r-2  border-blue-500"
      }`}
    >
      <span className="text-blue-500 ">
        {" "}
        {translate?.productsCategories.title}
      </span>
      <Categorie
        subcategories={categories.facadeStucco}
        сategorieTranslater={"facadeStucco"}
        isProductsCategoriesPage={isProductsCategoriesPage}
        titleCatrgorie={
          "productsCategories.categories.facadeStucco.titleCategorie"
        }
      />
      <Categorie
        subcategories={categories.internal}
        isProductsCategoriesPage={isProductsCategoriesPage}
        сategorieTranslater={"internal"}
        titleCatrgorie={"productsCategories.categories.internal.titleCategorie"}
      />
    </div>
  );
};

export default Categories;

export const categories = {
  facadeStucco: {
    bosses: [
      {
        id: 1,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 2,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 3,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 4,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 5,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 6,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 7,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 8,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 9,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 10,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 11,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 12,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 13,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 14,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 15,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: " RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 16,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
      {
        id: 17,
        link: "/Product",
        title: "EN-123",
        type: "bosses",
        src: logo,
        categorie: "facadeStucco",
        price: "€ 15.00",
        discription: {
          title: "discription",
          size: "/28×28/кг: 0,5",
          connect: "Anschluss: RL 103",
          price: "Цена за единицу:",
        },
      },
    ],
    corner: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    windowsills: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    windowBar: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    mainCornice: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    pilaster: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    columns: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    miscellaneous: [
      {
        id: 1,
        link: "",
        text: "",
        type: "",
        imgUrl: "",
        categorie: "",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
  },
  internal: {
    pictures: [
      {
        id: 1,
        link: "",
        text: "",
        type: "pictures",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    ceilingAndWallMoldings: [
      {
        id: 1,
        link: "",
        text: "",
        type: "ceiling and wall moldings",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    ceilingMirror: [
      {
        id: 1,
        link: "",
        text: "",
        type: "ceiling mirror",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    decorativeCorners: [
      {
        id: 1,
        link: "",
        text: "",
        type: "decorative corners",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    indirectLightStrips: [
      {
        id: 1,
        link: "",
        text: "",
        type: "Indirect light strips",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    cassettes: [
      {
        id: 1,
        link: "",
        text: "",
        type: "cassettes",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    lamps: [
      {
        id: 1,
        link: "",
        text: "",
        type: "lamps",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    ornaments: [
      {
        id: 1,
        link: "",
        text: "",
        type: "ornaments",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    pilaster: [
      {
        id: 1,
        link: "",
        text: "",
        type: "pilaster",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    frameMoldings: [
      {
        id: 1,
        link: "",
        text: "",
        type: "frame moldings",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    rosettes: [
      {
        id: 1,
        link: "",
        text: "",
        type: "rosettes",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    columns: [
      {
        id: 1,
        link: "",
        text: "",
        type: "columns",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    miscellaneous: [
      {
        id: 1,
        link: "",
        text: "",
        type: "miscellaneous",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
    supraport: [
      {
        id: 1,
        link: "",
        text: "",
        type: "supraport",
        imgUrl: "",
        categorie: "internal",
        price: "",
        discription: "",
        translaterField: "",
      },
    ],
  },
  recommended: [],
};
