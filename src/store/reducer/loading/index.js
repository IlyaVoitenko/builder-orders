import { createSlice } from "@reduxjs/toolkit";
import { setTranslate } from "../../thunk";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setTranslate.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setTranslate.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(setTranslate.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export default loadingSlice.reducer;
