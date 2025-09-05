import useEmblaCarousel from 'embla-carousel-react'
import InfoBox from '../info-box'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
type HeroSectionProps = {
  className?: string // có thể nhận thêm className nếu muốn custom ngoài
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  const slides = ['#1. HUẤN LUYỆN CHÓ CƠ BẢN - 14 NGÀY KẾT NỐI', '#2. HUẤN LUYỆN CHÓ 3 BƯỚC', '#3. NÂNG CAO KỸ NĂNG']

  return (
    <section
      className={`flex flex-col relative z-0
        md:grid md:[grid-template-columns:3fr_1fr_1fr] md:[grid-template-rows:4fr_1fr] md:h-screen
        ${className}`}
    >
      {/* Item 1: chiếm 2/3 rộng, 4/5 cao */}
      <div
        className='bg-primary h-[85vh] order-1 flex items-center 
      justify-center md:col-start-1 md:row-start-1'
      >
        <div
          className=' max-w-[1200px] h-full mx-auto flex flex-col
         md:flex-row items-center justify-center gap-6 p-4 px-14 pt-20'
        >
          {/* Left content */}
          <div className='flex flex-col md:items-start items-center justify-center text-white md:flex-1 order-2 md:order-1 mb-4'>
            <h2 className='text-[20px] md:text-[40px] font-sans leading-snug  text-center md:text-left uppercase'>
              Bạn muốn huấn luyện thú cưng của bạn?
            </h2>
            <button className='bg-[#F7613E] hover:bg-[#E55A35] mt-6 text-white font-semibold px-6 py-3 rounded-lg w-fit'>
              Xem ngay
            </button>
          </div>

          {/* Right image */}
          <div className='md:flex-1 order-1 md:order-2 h-full flex items-end'>
            <img
              src='/images/dog-section-1.png'
              alt='Dog'
              className='md:w-full h-auto md:min-h-[280px] md:max-h-[680px] md:min-w-[450px] md:max-w-[450px] object-contain'
            />
          </div>
        </div>
      </div>

      {/* Item 3: chiếm 1/3 rộng, 4/5 cao */}
      <div
        className='bg-[#3843D0] order-3 md:col-start-2 md:col-span-2 
      md:row-start-1  h-full md:overflow-hidden'
      >
        <div className='flex flex-col w-full h-full md:pt-36'>
          <div className='flex justify-center md:justify-start md:pl-16 mt-4'>
            <img src='/images/review-section-3.png' alt='Review section 3' className='max-w-[270px] w-full' />
          </div>
          <div className='flex items-center justify-center mt-16 flex-1'>
            <img
              src='/images/dog-section-3.png'
              alt='Dog section 3'
              className='md:max-w-[420px] md:h-full object-contain md:max-h-[500px] md:min-h-[280px] max-w-[230px] h-full'
            />
          </div>
        </div>
      </div>

      {/* Item 2: chiếm 2/3 rộng, 1/5 cao */}
      <div className='bg-secondary h-[15vh] order-2 flex items-center justify-center text-white md:text-[22px] md:col-start-1 md:row-start-2 w-full'>
        {/* Mobile: slider, Desktop: text list */}
        <div className='w-full'>
          {/* Desktop: text list */}
          <div className='hidden md:block'>
            <div className='flex'>
              <ol className='text-left text-[20px] md:text-[22px] '>
                <li>#1. HUẤN LUYỆN CHÓ CƠ BẢN - 14 NGÀY KẾT NỐI</li>
                <li>#2. HUẤN LUYỆN CHÓ 3 BƯỚC</li>
                <li>#3. NÂNG CAO KỸ NĂNG</li>
              </ol>
              <BsArrowUpRightCircleFill size={24} className='ml-4 mt-1' />
            </div>
          </div>
          {/* Mobile: slider */}
          <div className='block md:hidden w-full'>
            <div className='embla' ref={emblaRef}>
              <div className='embla__container flex'>
                {slides.map((slide, index) => (
                  <div key={index} className='embla__slide flex-[0_0_100%] min-w-0'>
                    <div className='w-full text-center text-base font-semibold min-h-[60px] flex flex-col items-center justify-center px-4'>
                      <span>{slide}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dots */}
            <div className='flex justify-center gap-2 mt-2'>
              <span className='w-8 h-1 bg-white rounded-full inline-block'></span>
              <span className='w-6 h-1 border border-white rounded-full inline-block'></span>
              <span className='w-6 h-1 border border-white rounded-full inline-block'></span>
            </div>
          </div>
        </div>
      </div>

      {/* Item 4: chiếm 1/6 rộng, 1/5 cao */}
      <InfoBox
        title='CỬA HÀNG'
        description='PetCourse mang đến những món ăn dành cho thú cưng ...'
        backgroundColor='#fa8c16'
        className='order-4 md:col-start-2 md:row-start-2'
      />

      {/* Item 5: chiếm 1/6 rộng, 1/5 cao */}
      <InfoBox
        title='KHÓA HỌC'
        description='Đến với chúng tôi các bạn sẽ được trải nghiệm những khóa học chuyên nghiệp nhất.'
        backgroundColor='#13c2c2'
        className='order-5 md:col-start-3 md:row-start-2'
      />
    </section>
  )
}

export default HeroSection
