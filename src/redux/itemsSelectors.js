const getFilter = state => state.items.filter;
const getLocation = state => state.items.location;


export const itemsSelectors = {
  getLocation,
  getFilter,
};
