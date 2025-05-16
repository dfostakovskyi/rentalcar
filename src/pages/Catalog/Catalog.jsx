//src\pages\Catalog\Catalog.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/slices/carsSlice";
import Header from "../../components/Header/Header";
import CarCard from "../../components/CarCard/CarCard";
import Filters from "../../components/Filters/Filters";

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
    <div className="catalog">
      <Header />
      <Filters />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load data. Please try again.</p>}

      <div>
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <CarCard key={`${car.id}-${index}`} car={car} />
          ))
        ) : (
          <p>No results found. Try adjusting your search criteria.</p>
        )}
      </div>

      {cars.length > 0 && currentTotalPages && page < currentTotalPages && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Catalog;
