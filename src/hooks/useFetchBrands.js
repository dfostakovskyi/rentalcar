// src/hooks/useFetchBrands.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../redux/slices/brandsSlice";

const useFetchBrands = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.brands);
  const brandsStatus = useSelector((state) => state.brands.status);

  useEffect(() => {
    if (brandsStatus === "idle") {
      dispatch(getBrands());
    }
  }, [dispatch, brandsStatus]);

  return { brands, brandsStatus };
};

export default useFetchBrands;
