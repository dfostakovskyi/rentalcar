// src/hooks/useBookingSubmit.js

import { useState } from "react";

const useBookingSubmit = (
  carId,
  {
    validate,
    setErrors,
    setName,
    setEmail,
    setBookingDate,
    setComment,
    setSubmissionResult,
  }
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event, { name, email, bookingDate, comment }) => {
    event.preventDefault();
    const values = { name, email, bookingDate };
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmissionResult(null);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setSubmissionResult({
        success: true,
        message: "Booking request sent successfully! Enjoy your ride!",
      });
      setName("");
      setEmail("");
      setBookingDate(null);
      setComment("");
    } else {
      setSubmissionResult({
        success: false,
        message: "Please fill in the required fields correctly.",
      });
    }
  };

  return { isSubmitting, handleSubmit };
};

export default useBookingSubmit;
