//src\services\format.js

export const formatMileage = (mileage) => {
  return mileage.toLocaleString("fr-FR") + " km"; // ✅ Використовує пробіл замість коми
};

export const formatPrice = (price) => {
  return `$${price}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};
