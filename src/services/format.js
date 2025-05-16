//src\services\format.js

export const formatMileage = (mileage) => {
  return mileage.toLocaleString("fr-FR") + " km";
};

export const formatPrice = (price) => {
  return `$${price}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};
