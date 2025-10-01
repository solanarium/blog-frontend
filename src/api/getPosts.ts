import { toJson } from '../heplers/toJson'
import type { Post } from '../types/models'
import { api } from './api'

export const getPosts = async (): Promise<Array<Post>> => {
  const response = await api.get('/posts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  return toJson(response)
}
