import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLocale: '',
  };

export const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale(state, {payload}){
            state.currentLocale = payload
        }
    }
})

export const {setLocale} = localeSlice.actions

