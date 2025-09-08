import { FaPlay } from 'react-icons/fa'

export default function Sidebar() {
  const tags = ['#FOOD', '#FOODFORPET', '#PETTRAINING']

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-start gap-4'>
        {/* Icon Play */}
        <button className='flex items-center justify-center w-13 h-13 font-bold text-[#FF80A9] bg-white rounded-full'>
          <FaPlay className='text-2xl' />
        </button>

        {/* Title */}
        <h2 className='font-bold text-white text-[30px] montserrat w-[70%]'>Hot Deals For You</h2>
      </div>
      {/* Tags */}
      <div className='flex flex-col gap-3'>
        {tags.map((tag) => (
          <button key={tag} className='px-4 py-2 text-sm text-center text-white border border-white rounded-full w-fit'>
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
