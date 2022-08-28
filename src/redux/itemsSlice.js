import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  location: null,
  products: [],
};
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    products(state, { payload }) {
      state.products = payload;
    },
    clearFilter(state) {
      state.filter = [];
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    setLocation(state, { payload }) {
      state.location = payload;
    },
  },
});
export const { setFilter, clearFilter, setLocation, products } =
  itemsSlice.actions;
