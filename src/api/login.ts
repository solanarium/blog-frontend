import { toJson } from '../heplers/toJson'
import type { RegisterVariables } from '../types/api/requests'
import type { LoginResponse } from '../types/api/response'
import { api } from './api'

export const login = async (
  variables: RegisterVariables,
): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', {
    body: JSON.stringify(variables),
  })

  return toJson(response)
}
