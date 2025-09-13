
interface SearchBarBlogProps {
  value: string
  onChange: (v: string) => void
}

export default function SearchBarBlog({ value, onChange }: SearchBarBlogProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
