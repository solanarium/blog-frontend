import type { GetMeResponse } from '../types/api/response'

export const getMe = async (token: string): Promise<GetMeResponse> => {
  const response = await fetch(' http://localhost:3002/api/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()

    throw new Error(error.message)
  }
}
