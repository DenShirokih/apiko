const getFilter = state => state.items.filter;
const getLocation = state => state.items.location;
const getAllProducts = state => state.items.products;
const getFiltredProducts = state =>
  state.items.products.filter(
    item =>
      item.title.toLowerCase().includes(state.filters.title) &&
      item.location.includes(state.filters.location) 
      &&
      Number(item.price) <= Number(state.filters.maxPrice) &&
      Number(item.price) >= Number(state.filters.minPrice)
  );

export const itemsSelectors = {
  getLocation,
  getFilter,
  getAllProducts,
  getFiltredProducts,
};
