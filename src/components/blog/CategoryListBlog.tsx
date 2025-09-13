import type { CategoryType } from "./BlogSection"
interface CategoryListBlogProps {
  categories: CategoryType[]
  selected: string | null
  onSelect: (cat: string) => void
}

export default function CategoryListBlog({ categories, selected, onSelect }: CategoryListBlogProps) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map(cat => (
          <li key={typeof cat === 'string' ? cat : cat.id ?? cat.name}>
            <button
              className={`w-full text-left px-3 py-2 rounded-lg transition 
                ${selected === (typeof cat === 'string' ? cat : cat.id ?? cat.name) ? 'bg-indigo-500 text-white' : 'hover:bg-indigo-100 text-gray-700'}`}
              onClick={() => onSelect(typeof cat === 'string' ? cat : cat.id ?? cat.name)}
            >
              {typeof cat === 'string' ? cat : cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
