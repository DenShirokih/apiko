import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filtersSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    items: itemsSlice.reducer,
    filters: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});
