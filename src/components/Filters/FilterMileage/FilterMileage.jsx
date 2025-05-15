//src\components\Filters\FilterMileage\FilterMileage.jsx

import React from "react";
import styles from "./FilterMileage.module.css";

const FilterMileage = ({
  mileageFrom,
  mileageTo,
  setMileageFrom,
  setMileageTo,
}) => {
  // Функція для обробки введених значень (цілі числа з пробілами)
  const handleMileageChange = (setter) => (e) => {
    let value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
    setter(value);
  };

  return (
    <div className={styles.mileageFilter}>
      <label>Пробіг (km):</label>
      <div className={styles.mileageInputs}>
        <div>
          <span>Від:</span>
          <input
            type="text"
            placeholder="From"
            value={mileageFrom}
            onChange={handleMileageChange(setMileageFrom)}
            className={styles.mileageInput}
          />
        </div>
        <div>
          <span>До:</span>
          <input
            type="text"
            placeholder="To"
            value={mileageTo}
            onChange={handleMileageChange(setMileageTo)}
            className={styles.mileageInput}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterMileage;
