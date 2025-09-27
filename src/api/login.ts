import { toJson } from '../heplers/toJson'
import type { RegisterVariables } from '../types/api/requests'
import type { LoginResponse } from '../types/api/response'

export const login = async (
  variables: RegisterVariables,
): Promise<LoginResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(variables),
    },
  )

  return toJson(response)
}
