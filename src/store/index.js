import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/menu";
import categoriesReducer from "./reducer/categories";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    categories: categoriesReducer,
  },
});

export default store;
