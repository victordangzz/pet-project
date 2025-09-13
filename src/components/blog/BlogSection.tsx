import BlogList from '@/components/blog/BlogList'
import CategoryListBlog from '@/components/blog/CategoryListBlog'
import SearchBarBlog from '@/components/blog/SearchBarBlog'
import TopTopicsBlog from '@/components/blog/TopTopicsBlog'
import { useState, useMemo } from 'react'

 
export type CategoryType = {
  id: string
  name: string
  color: string
}
const categories: CategoryType[] = [
  { id: '1', name: 'Chó', color: '#34D399' },
  { id: '2', name: 'Mèo', color: '#60A5FA' },
  { id: '3', name: 'Đồ ăn', color: '#FBBF24' },

]
const mockTopics = [
  "React Hooks Best Practices",
  "TypeScript Tips & Tricks",
  "State Management in 2024",
  "Next.js Performance Tuning",
  "UI/UX Trends for Developers"
];


const topTopics = mockTopics.slice(0, 5).map((title) => title) // ví dụ

export default function BlogSection() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return categories.filter((category) => {
      const matchesCategory = selectedCategory ? category.name === selectedCategory : true
      return matchesCategory
    })
  }, [search, selectedCategory])

  return (
    <div className=' mx-auto py-12 lg:px-28 flex w-full min-h-screen gap-8 montserrat'>
      {/* Sidebar */}
      <aside className='w-full lg:w-1/3 xl:w-1/4 '>
        <SearchBarBlog value={search} onChange={setSearch} />
        <CategoryListBlog
          categories={categories}
          selected={selectedCategory}
          onSelect={(cat) => {
            if (selectedCategory === cat) setSelectedCategory(null)
            else setSelectedCategory(cat)
          }}
        />
        <TopTopicsBlog topics={topTopics} />
      </aside>

      {/* Main content */}
      <main className='w-full lg:w-2/3 xl:w-3/4'>
        <h2 className='text-2xl font-bold mb-6'>Recent blog posts</h2>
        <BlogList  />
      </main>
    </div>
  )
}
