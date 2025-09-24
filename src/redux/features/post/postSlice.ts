import { createSlice } from '@reduxjs/toolkit'

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
