import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'

import authSlice from './features/auth/authSlice'
import postsSlice from './features/post/postsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsSlice,
  },
  devTools: true,
})

export const useSelector = <T>(cb: (state: RootState) => T) =>
  useReduxSelector(cb)

export type RootState = ReturnType<typeof store.getState>

export const useDispatch = () => useReduxDispatch() as AppDispatch

export type AppDispatch = typeof store.dispatch
