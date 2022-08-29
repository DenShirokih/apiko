import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setLocation(state, { payload }) {
      state.location = payload;
    },
  },
});
export const { setFilter, setLocation, products } =
  itemsSlice.actions;
