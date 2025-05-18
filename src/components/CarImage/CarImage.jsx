import React from "react";
import styles from "./CarImage.module.css";

const CarImage = ({ car }) => {
  if (!car) {
    return null;
  }
  return (
    <div className={styles.carImg}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={styles.carImage}
      />
    </div>
  );
};

export default CarImage;
