const getLocation = state => state.items.location;
const getAllProducts = state => state.items.products;
const getFiltredProducts = state =>
  state.items.products.filter(item => {
    const filter = state.filters;
    const { kindOfTuor, title, location } = item;
    const filtedItems =
      title.toLowerCase().includes(filter.title) &&
      location.includes(filter.location) &&
      !kindOfTuor.includes(filter.kindOfTuor)

    return  filter.maxPrice 
      ? filtedItems &&
          Number(item.price) <= Number(filter.maxPrice) &&
          Number(item.price) >= Number(filter.minPrice)
      : filtedItems;
  });
  
export const itemsSelectors = {
  getLocation,
  getAllProducts,
  getFiltredProducts,
};
