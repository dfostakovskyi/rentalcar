//src\components\Filters.jsx

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetFilters, setFilters } from "../../redux/slices/filtersSlice";
import FilterBrand from "../Filters/FilterBrand/FilterBrand";
import FilterPrice from "../Filters/FilterPrice/FilterPrice";
import FilterMileage from "../Filters/FilterMileage/FilterMileage";
import { getCars } from "../../redux/slices/carsSlice";
import { cleanFilters } from "../../utils/cleanFilters";
import styles from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.brands);
  const filters = useSelector((state) => state.filters);

  // Локальний стан для фільтрів
  const [selectedBrand, setSelectedBrand] = useState(filters.brand || "");
  const [selectedPrice, setSelectedPrice] = useState(filters.rentalPrice || "");
  const [mileageFrom, setMileageFrom] = useState(filters.mileageFrom || "");
  const [mileageTo, setMileageTo] = useState(filters.mileageTo || "");
  const [isActive, setIsActive] = useState(false);
  const [prevFilters, setPrevFilters] = useState(null); // Зберігає попередні значення фільтрів

  // Функція перевірки змін у фільтрах
  const filtersChanged = () => {
    return (
      !prevFilters || // Якщо фільтри ще не застосовувалися
      selectedBrand !== prevFilters.brand ||
      selectedPrice !== prevFilters.rentalPrice ||
      mileageFrom !== prevFilters.minMileage ||
      mileageTo !== prevFilters.maxMileage
    );
  };

  const handleToggleFilters = () => {
    const updatedFilters = cleanFilters({
      brand: selectedBrand,
      rentalPrice: selectedPrice,
      minMileage: mileageFrom,
      maxMileage: mileageTo,
    });

    if (isActive) {
      if (JSON.stringify(updatedFilters) === JSON.stringify(prevFilters)) {
        // Якщо фільтри не змінилися, очищаємо їх
        dispatch(resetFilters());
        setSelectedBrand("");
        setSelectedPrice("");
        setMileageFrom("");
        setMileageTo("");
        setIsActive(false);
        setPrevFilters(null); // Очищаємо збережені фільтри
      } else {
        // Якщо фільтри змінилися, виконуємо пошук
        dispatch(setFilters(updatedFilters));
        dispatch(getCars({ filters: updatedFilters, page: 1 }));
        setPrevFilters(updatedFilters); // Оновлюємо історію фільтрів
      }
    } else {
      // Якщо кнопка була в дефолтному стані, застосовуємо фільтри та активуємо кнопку
      dispatch(setFilters(updatedFilters));
      dispatch(getCars({ filters: updatedFilters, page: 1 }));
      setIsActive(true);
      setPrevFilters(updatedFilters);
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <h2>Фільтрація</h2>

      <FilterBrand
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        brands={brands}
      />
      <FilterPrice
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <FilterMileage
        mileageFrom={mileageFrom}
        mileageTo={mileageTo}
        setMileageFrom={setMileageFrom}
        setMileageTo={setMileageTo}
      />

      <div className={styles.buttons}>
        <button
          onClick={handleToggleFilters}
          className={isActive ? styles.activeButton : styles.defaultButton}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
