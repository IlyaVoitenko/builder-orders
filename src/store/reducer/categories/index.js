import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../components/ProductsCategories/MainProducts/Categories/constants";

const initialState = {
  selectedProduct: {},
  selectedCategorie: "bosses",
  products: [...categories.facadeStucco.bosses],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...categories[action.payload][state.selectedCategorie]];
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedCategorie: (state, action) => {
      state.selectedCategorie = action.payload;
    },
  },
});

export const { setSelectedProduct, setSelectedCategorie, setProducts } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
