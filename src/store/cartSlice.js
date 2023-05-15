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
      console.log(attraction);
      state.cart = [attraction, ...state.cart];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
