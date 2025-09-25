import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { createPost } from '../../../api/createPost'
import type { Post } from '../../../types/models'

export const createPostThunk = createAsyncThunk('posts/createPost', createPost)

interface PostState {
  posts: Post[]
}

const initialState: PostState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      state.posts.push(action.payload.post)
    })
    builder.addCase(createPostThunk.rejected, () => {})
  },
})

export default postsSlice.reducer
