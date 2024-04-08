import { combineReducers } from "@reduxjs/toolkit";
import NavbarSlice from "./Slice/NavbarSlice";
import FormSlice from "./Slice/FormSlice";

const rootReducer = combineReducers({
  navbar: NavbarSlice,
  form: FormSlice
});

export default rootReducer;
