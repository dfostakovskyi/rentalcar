// src/services/bookingService.js

import axios from "axios";
const BASE_URL = "https://car-rental-api.goit.global/api";

export const bookCar = async (carId, userData) => {
  const response = await axios.post(`${BASE_URL}/booking/${carId}`, userData);
  return response.data;
};

export const fetchBookings = async () => {
  const response = await axios.get(`${BASE_URL}/booking`);
  return response.data;
};

export const deleteBooking = async (bookingId) => {
  const response = await axios.delete(`${BASE_URL}/booking/${bookingId}`);
  return response.data;
};
