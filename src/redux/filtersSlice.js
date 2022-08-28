import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  location: null,
  price: {
    min: null,
    max: null,
  },
};
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFilter(state) {
      state.price.min = null;
      state.price.max = null;
      state.location = null;
      state.search = '';
    },
    setPrice(state, { payload }) {
      state.price.min = payload.min;
      state.price.max = payload.max;
    },
    setLocation(state, { payload }) {
      state.location = payload;
    },
    setSearch(state, { payload }) {
      state.search = payload;
    },
  },
});
export const { setPrice, setLocation, setSearch } = filterSlice.actions;
