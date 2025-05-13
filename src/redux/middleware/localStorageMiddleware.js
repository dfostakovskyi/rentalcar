const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.includes("favorites/")) {
    const favorites = store.getState().favorites.cars;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return result;
};

export default localStorageMiddleware;
