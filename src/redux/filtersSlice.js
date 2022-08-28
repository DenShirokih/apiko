import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  location: '',
  maxPrice: '100501',
  minPrice: 0,
};
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFilter(state) {
      state.minPrice = null;
      state.maxPrice = null;
      state.location = null;
      state.title = '';
    },
    setMaxPrice(state, { payload }) {
      state.maxPrice = payload;
    },
    setMinPrice(state, {payload}){
      state.minPrice = payload;
    },
    setLocation(state, { payload }) {
      state.location = payload;
    },
    setSearch(state, { payload }) {
      state.title = payload;
    },
  },
});
export const { setMaxPrice, setMinPrice,  setLocation, setSearch } = filterSlice.actions;
