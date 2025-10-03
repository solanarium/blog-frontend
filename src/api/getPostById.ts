import type { Post } from '../types/models'
import { api } from './api'

interface PostError {
  message: string
  status: number
}

export const getPostById = async (id: string): Promise<Post | PostError> => {
  const response = await api.get(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  const data = await response.json()

  if (response.ok) {
    return data
  } else {
    return {
      message: data.message,
      status: response.status,
    }
  }
}
