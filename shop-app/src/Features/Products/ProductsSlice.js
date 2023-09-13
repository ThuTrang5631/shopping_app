import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncDetailProduct = createAsyncThunk(
  "product/fetchAsyncDetailProduct",
  async (id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res?.data;
  }
);

const initialState = {
  products: [],
  productDetail: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: {
    [fetchAsyncDetailProduct.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, productDetail: payload };
    },
  },
});

export const { addProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getProductDetail = (state) => state.products.productDetail;
export default productSlice.reducer;
