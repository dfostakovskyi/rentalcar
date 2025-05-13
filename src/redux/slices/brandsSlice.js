//src\redux\slices\brandsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBrands } from "../../services/api";

export const getBrands = createAsyncThunk("brands/getBrands", async () => {
  return await fetchBrands();
});

const brandsSlice = createSlice({
  name: "brands",
  initialState: { brands: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default brandsSlice.reducer;
