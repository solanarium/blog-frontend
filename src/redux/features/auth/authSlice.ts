import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { register } from '../../../api/registration'
import type { RegisterVariables } from '../../../types/api/requests'
import type { RegisterResponse } from '../../../types/api/response'
import type { User } from '../../../types/models'

export const registerThunk = createAsyncThunk<
  RegisterResponse,
  RegisterVariables
>('auth/registerUser', (variables) => {
  return register(variables)
})

interface InitialState {
  user: User | null
  token: string | null
  isLoading: boolean
  isLogined: boolean
}

const initialState: InitialState = {
  user: null,
  token: null,
  isLoading: false,
  isLogined: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      const token = action.payload.token

      window.localStorage.setItem('token', token)
      state.token = token
      state.user = action.payload.newUser
      state.isLogined = true
      state.isLoading = false
    })
    builder.addCase(registerThunk.rejected, (state) => {
      state.token = null
      state.user = null
      state.isLogined = false
      state.isLoading = false
    })
  },
})

export default authSlice.reducer
