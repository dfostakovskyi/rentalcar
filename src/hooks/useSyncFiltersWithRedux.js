// src/hooks/useSyncFiltersWithRedux.js

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useSyncFiltersWithRedux = () => {
  const filters = useSelector((state) => state.filters);
  const [selectedBrand, setSelectedBrand] = useState(filters.brand || "");
  const [selectedPrice, setSelectedPrice] = useState(filters.rentalPrice || "");
  const [mileageFrom, setMileageFrom] = useState(filters.mileageFrom || "");
  const [mileageTo, setMileageTo] = useState(filters.mileageTo || "");
  const [isActive, setIsActive] = useState(
    !!filters.brand ||
      !!filters.rentalPrice ||
      !!filters.mileageFrom ||
      !!filters.mileageTo
  );

  useEffect(() => {
    setSelectedBrand(filters.brand || "");
    setSelectedPrice(filters.rentalPrice || "");
    setMileageFrom(filters.mileageFrom || "");
    setMileageTo(filters.mileageTo || "");
    setIsActive(
      !!filters.brand ||
        !!filters.rentalPrice ||
        !!filters.mileageFrom ||
        !!filters.mileageTo
    );
  }, [filters]);

  return {
    selectedBrand,
    setSelectedBrand,
    selectedPrice,
    setSelectedPrice,
    mileageFrom,
    setMileageFrom,
    mileageTo,
    setMileageTo,
    isActive,
    setIsActive,
  };
};

export default useSyncFiltersWithRedux;
