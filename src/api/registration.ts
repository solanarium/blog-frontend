import type { RegisterVariables } from '../types/api/requests'
import type { RegisterResponse } from '../types/api/response'

export const register = (
  variables: RegisterVariables,
): Promise<RegisterResponse> => {
  const response = fetch('http://localhost:3002/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(variables),
  }).then((res) => res.json())

  return response
}
