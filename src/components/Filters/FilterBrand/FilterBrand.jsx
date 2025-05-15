//src\components\Filters\FilterBrand\FilterBrand.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../redux/slices/brandsSlice";
import styles from "./FilterBrand.module.css";

const FilterBrand = ({ selectedBrand, setSelectedBrand }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.brands);
  const brandsStatus = useSelector((state) => state.brands.status);

  // ✅ Локальний стан для керування списком брендів
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Завантаження брендів з бекенду при першому рендері
  useEffect(() => {
    if (brandsStatus === "idle") {
      dispatch(getBrands());
    }
  }, [dispatch, brandsStatus]);

  // ✅ Функція вибору бренда
  const handleSelectBrand = (brand) => {
    setSelectedBrand("");
    setSelectedBrand(brand);
  };

  // ✅ Функція перемикання списку брендів
  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Перемикаємо стан списку
  };

  return (
    <div className={styles.brandFilter}>
      <label htmlFor="brand-select">Бренд:</label>

      <div className={styles.selectContainer}>
        {/* ✅ Поле з плейсхолдером "Choose a brand" */}
        <input
          type="text"
          value={selectedBrand}
          placeholder="Choose a brand"
          readOnly
          className={styles.brandInput}
        />

        {/* ✅ Кнопка для відкриття списку та очищення поля */}
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

        {/* ✅ Список брендів */}
        {dropdownOpen && (
          <ul className={styles.dropdownList}>
            {brands.map((brand) => (
              <li
                key={brand}
                onClick={() => handleSelectBrand(brand)}
                className={selectedBrand === brand ? styles.selectedBrand : ""}
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
