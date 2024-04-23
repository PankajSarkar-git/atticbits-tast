import { createSlice } from "@reduxjs/toolkit";

const toggleSideMenuSlice = createSlice({
  name: "toggleSideMenu",
  initialState: {
    sidemenu: false,
  },
  reducers: {
    openMenu: (state) => {
      state.sidemenu = true;
    },
    closeMenu: (state) => {
      state.sidemenu = false;
    },
  },
});

export const {openMenu, closeMenu} = toggleSideMenuSlice.actions;

export default toggleSideMenuSlice.reducer;
