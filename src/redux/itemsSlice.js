import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  location: null,
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
    setLocation(state, {payload}){
      state.location = payload
    }
  },
});
export const { setFilter, clearFilter, setLocation } = itemsSlice.actions;
