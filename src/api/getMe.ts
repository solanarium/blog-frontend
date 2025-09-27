import { toJson } from '../heplers/toJson'
import type { GetMeResponse } from '../types/api/response'

export const getMe = async (): Promise<GetMeResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/auth/me`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  )

  return toJson(response)
}
