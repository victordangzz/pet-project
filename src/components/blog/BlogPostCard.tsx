import React from 'react'

interface BlogPostCardProps {
  title: string
  content: string
  date: Date | string
}

export default function BlogPostCard({
  title,
  content,
  date
}: BlogPostCardProps) {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow relative'>
      <img src='images/blogs-slider-5.png' alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <div className='flex items-center gap-2 mb-2'>
          <span
            className='px-2 py-1 rounded-full text-xs font-medium'
            style={{ backgroundColor: '#34D399', color: 'white' }}
          >
            Category
          </span>
          <span className='text-xs text-gray-500'>Ngày đăng: Date</span>
        </div>
        <h3 className='font-semibold text-lg mb-2'>{title}</h3>
        <p className='text-sm text-gray-600'>{content}</p>
      </div>
    </div>
  )
}
