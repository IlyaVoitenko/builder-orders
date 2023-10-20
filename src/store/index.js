import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/menu";
import categoriesReducer from "./reducer/categories";
import translateReducer from "./reducer/translate";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    categories: categoriesReducer,
    translate: translateReducer,
  },
});

export default store;
