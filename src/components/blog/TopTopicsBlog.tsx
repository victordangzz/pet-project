import React from 'react'

interface TopTopicsBlogProps {
  topics: string[]
}

export default function TopTopicsBlog({ topics }: TopTopicsBlogProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Top topics latest</h3>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {topics.map((t, idx) => (
          <li key={idx} className="px-2 py-1 rounded-lg hover:bg-gray-100 cursor-pointer">
            {t}
          </li>
        ))}
      </ol>
    </div>
  )
}
