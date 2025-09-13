import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'

type SlideType = {
  image: string
  title: string
  subtitle?: string
}

const slides: SlideType[] = [
  {
    image: '/images/blogs-slider-1.png',
    title: 'Breaking Into Product Design:',
    subtitle: 'Advice from Untitled Founder, Frankie'
  },
  {
    image: '/images/blogs-slider-2.png',
    title: 'Hành trình nuôi thú cưng toàn diện',
    subtitle: 'Từ chăm sóc đến huấn luyện chuyên sâu'
  },
  {
    image: '/images/blogs-slider-3.png',
    title: 'Cùng nhau lớn lên',
    subtitle: 'Kết nối yêu thương giữa bạn và pet của bạn'
  },
  {
    image: '/images/blogs-slider-4.png',
    title: 'Cùng nhau lớn lên',
    subtitle: 'Kết nối yêu thương giữa bạn và pet của bạn'
  },
  {
    image: '/images/blogs-slider-5.png',
    title: 'Cùng nhau lớn lên',
    subtitle: 'Kết nối yêu thương giữa bạn và pet của bạn'
  }
]

export default function CarouselBlogs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className=' w-full bg-white pt-[104px] pb-10 mx-auto rouder-t-4xl lg:px-28'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className='flex-[0_0_100%] relative h-[500px] md:h-[650px] w-full rounded-t-4xl overflow-hidden'
            >
              <img src={slide.image} alt={slide.title} className='w-full h-full' />
              <div className='absolute bottom-8 left-8 text-white z-10 w-full'>
                <p className='text-sm font-semibold mb-1'>Featured</p>
                <h1 className='text-2xl md:text-4xl font-bold leading-tight'>{slide.title}</h1>
                {slide.subtitle && <p className='text-base md:text-lg mt-2'>{slide.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
