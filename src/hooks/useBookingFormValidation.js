// src/hooks/useBookingFormValidation.js

import { useState, useCallback } from "react";

const useBookingFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = useCallback((values) => {
    const newErrors = {};
    if (!values.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!values.bookingDate) {
      newErrors.bookingDate = "Please select a booking date.";
    }
    return newErrors;
  }, []);

  return { errors, validate, setErrors };
};

export default useBookingFormValidation;
