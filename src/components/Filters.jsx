//src\components\Filters.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/slices/filtersSlice";
import { getCars } from "../redux/slices/carsSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    const cleanedFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value)
    );

    dispatch(setFilters(cleanedFilters));
    dispatch(getCars({ filters: cleanedFilters, page: 1 }));
  };

  return (
    <div>
      <h2>Фільтрація</h2>

      <label>
        Бренд:
        <input
          type="text"
          name="brand"
          value={filters.brand}
          onChange={handleChange}
        />
      </label>

      <label>
        Ціна:
        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleChange}
        />
      </label>

      <label>
        Пробіг від:
        <input
          type="number"
          name="mileageFrom"
          value={filters.mileageFrom}
          onChange={handleChange}
        />
      </label>

      <label>
        Пробіг до:
        <input
          type="number"
          name="mileageTo"
          value={filters.mileageTo}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleApplyFilters}>Застосувати фільтри</button>
    </div>
  );
};

export default Filters;
