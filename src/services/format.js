//src\services\format.js

export const formatPrice = (price) => {
  return `$${price}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};

export const formatYear = (date) => {
  return new Date(date).getFullYear().toString();
};

export const extractCityAndCountry = (address) => {
  const parts = address?.split(",");
  const city = parts?.length > 1 ? parts[1].trim() : "";
  const country = parts?.length > 2 ? parts[2].trim() : "";
  return { city, country };
};

export const extractCarIdFromImageUrl = (imageUrl) => {
  return imageUrl?.split("/")?.pop()?.split("-")[0];
};

export const formatMileage = (mileage) => {
  return mileage?.toLocaleString("fr-FR") + " km";
};
