import { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface Slide {
  img: string
  caption: string
  benefit: string
  icon: string
}

interface BenefitSliderProps {
  slides: Slide[]
  selectedIndex: number
  setSelectedIndex: (index: number) => void
}

export default function BenefitSlider({ slides, selectedIndex, setSelectedIndex }: BenefitSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false, containScroll: 'trimSnaps' })

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <div className='relative hidden lg:block lg:w-[57%] xl:w-[63%] h-[525px]'>
      <div className='overflow-hidden rounded-2xl shadow-lg h-full' ref={emblaRef}>
        <div className='flex h-full'>
          {slides.map((slide, idx) => (
            <div key={idx} className='flex-[0_0_100%] relative w-[80vw] h-full'>
              <img src={slide.img} alt={slide.benefit} className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/30'></div>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute bottom-16 left-4 right-4 z-20'>
        <p className='text-sm md:text-base px-3 py-2 rounded-lg text-white'>{slides[selectedIndex]?.caption}</p>
      </div>

      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
        {slides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => scrollTo(dotIdx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              dotIdx === selectedIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
