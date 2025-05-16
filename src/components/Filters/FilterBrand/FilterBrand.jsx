//src\components\Filters\FilterBrand\FilterBrand.jsx

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../redux/slices/brandsSlice";
import styles from "./FilterBrand.module.css";

const FilterBrand = ({ selectedBrand, setSelectedBrand }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.brands);
  const brandsStatus = useSelector((state) => state.brands.status);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (brandsStatus === "idle") {
      dispatch(getBrands());
    }
  }, [dispatch, brandsStatus]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
  };

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.brandFilter} ref={dropdownRef}>
      <label className={styles.label} htmlFor="brand-select">
        Car brand
      </label>

      <div className={styles.selectContainer}>
        <input
          type="text"
          value={selectedBrand}
          placeholder="Choose a brand"
          readOnly
          className={styles.brandInput}
        />

        <button className={styles.chevronButton} onClick={handleToggleDropdown}>
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
            {brands.map((brand) => (
              <li
                key={brand}
                onClick={() => handleSelectBrand(brand)}
                className={`${styles.dropdownItem} ${
                  selectedBrand === brand ? styles.selectedBrand : ""
                }`}
              >
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterBrand;
