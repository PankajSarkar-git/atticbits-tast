import { configureStore } from "@reduxjs/toolkit";
import toggleSideMenu from "./toggleSideMenuSlice";
import authenticationSlice from "./authenticationSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";

const persistCOnfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  toggleSideMenu: toggleSideMenu,
  authentication: authenticationSlice,
  token: tokenSlice,
});

const persistedReducer = persistReducer(persistCOnfig, reducer);
const app = configureStore({
  reducer: persistedReducer,
});

export default app;
