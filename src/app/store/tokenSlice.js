import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: '',
  },
  reducers: {
    addToken: (state, payload) => {
      state.token = payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;