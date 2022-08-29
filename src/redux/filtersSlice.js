import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  location: '',
  maxPrice: '',
  minPrice: 0,
  kidOfTour: [],
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
    setKidOfTour (state, {payload}){
      state.kidOfTour = payload;
    }
  },
});
export const { setKidOfTour, setMaxPrice, setMinPrice,  setLocation, setSearch } = filterSlice.actions;
