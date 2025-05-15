export const filterMileage = (mileageFrom, mileageTo) => {
  const from = mileageFrom > 0 ? mileageFrom : "";
  const to = mileageTo > 0 ? mileageTo : "";
  return { from, to };
};

export default filterMileage;
