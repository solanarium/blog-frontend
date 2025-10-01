import { toJson } from '../heplers/toJson'
import type { GetMeResponse } from '../types/api/response'
import { api } from './api'

export const getMe = async (): Promise<GetMeResponse> => {
  const response = await api.get('/auth/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  return toJson(response)
}
