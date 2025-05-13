//rentalcar\src\redux\slices\carsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCars } from "../../services/api";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async ({ filters, page }) => {
    return await fetchCars(filters, page);
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState: { cars: [], status: "idle", error: null, page: 1 },
  reducers: {
    resetCars(state) {
      state.cars = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = [...state.cars, ...action.payload.cars];
      })
      .addCase(getCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
