import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: [],
};
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearFilter(state) {
      state.filter = [];
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});
export const { setFilter, clearFilter } = itemsSlice.actions;
