//rentalcar\src\redux\slices\carsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../../services/api"; // ✅ Оновлений імпорт

export const getCars = createAsyncThunk(
  "cars/getCars",
  async ({ filters, page }) => {
    // ✅ Видаляємо `null` значення перед запитом
    const validFilters = Object.fromEntries(
      Object.entries(filters).filter(
        ([_, value]) => value !== null && value !== ""
      )
    );

    console.log("Фільтри в запиті до сервера:", validFilters);
    const response = await fetchCars(validFilters, page);
    return response;
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
        console.log("Отримані машини в Redux:", action.payload); // ✅ Перевірка
        state.status = "succeeded";
        state.cars = action.payload.cars; // ✅ Записуємо лише масив машин
        state.page = action.payload.page; // ✅ Оновлюємо номер сторінки
      })
      .addCase(getCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
