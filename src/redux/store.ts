import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'

import authSlice from './features/auth/authSlice'
import postSlice from './features/post/postSlice'

export const store = configureStore({
  reducer: {
    authSlice,
    postSlice,
  },
})

export const useSelector = <T>(cb: (state: RootState) => T) =>
  useReduxSelector(cb)

export type RootState = ReturnType<typeof store.getState>

export const useDispatch = () => useReduxDispatch() as AppDispatch

export type AppDispatch = typeof store.dispatch
