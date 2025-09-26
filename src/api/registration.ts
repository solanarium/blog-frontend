import { toJson } from '../heplers/toJson'
import type { RegisterVariables } from '../types/api/requests'
import type { RegisterResponse } from '../types/api/response'

export const register = async (
  variables: RegisterVariables,
): Promise<RegisterResponse> => {
  const response = await fetch('http://localhost:3002/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(variables),
  })

  return toJson(response)
}
