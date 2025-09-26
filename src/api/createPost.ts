import { toJson } from '../heplers/toJson'
import type { CreatePostVariables } from '../types/api/requests'
import type { CreatedPostResponse } from '../types/api/response'

export const createPost = async ({
  title,
  text,
  image,
}: CreatePostVariables): Promise<CreatedPostResponse> => {
  const formData = new FormData()

  formData.append('title', title)
  formData.append('text', text)
  if (image) {
    formData.append('image', image)
  }
  const response = await fetch('http://localhost:3002/api/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      // 'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })

  return toJson(response)
}
