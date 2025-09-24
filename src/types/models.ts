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
  imageUrl: string
  views: number
  author: Author
  comments: string[]
}>

export type Author = {
  _id: string
  username: string
  password: string
  posts: string[]
  createdAt: string
  updatedAt: string
  __v: number
}
