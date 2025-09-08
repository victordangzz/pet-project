import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'
import BenefitItem from './BenefitItem'
import { benefitsData } from '../../data/benefits'

export default function CourseBenefits() {
  const slides = benefitsData

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Cập nhật index khi slide thay đổi
  const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <section className='bg-secondary text-white  px-5 md:px-12 lg:px-30'>
      <div className='mx-auto text-center pt-8 md:pt-12'>
        {/* Avatar */}
        <img
          src='/images/benefit-course.png'
          alt='Corgi'
          className='w-30 h-30 md:w-40 md:h-40 lg:w-72 lg:h-72  object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-lg'
        />

        {/* Heading */}
        <div className='h-[75px] w-[300px] md:w-[500px] lg:w-4xl mx-auto pt-2'>
          <h2 className='text-[20px] md:text-[24px] mb-4'>
            Đến với chúng tôi, bạn và thú cưng sẽ nhận được những điều gì?
          </h2>
        </div>

        {/* Description */}
        <p className='text-[16px] md:text-[20px] text-center text-purple-100 max-w-4xl mb-10  mx-auto mt-10 lg:mt-0   montserrat'>
          Khi tham gia Khoá Huấn Luyện Thú Cưng - bạn sẽ nhận được các nội dung giá trị về khoá đào tạo giúp bạn trở
          thành chủ sở hữu thú cưng có trách nhiệm và hiểu biết.
        </p>

        {/* Main content grid */}
        <div className='lg:flex lg:justify-between lg:items-start gap-4 h-[600px]'>
          {/* Left: Benefits list */}
          <div className='flex flex-col lg:h-full gap-8 lg:w-[30%]'>
            {slides.map((s, idx) => (
              <BenefitItem
                key={idx}
                icon={s.icon}
                text={s.benefit}
                active={selectedIndex === idx}
                onClick={() => scrollTo(idx)}
              />
            ))}
          </div>

          {/* Right: Slider */}
          <div className='relative hidden lg:block lg:w-[57%] xl:w-[63%] h-[525px]'>
            {/* Carousel viewport */}
            <div className='overflow-hidden rounded-2xl shadow-lg h-full' ref={emblaRef}>
              <div className='flex h-full'>
                {slides.map((slide, idx) => (
                  <div key={idx} className='flex-[0_0_100%] relative w-[80vw] h-full'>
                    <img src={slide.img} alt={slide.benefit} className='w-full h-full object-cover' />

                    {/* Lớp phủ mờ màu đen 30% */}
                    <div className='absolute inset-0 bg-black/30'></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Caption fixed position - above dots */}
            <div className='absolute bottom-16 left-4 right-4 z-20'>
              <p className='text-sm md:text-base px-3 py-2 rounded-lg  text-white'>{slides[selectedIndex]?.caption}</p>
            </div>

            {/* Dot indicators outside carousel - centered */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
              {slides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollTo(dotIdx)}
                  className={`w-3 h-3 rounded-full transition-colors ${dotIdx === selectedIndex ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
