import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

import { getPostById } from '../../../api/getPostById'
import type { Post } from '../../../types/models'

export const getPostByIdThunk = createAsyncThunk(
  'onePost/getPostById',
  getPostById,
)

interface onePostSlice {
  post: Post | null
  isLoading: boolean
  status: number
}

const initialState: onePostSlice = {
  post: null,
  isLoading: true,
  status: 200,
}

const onePostSlice = createSlice({
  name: 'onePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostByIdThunk.fulfilled, (state, action) => {
      if ('status' in action.payload) {
        state.post = null
        state.isLoading = false
        state.status = action.payload.status
        toast.error(action.payload.message)
      } else {
        state.post = action.payload
        state.status = 200
        state.isLoading = false
      }
    })
    builder.addCase(getPostByIdThunk.rejected, (state) => {
      state.post = null
      state.status = 500
      state.isLoading = false
      toast.error('Something went wrong!')
    })
  },
})

export default onePostSlice.reducer
