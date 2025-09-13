import type { SuccessResponseApi } from '@/types/common'
import http from '@/utils/http'
import type { BlogType } from '@/types/blog'
import type { BlogSuccessResponseApi } from '@/types/blog'


const URL = 'blogs'
const blogApi = {
    getAllBlogs() {
        return http.get<BlogSuccessResponseApi>(URL)
    },
    createBlog(body: { title: string; content: string }) {
        return http.post<BlogSuccessResponseApi>(URL, body)
    },
    updateBlog(blog_id: string, body: { title?: string; content?: string }) {
        return http.put<BlogSuccessResponseApi>(`${URL}/${blog_id}`, body)
    },
    getMyBlogs() {
        return http.get<BlogSuccessResponseApi>(`${URL}/my-blogs`)
    },
    getSingleBlog(blog_id: string) {
        return http.get<SuccessResponseApi<{ blog: BlogType }>>(`${URL}/${blog_id}`)
    },
    deleteBlog(blog_id: string) {
        return http.delete<SuccessResponseApi<{ message: string }>>(`${URL}/${blog_id}`)
    }
}


export default blogApi
