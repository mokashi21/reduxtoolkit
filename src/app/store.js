import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../comp/prodSlice";
const store = configureStore({
  reducer: productReducer,
});
export default store;
