import useEmblaCarousel from 'embla-carousel-react'
import InfoBox from '../info-box'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

type HeroSectionProps = {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' })

  const slides = ['#1. HUẤN LUYỆN CHÓ CƠ BẢN - 14 NGÀY KẾT NỐI', '#2. HUẤN LUYỆN CHÓ 3 BƯỚC', '#3. NÂNG CAO KỸ NĂNG']

  return (
    <section
      className={`relative z-0 w-full flex flex-col lg:grid lg:grid-cols-[3fr_1fr_1fr] 
        lg:grid-rows-[4fr_1fr] lg:h-screen ${className || ''}`}
    >
      {/* Main content area */}
      <div className='order-1 pl-5 pt-4 md:pl-10 md:pt-6 lg:pl-28 h-[85vh] bg-primary flex items-center justify-center lg:col-start-1 lg:row-start-1'>
        <div className='mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-6 pt-20 lg:flex-row '>
          {/* Text content */}
          <div className='order-2 mr-2 mb-4 flex flex-col items-center justify-center text-white lg:order-1 lg:flex-[40%] lg:items-start'>
            <h2 className='text-center text-xl font-sans uppercase leading-snug lg:text-left lg:text-4xl'>
              Bạn muốn huấn luyện thú cưng của bạn?
            </h2>
            <button className='mt-6 w-fit rounded-lg bg-[#F7613E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#E55A35]'>
              Xem ngay
            </button>
          </div>

          {/* Hero image */}
          <div className='order-1 flex items-end  lg:order-2 lg:flex-[60%]'>
            <img
              src='/images/dog-section-1.png'
              alt='Dog training hero image'
              className='h-auto object-contain w-52 lg:w-[400px]'
            />
          </div>
        </div>
      </div>

      {/* Secondary content area */}
      <div className='order-3 h-full bg-[#3843D0]  lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:overflow-hidden'>
        <div className='flex h-full w-full flex-col lg:pt-24'>
          <div className='mt-2 flex justify-center lg:justify-start lg:pl-16'>
            <img src='/images/review-section-3.png' alt='Customer reviews showcase' className=' lg:w-[230px]' />
          </div>
          <div className='mt-12 flex flex-1 items-center justify-center'>
            <img
              src='/images/dog-section-3.png'
              alt='Dog training showcase'
              className='w-[230px] object-cover lg:w-[400px]'
            />
          </div>
        </div>
      </div>

      {/* Course list section */}
      <div className='order-2 flex h-[15vh] pl-5 pt-4 md:pl-10 md:pt-6 lg:pl-28 w-full items-center justify-center bg-secondary text-white lg:col-start-1 lg:row-start-2 lg:text-xl'>
        <div className='w-full'>
          {/* Desktop: static list */}
          <div className='hidden lg:block'>
            <div className='flex items-start'>
              <ol className='text-left text-lg lg:text-xl montserrat font-semibold '>
                <li>#1. HUẤN LUYỆN CHÓ CƠ BẢN - 14 NGÀY KẾT NỐI</li>
                <li>#2. HUẤN LUYỆN CHÓ 3 BƯỚC</li>
                <li>#3. NÂNG CAO KỸ NĂNG</li>
              </ol>
              <BsArrowUpRightCircleFill size={24} className='ml-4 mt-1 flex-shrink-0' />
            </div>
          </div>

          {/* Mobile: carousel */}
          <div className='block lg:hidden w-full px-4'>
            <div className='embla' ref={emblaRef}>
              <div className='embla__container'>
                {slides.map((slide, index) => (
                  <div key={index} className='embla__slide'>
                    <div className='flex min-h-[60px] w-full flex-col items-center justify-center text-center text-sm font-semibold'>
                      <span className='break-words px-2'>{slide}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className='mt-2 flex justify-center gap-2'>
              <span className='inline-block h-1 w-8 rounded-full bg-white'></span>
              <span className='inline-block h-1 w-6 rounded-full border border-white'></span>
              <span className='inline-block h-1 w-6 rounded-full border border-white'></span>
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
