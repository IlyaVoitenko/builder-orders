import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowMenu: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsShowMenu: (state) => {
      state.isShowMenu = !state.isShowMenu;
    },
  },
});

export const { setIsShowMenu } = menuSlice.actions;

export default menuSlice.reducer;
