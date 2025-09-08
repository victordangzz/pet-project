import { FaPlay } from 'react-icons/fa'
import type { Course } from './types'

interface CourseCardProps {
  course: Course
  onClick?: () => void
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div className='group hover:border-primary' onClick={onClick}>
      <div className='relative w-[245px] h-[180px] lg:w-[310px] lg:h-[230px] rounded-xl overflow-hidden cursor-pointer'>
        <img
          src={course.image}
          alt={course.title}
          className='w-full h-full object-cover rounded-xl hover:border-primary'
        />
        {/* Nút play chèn vào góc */}
        <button
          className='
            absolute bottom-2 right-2 bg-white border-4 border-[#013399]
            text-[#013399] rounded-full w-13 h-13 lg:w-17 lg:h-17 flex items-center justify-center
            shadow-md transition-transform group-hover:scale-110 z-10
          '
        >
          <FaPlay className='text-[14px] lg:text-[20px]' />
        </button>
      </div>
      <p className='mt-2 text-center w-[245px] hover:font-bold text-sm lg:text-[24px] montserrat'>{course.title}</p>
    </div>
  )
}
