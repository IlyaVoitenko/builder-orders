import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/menu";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
