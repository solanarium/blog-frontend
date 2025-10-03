import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

import { createComment } from '../../../api/createComment'
import { getPostById } from '../../../api/getPostById'
import type { Comment, Post } from '../../../types/models'
import type { RootState } from '../../store'

export const getPostByIdThunk = createAsyncThunk(
  'onePost/getPostById',
  getPostById,
)

export const createCommentThunk = createAsyncThunk(
  'onePost/createComment',
  (text: string, thunkApi) => {
    const post = (thunkApi.getState() as RootState).onePost.post as Post

    return createComment({
      id: post._id,
      text,
    })
  },
)

interface onePostSlice {
  post: Post | null
  isLoading: boolean
  status: number
  comments: Comment[]
}

const initialState: onePostSlice = {
  post: null,
  isLoading: true,
  status: 200,
  comments: [],
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
    builder.addCase(createCommentThunk.fulfilled, (state, action) => {
      state.comments.push(action.payload.comment)
    })
  },
})

export default onePostSlice.reducer
