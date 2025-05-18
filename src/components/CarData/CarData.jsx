//src\components\CarData\CarData.jsx

import React from "react";
import styles from "./CarData.module.css";
import {
  formatMileage,
  extractCityAndCountry,
  extractCarIdFromImageUrl,
} from "../../services/format";

const CarData = ({ car }) => {
  if (!car) {
    return null;
  }

  const { city, country } = extractCityAndCountry(car.address);
  const carId = extractCarIdFromImageUrl(car.img);
  const formattedMileage = formatMileage(car.mileage);

  return (
    <div>
      <div className={styles.carData}>
        <div className={styles.title}>
          <span>
            {car.brand} {car.model}, {car.year}
          </span>
          <span className={styles.id}>Id: {carId}</span>
        </div>
        <div className={styles.address}>
          <span>
            <svg className={styles.location}>
              <use href={`/assets/sprite.svg#Location`} />
            </svg>
            {city}
            {city && country && ", "}
            {country}
          </span>
          <span className={styles.mileage}>Mileage: {formattedMileage}</span>
        </div>

        <p className={styles.price}>${car.rentalPrice}</p>
        <p className={styles.description}>{car.description}</p>
      </div>
    </div>
  );
};

export default CarData;
