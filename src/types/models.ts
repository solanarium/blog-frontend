export type BaseModel<T> = {
  createdAt: string
  updatedAt: string
  _id: string
} & T

export type User = BaseModel<{
  username: string
  password: string
  posts: []
}>
