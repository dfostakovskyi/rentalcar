export const formatMileage = (mileage) => {
  return mileage.toLocaleString("en-US") + " km";
};

export const formatPrice = (price) => {
  return `$${price}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};
