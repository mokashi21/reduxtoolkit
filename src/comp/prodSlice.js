import { createSlice } from "@reduxjs/toolkit";
import productData from "../product.json";

const initialState = {
  products: productData,
};

export const prodSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default prodSlice.reducer;
