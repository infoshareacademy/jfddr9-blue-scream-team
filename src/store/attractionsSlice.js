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
      console.log(attraction);
      state.attractions = attraction;
    },
  },
});

export const { updateString, addAttraction } = attractionsSlice.actions;

export const attractionsReducer = attractionsSlice.reducer;
