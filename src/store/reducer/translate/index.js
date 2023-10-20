import { createSlice } from "@reduxjs/toolkit";
import { setTranslate } from "../../thunk";

const initialState = {
  trans: null,
};

export const translateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setTranslate.fulfilled, (state, action) => {
      state.trans = { ...action.payload };
    });
    builder.addCase(setTranslate.rejected, () => {
      throw Error(500);
    });
  },
});

export default translateSlice.reducer;
