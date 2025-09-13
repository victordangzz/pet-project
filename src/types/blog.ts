import type { SuccessResponseApi } from './common'


export type BlogType = {
  title: string
  content: string
}
export type BlogSuccessResponseApi = SuccessResponseApi<{
  blogs: BlogType[]
}>
export type CreateBlogReqBody = {
  title: string
  content: string
}
export type UpdateBlogReqBody = {
  title?: string
  content?: string
}
