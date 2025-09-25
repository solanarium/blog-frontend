import type { GetMeResponse } from '../types/api/response'

export const getMe = async (): Promise<GetMeResponse> => {
  const response = await fetch(' http://localhost:3002/api/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()

    throw new Error(error.message)
  }
}
