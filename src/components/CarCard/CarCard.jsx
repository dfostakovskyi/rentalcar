//src\components\CarCard\CarCard.jsx

import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      {/* ✅ Фото автомобіля */}
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className="car-image"
      />

      {/* ✅ Значок "сердечко" для обраного авто */}
      <button className="favorite-btn">❤️</button>

      {/* ✅ Основна інформація */}
      <h2>
        {car.brand} {car.model} ({car.year})
      </h2>
      <p>
        <strong>Ціна оренди:</strong> ${car.rentalPrice} / добу
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
        <strong>Пробіг:</strong> {car.mileage.toLocaleString()} km
      </p>

      {/* ✅ Кнопка для деталей */}
      <button className="read-more-btn">Read more</button>
    </div>
  );
};

export default CarCard;
