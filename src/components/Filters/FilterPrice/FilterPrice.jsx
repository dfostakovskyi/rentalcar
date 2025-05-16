//src\components\Filters\FilterPrice\FilterPrice.jsx

import React, { useState, useRef, useEffect } from "react";
import styles from "./FilterPrice.module.css";

const FilterPrice = ({ selectedPrice, setSelectedPrice }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const priceOptions = Array.from({ length: 16 }, (_, i) => 30 + i * 10);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
  };

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.priceFilter} ref={dropdownRef}>
      <label className={styles.label}>Price/ 1 hour</label>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="price"
          value={selectedPrice ? `To $${selectedPrice}` : "To"}
          placeholder="Choose a price"
          readOnly
          className={styles.priceInput}
        />
        <button
          className={styles.dropdownButton}
          onClick={handleToggleDropdown}
        >
          <svg className={styles.chevronIcon}>
            <use
              href={`/assets/sprite.svg#${
                dropdownOpen
                  ? "Property 1=Active chevron"
                  : "Property 1=Default chevron"
              }`}
            />
          </svg>
        </button>
        {dropdownOpen && (
          <ul className={styles.dropdownList}>
            {priceOptions.map((price) => (
              <li
                key={price}
                onClick={() => handleSelectPrice(price)}
                className={selectedPrice === price ? styles.selectedItem : ""}
              >
                {`$${price}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterPrice;
