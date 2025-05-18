//src\components\InformationSection\InformationSection.jsx

import React from "react";
import styles from "./InformationSection.module.css";

const InformationSection = ({ car }) => {
  if (!car) {
    return null;
  }

  return (
    <div className={styles.information}>
      <div>
        <h3 className={styles.rentalConditions}>Rental Conditions:</h3>
        {car.rentalConditions && car.rentalConditions.length > 0 ? (
          <ul>
            {car.rentalConditions.map((condition, index) => (
              <li key={index} className={styles.listItem}>
                <svg className={styles.listIcon}>
                  <use href={`/assets/sprite.svg#check-circle`} />
                </svg>
                {condition.replace("ag:", "age:")}
              </li>
            ))}
          </ul>
        ) : (
          <p>No specific rental conditions provided.</p>
        )}
      </div>
      <div>
        <h3 className={styles.rentalConditions}>Car Specifications:</h3>
        <ul>
          {car.year && (
            <li className={styles.listItem}>
              <svg className={styles.listIcon}>
                <use href={`/assets/sprite.svg#calendar`} />
              </svg>
              Year: {car.year}
            </li>
          )}
          {car.type && (
            <li className={styles.listItem}>
              <svg className={styles.listIcon}>
                <use href={`/assets/sprite.svg#car`} />
              </svg>
              Type: {car.type}
            </li>
          )}
          {car.fuelConsumption && (
            <li className={styles.listItem}>
              <svg className={styles.listIcon}>
                <use href={`/assets/sprite.svg#fuel-pump`} />
              </svg>
              Fuel Consumption: {car.fuelConsumption}
            </li>
          )}
          {car.engineSize && (
            <li className={styles.listItem}>
              <svg className={styles.listIcon}>
                <use href={`/assets/sprite.svg#gear`} />
              </svg>
              Engine Size: {car.engineSize}
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3 className={styles.rentalConditions}>
          Accessories and functionalities:
        </h3>
        {(car.accessories && car.accessories.length > 0) ||
        (car.functionalities && car.functionalities.length > 0) ? (
          <ul>
            {car.accessories &&
              car.accessories.map((accessory, index) => (
                <li key={`accessory-${index}`} className={styles.listItem}>
                  <svg className={styles.listIcon}>
                    <use href={`/assets/sprite.svg#check-circle`} />
                  </svg>
                  {accessory}
                </li>
              ))}
            {car.functionalities &&
              car.functionalities.map((func, index) => (
                <li key={`functionality-${index}`} className={styles.listItem}>
                  <svg className={styles.listIcon}>
                    <use href={`/assets/sprite.svg#check-circle`} />
                  </svg>
                  {func}
                </li>
              ))}
          </ul>
        ) : (
          <p>No accessories or functionalities listed.</p>
        )}
      </div>
    </div>
  );
};

export default InformationSection;
