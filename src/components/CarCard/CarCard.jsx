//src\components\CarCard\CarCard.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/favoritesSlice";
import { formatMileage, formatPrice, formatDate } from "../../services/format";
import styles from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const favorites = useSelector((state) => state.favorites.cars);
  const isFavorite = favorites.some((favCar) => favCar.id === car.id);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div className={styles.carCard}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={styles.carImage}
      />

      <button className={styles.favoriteBtn} onClick={toggleFavorite}>
        <svg
          className={`${styles.favoriteIcon} ${
            isFavorite ? styles.active : ""
          }`}
        >
          <use
            href={`../../../public/assets/sprite.svg#${
              isFavorite ? "Property 1=Active" : "Property 1=Default"
            }`}
          />
        </svg>
      </button>

      <h2>
        {car.brand} {car.model} ({car.year})
      </h2>
      <p>
        <strong>Ціна оренди:</strong> {formatPrice(car.rentalPrice)} / добу
      </p>
      <p>
        <strong>Компанія:</strong> {car.rentalCompany}
      </p>
      <p>
        <strong>Адреса:</strong> {car.address}
      </p>
      <p>
        <strong>Тип:</strong> {car.type}
      </p>
      <p>
        <strong>Пробіг:</strong> {formatMileage(car.mileage)}
      </p>
      <p>
        <strong>Дата реєстрації:</strong> {formatDate(car.registrationDate)}
      </p>

      <button className={styles.readMoreBtn}>Read more</button>
    </div>
  );
};

export default CarCard;
