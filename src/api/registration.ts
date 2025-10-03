import { toJson } from '../heplers/toJson'
import type { RegisterVariables } from '../types/api/requests'
import type { RegisterResponse } from '../types/api/response'
import { api } from './api'

export const register = async (
  variables: RegisterVariables,
): Promise<RegisterResponse> => {
  const response = await api.post('/auth/register', {
    body: JSON.stringify(variables),
  })

  return toJson(response)
}
