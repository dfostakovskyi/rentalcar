// src\components\BookingForm\BookingForm.jsx

import React, { useState } from "react";
import useBookingFormValidation from "../../hooks/useBookingFormValidation";
import useBookingSubmit from "../../hooks/useBookingSubmit";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import styles from "./BookingForm.module.css";
import "../../locales/customEn";

export const BookingForm = ({ car }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState(null);
  const [comment, setComment] = useState("");
  const { errors, validate, setErrors } = useBookingFormValidation();
  const [submissionResult, setSubmissionResult] = useState(null);

  const { isSubmitting, handleSubmit } = useBookingSubmit(car.id, {
    validate,
    setErrors,
    setName,
    setEmail,
    setBookingDate,
    setComment,
    setSubmissionResult,
  });

  return (
    <form
      onSubmit={(event) =>
        handleSubmit(event, { name, email, bookingDate, comment })
      }
      className={styles.bookingForm}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.visuallyHidden}>
          Name*
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${errors.name ? styles.error : ""} ${styles.customInput}`}
          placeholder="Name*"
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.visuallyHidden}>
          Email*
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${errors.email ? styles.error : ""} ${
            styles.customInput
          }`}
          placeholder="Email*"
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="bookingDate" className={styles.visuallyHidden}>
          Booking date*
        </label>
        <div className={styles.datePickerWrapper}>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className={`${errors.bookingDate ? styles.error : ""} ${
              styles.customInput
            }`}
            placeholderText="Booking date"
            locale="customEn"
          />
        </div>
        {errors.bookingDate && (
          <p className={styles.errorMessage}>{errors.bookingDate}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="comment" className={styles.visuallyHidden}>
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.customInputArea}
          placeholder="Comment"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? "Submitting..." : "Send"}
      </button>

      {submissionResult && (
        <p
          className={
            submissionResult.success
              ? styles.successMessage
              : styles.errorMessage
          }
        >
          {submissionResult.message}
        </p>
      )}
    </form>
  );
};

export default BookingForm;
