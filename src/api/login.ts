import type { RegisterVariables } from '../types/api/requests'
import type { LoginResponse } from '../types/api/response'

export const login = async (
  variables: RegisterVariables,
): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:3002/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(variables),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw new Error((await response.json()).message)
  }
}
