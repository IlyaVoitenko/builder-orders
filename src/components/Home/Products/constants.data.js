import K6 from "../../../assets/images/K-006-300x300.png";
import DS104 from "../../../assets/images/DS-104-2-300x300.png";
import KO4 from "../../../assets/images/KO-004-300x300.png";
import RG6 from "../../../assets/images/RG006-600x601.png";

import shortid from "shortid";
export const categoriesList = [
  {
    id: shortid.generate(),

    title: "EN-123",
    type: "cassettes",
    src: K6,
    category: "internal",
    price: "€ 0.00",
    link: "/products-category",

    description: {
      title: "description",
      size: "/28×28/kg: 0,5",
      connect: " RL 103",
      price: "Цена за единицу:",
    },
  },

  {
    id: shortid.generate(),

    title: "EN-123",
    type: "ceiling mirror",
    src: DS104,
    category: "internal",
    price: "€ 0.00",
    link: "/products-category",

    description: {
      title: "description",
      size: "/28×28/kg: 0,5",
      connect: " RL 103",
      price: "Цена за единицу:",
    },
  },

  {
    id: shortid.generate(),

    title: "K-4",
    type: "consoles",
    src: KO4,
    category: "internal",
    price: "€ 0.00",
    link: "/products-category",

    description: {
      title: "description",
      size: "/28×28/kg: 0,5",
      connect: " RL 103",
      price: "Цена за единицу:",
    },
  },

  {
    id: shortid.generate(),

    title: "RL-103",
    type: "Rosettes",
    src: RG6,
    category: "internal",
    price: "€ 0.00",
    link: "/products-category",

    description: {
      title: "description",
      size: "/28×28/kg: 0,5",
      connect: " RL 103",
      price: "Цена за единицу:",
    },
  },
];
