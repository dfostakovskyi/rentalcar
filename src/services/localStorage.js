//rentalcar\src\services\localStorage.js

export const loadFavorites = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const saveFavorites = (cars) => {
  localStorage.setItem("favorites", JSON.stringify(cars));
};

export const removeFavorites = () => {
  localStorage.removeItem("favorites");
};

export const isFavorite = (carId) => {
  const favorites = loadFavorites();
  return favorites.some((car) => car.id === carId);
};

export const toggleFavorite = (car) => {
  let favorites = loadFavorites();
  if (isFavorite(car.id)) {
    favorites = favorites.filter((favCar) => favCar.id !== car.id);
  } else {
    favorites.push(car);
  }
  saveFavorites(favorites);
  return favorites;
};
