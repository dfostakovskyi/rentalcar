//rentalcar\src\redux\store.js

import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import brandsReducer from "./slices/brandsSlice";
import oneCarReducer from "./slices/oneCarSlice";
import favoritesReducer from "./slices/favoritesSlice";
import filtersReducer from "./slices/filtersSlice";
import localStorageMiddleware from "./middleware/localStorageMiddleware";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    brands: brandsReducer,
    oneCar: oneCarReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
