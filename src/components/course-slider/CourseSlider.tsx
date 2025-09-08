import useEmblaCarousel from 'embla-carousel-react'
import CourseCard from './CourseCard'
import type { Course } from './types'
import { coursesData } from '../../data/courses'

export default function CourseSlider() {
  const courses: Course[] = coursesData
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })

  return (
    <div className='relative pt-5 px-4 pl-5  md:pl-10 md:pt-6 lg:pl-28'>
      <h2 className='text-[20px] text-[#16006d] pb-4 lg:text-[32px] '>Những khóa học dành cho thú cưng mới nhất</h2>
      {/* Slider wrapper */}
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-6'>
          {courses.map((course, idx) => (
            <div key={idx} className='flex-[0_0_25%] lg:flex-[0_0_20%]'>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
