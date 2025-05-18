//src\pages\Catalog\Catalog.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/slices/carsSlice";
import styles from "./Catalog.module.css";
import Header from "../../components/Header/Header";
import CarCard from "../../components/CarCard/CarCard";
import Filters from "../../components/Filters/Filters";
import { Circles } from "react-loader-spinner";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const totalPages = useSelector((state) => state.cars.totalPages);
  const status = useSelector((state) => state.cars.status);
  const filters = useSelector((state) => state.filters);

  const [page, setPage] = useState(1);
  const [currentTotalPages, setCurrentTotalPages] = useState(null);

  useEffect(() => {
    setPage(1);
    dispatch(getCars({ filters, page: 1 })).then((response) => {
      if (response.payload && response.payload.totalPages) {
        setCurrentTotalPages(response.payload.totalPages);
      }
    });
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    if (page < currentTotalPages) {
      const newPage = page + 1;
      setPage(newPage);
      dispatch(getCars({ filters, page: newPage }));
    }
  };

  return (
    <div className={styles.catalog}>
      <Header />
      <Filters />
      {status === "loading" && (
        <div className={styles.loaderContainer}>
          <Circles color="#3470FF" height={80} width={80} ariaLabel="loading" />
        </div>
      )}
      {status === "failed" && (
        <p className={styles.error}>Failed to load data. Please try again.</p>
      )}

      <div className={styles.carslist}>
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <CarCard key={`${car.id}-${index}`} car={car} />
          ))
        ) : (
          <p className={styles.noResults}>
            No results found. Try adjusting your search criteria.
          </p>
        )}
      </div>

      {cars.length > 0 && currentTotalPages && page < currentTotalPages && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Catalog;
