import { createSlice } from "@reduxjs/toolkit";
import { setTranslate } from "../../thunk";

const initialState = {
  translate: null,
  currentLanguage: "de",
};

export const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTranslate.fulfilled, (state, action) => {
      state.translate = { ...action.payload };
    });
    builder.addCase(setTranslate.rejected, () => {
      throw Error(500);
    });
  },
});
export const { setCurrentLanguage } = translateSlice.actions;
export default translateSlice.reducer;
