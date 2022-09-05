import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  id: null,
  isLoggedIn: false,
  favorites: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(state, { payload }) {
      state.token = payload;
    },
    removeUser(state) {
      state.id = null;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    setUser(state, { payload }) {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.id = payload.id;
    },
    setFavorites(state, { payload }){
      state.favorites = payload
    },
    clearFavorites(state){
      state.favorites = []
    },
  },
});

export const { setAuthToken, removeUser, setUser, setFavorites, clearFavorites} = authSlice.actions;

