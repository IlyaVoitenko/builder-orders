import { loadTranslation } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setTranslate = createAsyncThunk(
  "translate/setTranslate",
  async (language = "de", apiThunk) => {
    try {
      const data = await loadTranslation(language);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
