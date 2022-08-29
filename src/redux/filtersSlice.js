import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  location: '',
  maxPrice: '',
  minPrice: "0",
  kindOfTuor: '',
};
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFilter(state) {
      state.minPrice = null;
      state.maxPrice = null;
      state.location = "";
      state.title = '';
      state.kindOfTuor = ''
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
    setKindOfTour (state, {payload}){
      state.kindOfTuor = payload;
    },
  
  },
});
export const { setKindOfTour, setMaxPrice, setMinPrice,  setLocation, setSearch, clearFilter } = filterSlice.actions;
