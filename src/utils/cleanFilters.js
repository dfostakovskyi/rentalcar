// src/utils/cleanFilters.js

export const cleanFilters = (filters) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value)
  );
};

export default cleanFilters;
