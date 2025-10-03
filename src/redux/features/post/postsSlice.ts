import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { createPost } from '../../../api/createPost'
import { getPosts } from '../../../api/getPosts'
import type { Post } from '../../../types/models'

export const createPostThunk = createAsyncThunk('posts/createPost', createPost)

export const getPostThunk = createAsyncThunk('posts/getPost', getPosts)

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      state.posts.push(action.payload.post)
    })
    builder.addCase(getPostThunk.fulfilled, (state, action) => {
      state.posts = action.payload
    })
    builder.addCase(getPostThunk.rejected, (state) => {
      state.posts = []
    })
  },
})

export default postsSlice.reducer
