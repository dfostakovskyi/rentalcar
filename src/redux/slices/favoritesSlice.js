//src\redux\slices\favoritesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { loadFavorites, saveFavorites } from "../../services/localStorage";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { cars: loadFavorites() || [] },
  reducers: {
    addFavorite(state, action) {
      if (!state.cars.some((car) => car.id === action.payload.id)) {
        state.cars.push(action.payload);
        saveFavorites(state.cars);
      }
    },
    removeFavorite(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      saveFavorites(state.cars);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
