import { toJson } from '../heplers/toJson'
import type { CreatePostVariables } from '../types/api/requests'
import type { CreatePostResponse } from '../types/api/response'
import { api } from './api'

export const createPost = async ({
  title,
  text,
  image,
}: CreatePostVariables): Promise<CreatePostResponse> => {
  const formData = new FormData()

  formData.append('title', title)
  formData.append('text', text)
  if (image) {
    formData.append('image', image)
  }
  const response = await api.post('/posts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: formData,
  })

  return toJson(response)
}
