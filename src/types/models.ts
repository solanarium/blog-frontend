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

export type Post = BaseModel<{
  username: string
  title: string
  text: string
  image: string
  views: number
  author: Author
  comments: string[]
}>

export type Author = BaseModel<{
  username: string
  password: string
  posts: string[]
}>
