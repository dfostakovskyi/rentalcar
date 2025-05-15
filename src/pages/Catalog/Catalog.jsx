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
  const status = useSelector((state) => state.cars.status);
  const filters = useSelector((state) => state.filters);

  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Фільтри перед запитом:", filters); // ✅ Має містити всі параметри
    dispatch(getCars({ filters, page: 1 }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    dispatch(getCars({ filters, page: newPage }));
  };

  return (
    <div>
      <Header />
      <Filters />
      {status === "loading" && <p>Завантаження...</p>}
      {status === "failed" && <p>Помилка завантаження даних.</p>}

      <div>
        {cars.map((car, index) => (
          <CarCard key={`${car.id}-${index}`} car={car} /> // ✅ Гарантовано унікальний ключ
        ))}
      </div>

      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default Catalog;
