import { toJson } from '../heplers/toJson'
import type { Post } from '../types/models'

export const getPosts = async (): Promise<Array<Post>> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/posts`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  )

  return toJson(response)
}
