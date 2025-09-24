import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { createPost } from '../../../api/createPost'

export const createThunk = createAsyncThunk('posts/createPost', createPost)

interface PostState {
  isLoading: boolean
  posts: []
}

const initialState: PostState = {
  isLoading: true,
  posts: [],
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})
