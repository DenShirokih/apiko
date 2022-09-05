import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filtersSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistAuthReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    items: itemsSlice.reducer,
    filters: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })],
});

export const persistor = persistStore(store)