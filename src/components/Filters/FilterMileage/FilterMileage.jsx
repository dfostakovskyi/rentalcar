//src\components\Filters\FilterMileage\FilterMileage.jsx

import React from "react";
import styles from "./FilterMileage.module.css";

const FilterMileage = ({
  mileageFrom,
  mileageTo,
  setMileageFrom,
  setMileageTo,
}) => {
  const handleMileageChange = (setter, prefix) => (e) => {
    let rawValue = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
    let formattedValue = rawValue
      ? Number(rawValue).toLocaleString("en-US")
      : "";
    setter(rawValue);
  };

  return (
    <div className={styles.mileageFilter}>
      <label className={styles.label}>Сar mileage / km</label>
      <div className={styles.mileageInputs}>
        <div className={styles.mileageInputContainerFrom}>
          <input
            type="text"
            placeholder="From"
            value={
              mileageFrom
                ? `From ${Number(mileageFrom).toLocaleString("en-US")}`
                : "From"
            }
            onChange={handleMileageChange(setMileageFrom, "From")}
            className={styles.mileageInput}
          />
        </div>
        <div className={styles.mileageInputContainerTo}>
          <input
            type="text"
            placeholder="To"
            value={
              mileageTo
                ? `To ${Number(mileageTo).toLocaleString("en-US")}`
                : "To"
            }
            onChange={handleMileageChange(setMileageTo, "To")}
            className={styles.mileageInput}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterMileage;
