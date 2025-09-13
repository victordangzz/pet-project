import { useState, useMemo } from 'react'
import BenefitItem from './BenefitItem'
import BenefitSlider from './BenefitSlider'
import { benefitsData } from '../../../data/benefits'

export default function CourseBenefits() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const slides = benefitsData

  const benefitsList = useMemo(
    () =>
      slides.map((s, idx) => (
        <BenefitItem
          key={idx}
          icon={s.icon}
          text={s.benefit}
          active={selectedIndex === idx}
          onClick={() => setSelectedIndex(idx)}
        />
      )),
    [slides, selectedIndex]
  )

  return (
    <section className='bg-[#8e59ff] text-white px-5 md:px-12 lg:px-30'>
      <div className='mx-auto text-center pt-8 md:pt-12'>
        <img
          src='/images/benefit-course.png'
          alt='Corgi'
          className='w-30 h-30 md:w-40 md:h-40 lg:w-72 lg:h-72 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-lg'
        />
        <div className='h-[75px] w-[300px] md:w-[500px] lg:w-4xl mx-auto pt-2'>
          <h2 className='text-[20px] md:text-[24px] mb-4'>
            Đến với chúng tôi, bạn và thú cưng sẽ nhận được những điều gì?
          </h2>
        </div>
        <p className='text-[16px] md:text-[20px] text-center text-purple-100 max-w-4xl mb-10 mx-auto mt-10 lg:mt-0 montserrat'>
          Khi tham gia Khoá Huấn Luyện Thú Cưng - bạn sẽ nhận được các nội dung giá trị về khoá đào tạo giúp bạn trở
          thành chủ sở hữu thú cưng có trách nhiệm và hiểu biết.
        </p>

        <div className='lg:flex lg:justify-between lg:items-start gap-4 h-[600px]'>
          <div className='flex flex-col lg:h-full gap-8 lg:w-[30%]'>{benefitsList}</div>

          <BenefitSlider slides={slides} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
      </div>
    </section>
  )
}
