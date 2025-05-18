//src\components\BookingSection\BookingSection.jsx

import React from "react";
import styles from "./BookingSection.module.css";
import { BookingForm } from "../BookingForm/BookingForm";

const BookingSection = ({ car }) => {
  if (!car) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.booking}>
        <h3 className={styles.title}>Book your car now Stay connected!</h3>
        <p className={styles.description}>We are always ready to help you.</p>
      </div>
      <BookingForm car={car} />
    </div>
  );
};

export default BookingSection;
