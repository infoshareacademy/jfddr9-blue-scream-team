import { createSlice } from "@reduxjs/toolkit";

export const attractionsSlice = createSlice({
  name: "attractions",
  initialState: {
    text: "Hi, Blue Scream",
    attractions: [],
  },
  reducers: {
    updateString: (state, action) => {
      const text = action.payload;
      state.text = text;
    },
    addAttraction: (state, action) => {
      const attraction = action.payload;

      state.attractions = attraction;
    },
    clearAttraction: (state, action) => {
      state.attractions = [];
    },
  },
});

export const { updateString, addAttraction, clearAttraction } =
  attractionsSlice.actions;

export const attractionsReducer = attractionsSlice.reducer;
