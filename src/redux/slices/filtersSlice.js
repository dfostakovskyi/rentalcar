//rentalcar\src\redux\slices\filtersSlice.js

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: null,
    price: null,
    mileageFrom: null,
    mileageTo: null,
  },
  reducers: {
    setFilters(state, action) {
      return action.payload;
    },
    resetFilters(state) {
      return { brand: null, price: null, mileageFrom: null, mileageTo: null };
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
