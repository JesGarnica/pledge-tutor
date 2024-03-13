import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import authCredSlice from './authCredSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    authCred: authCredSlice
  },
})