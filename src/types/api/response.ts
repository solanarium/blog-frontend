import type { User } from '../models'

export type RegisterResponse = {
  message: string
  newUser: User
  token: string
}

export type LoginResponse = {
  token: string
  user: User
  message: string
}

export type GetMeResponse = {
  token: string
  user: User
}
