//src\components\CarCard\CarCard.jsx

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/favoritesSlice";
import {
  formatMileage,
  formatPrice,
  formatDate,
  formatYear,
  extractCityAndCountry,
} from "../../services/format";
import styles from "./CarCard.module.css";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const [isVisible, setIsVisible] = useState(false);
  const favorites = useSelector((state) => state.favorites.cars);
  const isFavorite = favorites.some((favCar) => favCar.id === car.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const handleReadMoreClick = () => {
    navigate(`/catalog/${car.id}`);
  };

  const line = (
    <svg
      width="2"
      height="16"
      viewBox="0 0 2 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0V16" stroke="#DADDE1" />
    </svg>
  );

  return (
    <div
      className={`${styles.carCard} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
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

      <div className={styles.carInfo}>
        <div className={styles.сarInfoDetails}>
          <span className={styles.carName}>
            {car.brand} <span className={styles.model}>{car.model},</span>{" "}
            {formatYear(car.year)}
          </span>
          <span className={styles.price}> {formatPrice(car.rentalPrice)} </span>
        </div>
        <div className={styles.carAddress}>
          {extractCityAndCountry(car.address).city}
          {line}
          {extractCityAndCountry(car.address).country}
          {line}
          {car.rentalCompany}
        </div>
        <div className={styles.carMileage}>
          {car.type}
          {line}
          {formatMileage(car.mileage)}
        </div>
      </div>

      <button className={styles.readMoreBtn} onClick={handleReadMoreClick}>
        Read more
      </button>
    </div>
  );
};

export default CarCard;
