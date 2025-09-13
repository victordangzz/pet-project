import { useQueryClient, useQuery } from '@tanstack/react-query'
import BlogPostCard from './BlogPostCard'
import blogApi from '@/apis/blog.api'

interface BlogsType {
  title: string
  content: string
  date: Date | string
}

interface BlogListProps {
  blogs: BlogsType[]
}

export default function BlogList() {
  const queryClient = useQueryClient()
  const { data: allBlogs, isLoading } = useQuery({
    queryKey: ['all-blogs'],
    queryFn: () => blogApi.getAllBlogs()
  })

  if (isLoading) {
    return (
      <div className='flex justify-center items-center py-8'>
        <div className='text-lg'>Đang tải...</div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
      {allBlogs?.data.data.blogs.map((blog, idx) => (
        <BlogPostCard
          key={idx}
          title={blog.title}
          content={blog.content}
          date={(blog as any).date || new Date().toISOString()}
        />
      ))}
    </div>
  )
}
