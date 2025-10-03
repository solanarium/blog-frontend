export type BaseModel<T> = {
  createdAt: string
  updatedAt: string
  _id: string
} & T

export type User = BaseModel<{
  username: string
  posts: string[]
  comments: string[]
}>

export type Post = BaseModel<{
  username: string
  title: string
  text: string
  imageUrl: string | null
  views: number
  author: Author
  comments: string[]
}>

export type Author = BaseModel<{
  username: string
  posts: string[]
  comments: string[]
}>

export type Comment = {
  text: string
  author: Author
}
