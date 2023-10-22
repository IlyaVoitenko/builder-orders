import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastname: "",
  email: "",
  request: "",
};

export const userRequestSlice = createSlice({
  name: "userRequest",
  initialState,
  reducers: {
    setRequest: (state, action) => {
      state.request = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
  },
});

export const { setRequest, setEmail, setLastname } = userRequestSlice.actions;

export default userRequestSlice.reducer;
