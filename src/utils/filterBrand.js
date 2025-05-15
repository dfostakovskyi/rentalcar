//src\utils\filterBrand.js

export const filterBrand = (brands, selectedBrand) => {
  if (!brands.includes(selectedBrand)) return null; // ✅ Повертає null, якщо бренд некоректний
  return selectedBrand;
};

export default filterBrand;
