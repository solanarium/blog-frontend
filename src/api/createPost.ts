import { toJson } from '../heplers/toJson'
import type { CreatePostVariables } from '../types/api/requests'
import type { CreatedPostResponse } from '../types/api/response'

export const createPost = async ({
  title,
  text,
  image,
}: CreatePostVariables): Promise<CreatedPostResponse> => {
  const response = await fetch('http://localhost:3002/api/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      text,
      image,
    }),
  })

  return toJson(response)
}
