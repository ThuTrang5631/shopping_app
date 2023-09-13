import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const tempProduct = { ...action.payload };
      state.cartItems.push(tempProduct);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const getAllCarts = (state) => state.cart.cartItems;

export default cartSlice.reducer;
