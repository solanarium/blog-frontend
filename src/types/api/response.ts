import type { User } from '../models'

export type RegisterResponse = {
  message: string
  newUser: User
  token: string
}
