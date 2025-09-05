import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback } from 'react'
import { FaPlay } from 'react-icons/fa'

type Course = {
  title: string
  image: string
}

const courses: Course[] = [
  {
    title: 'Huấn luyện chó cơ bản: 14 ngày kết nối',
    image: '/images/dog-slider.png'
  },
  {
    title: 'Huấn luyện chó 3 bước',
    image: '/images/dog-slider.png'
  },
  {
    title: 'Nâng cao kỹ năng',
    image: '/images/dog-slider.png'
  },
  {
    title: 'COMING SOON',
    image: '/images/dog-slider.png'
  },
  {
    title: 'COMING SOON',
    image: '/images/dog-slider.png'
  }
]

export default function CourseSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className='relative wp-content'>
      {/* Slider wrapper */}
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-6'>
          {courses.map((course, idx) => (
            <div key={idx} className='flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_25%]'>
              <div className='group'>
                <div className='relative w-full h-44 rounded-xl overflow-hidden'>
                  <img src={course.image} alt={course.title} className='w-full h-full object-cover rounded-xl' />
                  {/* Nút play chèn vào góc */}
                  <button
                    className='
                      absolute bottom-2 right-2 bg-white border-2 border-blue-600
                      text-blue-600 rounded-full w-10 h-10 flex items-center justify-center
                      shadow-md transition-transform group-hover:scale-110
                    '
                  >
                    <FaPlay size={14} />
                  </button>
                </div>
                <p className='mt-2 text-center text-sm font-semibold'>{course.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nút điều hướng */}
      <button
        onClick={scrollPrev}
        className='absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow'
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className='absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow'
      >
        ›
      </button>
    </div>
  )
}
