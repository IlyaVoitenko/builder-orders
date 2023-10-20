import { loadTranslation } from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setTranslate = createAsyncThunk(
  "translate/setTranslate",
  async (language = "de", apiThunk) => {
    try {
      const data = loadTranslation(language);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
