import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    text: "Hi, Blue Scream",
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const attraction = action.payload;

      state.cart = [attraction, ...state.cart];
    },
    removeFromCart: (state, action) => {
      const attraction = action.payload;

      state.cart = state.cart.filter((item) => {
        return item !== attraction;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
