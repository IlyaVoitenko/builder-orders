import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../components/ProductsCategories/MainProducts/Categories/helper";
const initialState = {
  selectedProduct: {},
  selectedCategorie: "bosses",
  products: [...categories.facade.bosses],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
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
