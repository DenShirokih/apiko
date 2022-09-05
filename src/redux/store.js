import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filtersSlice';
import { authSlice } from './authSlice';
import { localeSlice } from './localeSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    items: itemsSlice.reducer,
    filters: filterSlice.reducer,
    locale: localeSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

