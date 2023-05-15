import { configureStore } from "@reduxjs/toolkit";
import { attractionsReducer } from "./attractionsSlice";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: { attractionsReducer, cartReducer },
});
