//src\redux\slices\oneCarSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOneCar } from "../../services/api";

export const getOneCar = createAsyncThunk("oneCar/getOneCar", async (carId) => {
  return await fetchOneCar(carId);
});

const oneCarSlice = createSlice({
  name: "oneCar",
  initialState: { selectedCar: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneCar.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCar = action.payload;
      })
      .addCase(getOneCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default oneCarSlice.reducer;
