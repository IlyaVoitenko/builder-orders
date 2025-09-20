import { createSlice } from "@reduxjs/toolkit";
// import { categories } from "../../../components/ProductsCategories/MainProducts/Categories/constants.data";

const initialState = {
  selectedProduct: {},
  selectedCategory: "internal",
  // products: [...categories.internal.internal],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // state.products = [...categories[action.payload][state.selectedCategory]];
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedProduct, setSelectedCategory, setProducts } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
