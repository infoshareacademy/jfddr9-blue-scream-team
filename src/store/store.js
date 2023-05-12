import { configureStore } from "@reduxjs/toolkit";
import { attractionsReducer } from "./attractionsSlice";

export const store = configureStore({
  reducer: { attractionsReducer },
});
