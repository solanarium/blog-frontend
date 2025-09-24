import type { CreatePostVariables } from '../types/api/requests'

export const createPost = async ({
  title,
  text,
  imageUrl,
}: CreatePostVariables) => {
  const response = await fetch('http://localhost:3002/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      text,
      imageUrl,
    }),
  })

  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()

    throw new Error(error.message)
  }
}
