import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { itemsSlice } from './itemsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    items: itemsSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});
