const getFilter = state => state.items.filter;
const getLocation = state => state.items.location;
const getAllProducts = state => state.items.products;
export const itemsSelectors = {
  getLocation,
  getFilter,
  getAllProducts,
};
