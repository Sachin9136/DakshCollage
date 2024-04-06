import { combineReducers } from "@reduxjs/toolkit";
import NavbarSlice from "./Slice/NavbarSlice";

const rootReducer = combineReducers({
  navbar: NavbarSlice,
});

export default rootReducer;
