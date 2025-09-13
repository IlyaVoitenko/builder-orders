import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../components/ProductsCategories/MainProducts/Categories/constants.data";

const initialState = {
  selectedProduct: {},
  selectedCategorie: "internal",
  products: [...categories.internal.internal],
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
