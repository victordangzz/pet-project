import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import InfoBox from '../info-box'
import type { HeroSectionProps } from './types'
import { COURSES, HERO_COLORS } from './constants'

const HeroSection = ({ className }: HeroSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section
      className={`relative z-0 w-full flex flex-col lg:grid lg:grid-cols-[3fr_1fr_1fr] 
        lg:grid-rows-[4fr_1fr] lg:h-screen ${className || ''}`}
      aria-label='Hero section with course information'
    >
      {/* Main content area */}
      <div
        className='order-1 pl-5 pt-4 md:pl-10 md:pt-6 lg:pl-28 h-[85vh] bg-primary flex items-center justify-center lg:col-start-1 lg:row-start-1'
        style={{ backgroundColor: HERO_COLORS.primary }}
      >
        <div className='mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-6 pt-20 lg:flex-row'>
          {/* Text content */}
          <div className='order-2 mr-2 mb-4 flex flex-col items-center justify-center text-white lg:order-1 lg:flex-[40%] lg:items-start'>
            <h1 className='text-center text-xl font-sans uppercase leading-snug lg:text-left lg:text-4xl'>
              Bạn muốn huấn luyện thú cưng của bạn?
            </h1>
            <button
              className='mt-6 w-fit rounded-lg px-6 py-3 font-semibold text-white transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
              style={{ backgroundColor: HERO_COLORS.accent }}
              aria-label='Xem thông tin khóa học ngay'
              type='button'
            >
              Xem ngay
            </button>
          </div>

          {/* Hero image */}
          <div className='order-1 flex items-end lg:order-2 lg:flex-[60%]'>
            <img
              src='/images/dog-section-1.png'
              alt='Chó đang được huấn luyện với huấn luyện viên chuyên nghiệp'
              className='h-auto object-contain w-52 lg:w-[400px]'
              loading='lazy'
              decoding='async'
            />
          </div>
        </div>
      </div>

      {/* Secondary content area */}
      <div
        className='order-3 h-full lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:overflow-hidden'
        style={{ backgroundColor: HERO_COLORS.blue }}
      >
        <div className='flex h-full w-full flex-col lg:pt-24'>
          <div className='mt-2 flex justify-center lg:justify-start lg:pl-16'>
            <img
              src='/images/review-section-3.png'
              alt='Đánh giá từ khách hàng về dịch vụ huấn luyện thú cưng'
              className='lg:w-[230px]'
              loading='lazy'
              decoding='async'
            />
          </div>
          <div className='mt-12 flex flex-1 items-center justify-center'>
            <img
              src='/images/dog-section-3.png'
              alt='Thú cưng sau khi được huấn luyện thành công'
              className='w-[230px] object-cover lg:w-[400px]'
              loading='lazy'
              decoding='async'
            />
          </div>
        </div>
      </div>

      {/* Course list section */}
      <div
        className='order-2 flex h-[15vh] pl-5 pt-4 md:pl-10 md:pt-6 lg:pl-28 w-full items-center justify-center text-white lg:col-start-1 lg:row-start-2 lg:text-xl'
        style={{ backgroundColor: HERO_COLORS.secondary }}
      >
        <div className='w-full' role='region' aria-label='Danh sách khóa học'>
          {/* Desktop: static list */}
          <div className='hidden lg:block'>
            <div className='flex items-start'>
              <ol className='text-left text-lg lg:text-xl montserrat font-semibold'>
                {COURSES.map((course, index) => (
                  <li key={course.id}>
                    #{index + 1}. {course.title}
                  </li>
                ))}
              </ol>
              <BsArrowUpRightCircleFill size={24} className='ml-4 mt-1 flex-shrink-0' aria-hidden='true' />
            </div>
          </div>

          {/* Mobile: carousel */}
          <div className='block lg:hidden w-full px-4'>
            <div className='embla' ref={emblaRef} role='region' aria-label='Carousel khóa học' aria-live='polite'>
              <div className='embla__container'>
                {COURSES.map((course, index) => (
                  <div key={course.id} className='embla__slide'>
                    <div className='flex min-h-[60px] w-full flex-col items-center justify-center text-center text-sm font-semibold'>
                      <span className='break-words px-2'>
                        #{index + 1}. {course.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className='mt-2 flex justify-center gap-2' role='tablist' aria-label='Điều hướng carousel'>
              {COURSES.map((_, index) => (
                <button
                  key={index}
                  className={`inline-block h-1 w-6 rounded-full border transition-colors ${
                    index === selectedIndex
                      ? 'w-8 bg-white border-white'
                      : 'border-white bg-transparent hover:bg-white hover:bg-opacity-50'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Chuyển đến slide ${index + 1}`}
                  role='tab'
                  aria-selected={index === selectedIndex}
                  tabIndex={index === selectedIndex ? 0 : -1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Store info box */}
      <InfoBox
        title='CỬA HÀNG'
        description='PetCourse mang đến những món ăn dành cho thú cưng ...'
        backgroundColor='#fa8c16'
        className='order-4 lg:col-start-2 lg:row-start-2 h-[15vh]'
      />

      {/* Course info box */}
      <InfoBox
        title='KHÓA HỌC'
        description='Đến với chúng tôi các bạn sẽ được trải nghiệm những khóa học chuyên nghiệp nhất.'
        backgroundColor='#13c2c2'
        className='order-5 lg:col-start-3 lg:row-start-2 h-[15vh]'
      />
    </section>
  )
}

export default HeroSection
