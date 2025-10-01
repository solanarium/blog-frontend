import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

import { getMe } from '../../../api/getMe'
import { login } from '../../../api/login'
import { register } from '../../../api/registration'
import type { User } from '../../../types/models'

export const registerThunk = createAsyncThunk('auth/registerUser', register)

export const loginThunk = createAsyncThunk('auth/loginUser', login)

export const getMeThunk = createAsyncThunk('auth/getMe', getMe)

interface InitialState {
  user: User | null
  isLoading: boolean
  isLogined: boolean
}

const initialState: InitialState = {
  user: null,
  isLoading: true,
  isLogined: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null
      state.isLoading = false
      state.isLogined = false
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      const token = action.payload.token

      window.localStorage.setItem('token', token)
      state.user = action.payload.newUser
      state.isLogined = true
      toast.success(action.payload.message)
    })
    builder.addCase(registerThunk.rejected, (state, action) => {
      toast.error(action.error.message)
      state.user = null
      state.isLogined = false
    })
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      window.localStorage.setItem('token', action.payload.token)
      state.user = action.payload.user
      state.isLogined = true
      toast.success(action.payload.message)
    })
    builder.addCase(loginThunk.rejected, (state, action) => {
      toast.error(action.error.message)
      state.isLogined = false
      state.user = null
    })
    builder.addCase(getMeThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getMeThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.isLogined = true
      state.user = action.payload?.user
    })
    builder.addCase(getMeThunk.rejected, (state) => {
      state.isLoading = false
      state.isLogined = false
      state.user = null
    })
  },
})

export default authSlice.reducer

export const { logOut } = authSlice.actions
