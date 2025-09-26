import { toJson } from '../heplers/toJson'
import type { Post } from '../types/models'

export const getPosts = async (): Promise<Array<Post>> => {
  const response = await fetch('http://localhost:3002/api/posts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  })

  return toJson(response)
}
