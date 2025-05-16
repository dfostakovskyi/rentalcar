//src\components\Filters.jsx

import React, { useState, useEffect } from "react";
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

  const [selectedBrand, setSelectedBrand] = useState(filters.brand || "");
  const [selectedPrice, setSelectedPrice] = useState(filters.rentalPrice || "");
  const [mileageFrom, setMileageFrom] = useState(filters.mileageFrom || "");
  const [mileageTo, setMileageTo] = useState(filters.mileageTo || "");
  const [isActive, setIsActive] = useState(false);
  const [prevFilters, setPrevFilters] = useState(null);

  useEffect(() => {
    if (
      filters.brand === "" &&
      filters.rentalPrice === "" &&
      filters.mileageFrom === "" &&
      filters.mileageTo === ""
    ) {
      setSelectedBrand("");
      setSelectedPrice("");
      setMileageFrom("");
      setMileageTo("");
      setIsActive(false);
    }
  }, [filters]);

  const handleToggleFilters = () => {
    const updatedFilters = cleanFilters({
      brand: selectedBrand,
      rentalPrice: selectedPrice,
      minMileage: mileageFrom,
      maxMileage: mileageTo,
    });

    if (isActive) {
      if (JSON.stringify(updatedFilters) === JSON.stringify(prevFilters)) {
        dispatch(resetFilters());
        setSelectedBrand("");
        setSelectedPrice("");
        setMileageFrom("");
        setMileageTo("");
        setIsActive(false);
        setPrevFilters(null);
      } else {
        dispatch(setFilters(updatedFilters));
        dispatch(getCars({ filters: updatedFilters, page: 1 }));
        setPrevFilters(updatedFilters);
      }
    } else {
      dispatch(setFilters(updatedFilters));
      dispatch(getCars({ filters: updatedFilters, page: 1 }));
      setIsActive(true);
      setPrevFilters(updatedFilters);
    }
  };

  return (
    <div className={styles.filtersContainer}>
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
