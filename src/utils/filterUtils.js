// src/utils/filterUtils.js

export const cleanFilters = (filters) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value)
  );
};

export const handleFilterChange = (prevFilters, name, value) => {
  return { ...prevFilters, [name]: value };
};
