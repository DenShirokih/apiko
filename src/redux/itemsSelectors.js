

const getFilter = state => state.items.filter;
const getLocation = state => state.items.location;
const getAllProducts = state => state.items.products;
const getFiltredProducts = state =>
  state.items.products.filter(item => {
    const filter = state.filters;
    const filterLocationTitle =
      item.title.toLowerCase().includes(filter.title) &&
      item.location.includes(filter.location) 
      // && item.kindOfTuor
      
    return filter.maxPrice && filter.minPrice
      ? filterLocationTitle &&
          Number(item.price) <= Number(filter.maxPrice) &&
          Number(item.price) >= Number(filter.minPrice) 
      : filterLocationTitle;
  });

export const itemsSelectors = {
  getLocation,
  getFilter,
  getAllProducts,
  getFiltredProducts,
};
