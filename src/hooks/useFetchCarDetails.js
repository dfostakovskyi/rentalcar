// src/hooks/useFetchCarDetails.js

import { useState, useEffect } from "react";
import { fetchOneCar } from "../services/api";

const useFetchCarDetails = (carId) => {
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchOneCar(carId);
        setCarDetails(data);
      } catch (err) {
        setError(err.message || "Failed to load car details.");
      } finally {
        setLoading(false);
      }
    };

    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  return { carDetails, loading, error };
};

export default useFetchCarDetails;
