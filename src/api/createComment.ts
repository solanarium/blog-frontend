import { toJson } from '../heplers/toJson'
import type { CreatedCommentResponse } from '../types/api/response'
import { api } from './api'

export interface CreateCommentVariables {
  id: string
  text: string
}

export const createComment = async ({
  id,
  text,
}: CreateCommentVariables): Promise<CreatedCommentResponse> => {
  const response = await api.post(`/posts/${id}/comments`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify({ text }),
  })

  return toJson(response)
}
