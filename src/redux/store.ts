import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useAppDispatch } from 'react-redux'

import authSlice from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useDispatch = () => useAppDispatch() as AppDispatch

export type AppDispatch = typeof store.dispatch
