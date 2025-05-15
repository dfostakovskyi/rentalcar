// src/services/api.js

import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";

export const fetchCars = async (filters, page) => {
  const filteredParams = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value)
  );

  const response = await axios.get(`${BASE_URL}/cars`, {
    params: { ...filteredParams, page },
  });
  return response.data;
};

export const fetchOneCar = async (carId) => {
  const response = await axios.get(`${BASE_URL}/cars/${carId}`);
  return response.data;
};

export const fetchBrands = async () => {
  const response = await axios.get(`${BASE_URL}/brands`);
  return response.data;
};
