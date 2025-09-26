import { toJson } from '../heplers/toJson'
import type { GetMeResponse } from '../types/api/response'

export const getMe = async (): Promise<GetMeResponse> => {
  const response = await fetch(' http://localhost:3002/api/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  return toJson(response)
}
