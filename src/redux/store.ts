import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'

import authSlice from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    authSlice,
  },
})

export const useSelector = <T>(cb: (state: RootState) => T) =>
  useReduxSelector(cb)

export type RootState = ReturnType<typeof store.getState>

export const useDispatch = () => useReduxDispatch() as AppDispatch

export type AppDispatch = typeof store.dispatch
