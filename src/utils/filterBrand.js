//src\utils\filterBrand.js

export const filterBrand = (brands, selectedBrand) => {
  if (!brands.includes(selectedBrand)) return null;
  return selectedBrand;
};

export default filterBrand;
