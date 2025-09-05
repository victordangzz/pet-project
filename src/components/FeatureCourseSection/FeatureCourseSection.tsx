import React from 'react'
import { Ellipse4_5 } from './Ellipse4_5'
import { Star } from './Star'
import { User } from './User'
import { UserCircle } from './UserCircle'
import alvanNeeEoqnr8IkwfeUnsplash1 from './alvan-nee-eoqnr8ikwfe-unsplash-1.png'
import avatarWrap2 from './avatar-wrap-2.svg'
import avatarWrap1 from './avatar-wrap.png'
import avatarWrap from './avatar-wrap.svg'
import ellipse6 from './ellipse-6.svg'
import ellipse7 from './ellipse-7.svg'
import ellipse8 from './ellipse-8.svg'
import ellipse9 from './ellipse-9.svg'
import group23 from './group-23.png'
import image from './image.png'
import image1 from './image.svg'
import vector1 from './vector-1.svg'

export const FeaturedCoursesSection = () => {
  const navigationItems = [{ label: 'Cửa hàng' }, { label: 'Khóa học' }]

  const avatarImages = [
    { src: avatarWrap1, alt: 'Avatar wrap' },
    { src: image, alt: 'Avatar wrap' },
    { src: avatarWrap, alt: 'Avatar wrap' },
    { src: image1, alt: 'Avatar wrap' },
    { src: avatarWrap2, alt: 'Avatar wrap' }
  ]

  const courseFeatures = [
    '#1. HUẤN LUYỆN CHÓ CƠ BẢN - 14 NGÀY KẾT NỐI',
    '#2. HUẤN LUYỆN CHÓ 3 BƯỚC',
    '#3. NÂNG CAO KỸ NĂNG'
  ]

  const bottomSections = [
    {
      title: 'CỬA HÀNG',
      description: 'PetCourse mang đến những món ăn dành cho thú cưng ....',
      bgColor: 'bg-colororangeorange'
    },
    {
      title: 'KHÓA HỌC',
      description: 'Đến với chúng tôi các bạn sẽ được trải nghiệm ...',
      bgColor: 'bg-cyan-6'
    }
  ]

  return (
    <section className='inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]'>
      <div className='inline-flex items-start relative flex-[0_0_auto]'>
        <div className='flex-col items-start inline-flex relative flex-[0_0_auto]'>
          <div className='flex flex-col w-[961px] h-[791px] items-end justify-center px-6 py-0 relative z-[1]'>
            <div className='absolute w-[961px] h-[791px] top-0 left-0 bg-[#16006d]' />

            <div className='w-[817px] items-center gap-6 flex-1 grow flex relative'>
              <div className='flex-col items-start gap-10 flex-1 grow flex relative'>
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-[40px] tracking-[-0.20px] leading-[50px]">
                  BẠN MUỐN
                  <br />
                  HUẤN LUYỆN
                  <br />
                  THÚ CƯNG
                  <br />
                  CỦA BẠN?
                </h1>

                <button className='inline-flex items-center justify-center gap-2.5 p-6 relative flex-[0_0_auto] bg-[#f7613e] rounded-xl hover:bg-[#e5552d] transition-colors'>
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-[90px] whitespace-nowrap">
                    Xem ngay
                  </span>
                </button>
              </div>

              <div className='relative self-stretch w-[486px]'>
                <div className='flex w-[486px] h-[645px] items-center justify-center gap-2.5 relative top-[193px]'>
                  <img
                    className='relative w-[476px] h-[666px] mt-[-2.50px] mb-[-18.50px]'
                    alt='Alvan nee'
                    src={alvanNeeEoqnr8IkwfeUnsplash1}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] z-0'>
            <div className='relative w-[961px] h-[191px] bg-[#8e59ff]' />

            <div className='inline-flex items-center gap-[165px] absolute top-[60px] left-[120px]'>
              <div className="relative w-[576px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[22px] tracking-[-0.20px] leading-[30px]">
                {courseFeatures.map((feature, index) => (
                  <div key={index}>
                    {feature}
                    {index < courseFeatures.length - 1 && <br />}
                  </div>
                ))}
              </div>

              <Ellipse4_5 className='!relative !w-9 !h-9' />
            </div>
          </div>
        </div>

        <div className='flex-col items-start inline-flex relative flex-[0_0_auto]'>
          <div className='inline-flex items-start relative flex-[0_0_auto]'>
            <div className='relative w-[551px] h-[791px] bg-[#3843d0]' />

            <div className='inline-flex flex-col items-start gap-[74px] absolute top-[129px] left-[75px]'>
              <div className='inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]'>
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-base tracking-[-0.20px] leading-[30px] whitespace-nowrap">
                  Our happy pet owners
                </h2>

                <div className='inline-flex items-center gap-2 relative flex-[0_0_auto]'>
                  <div className='items-center gap-2 inline-flex relative flex-[0_0_auto]'>
                    <Star className='!relative !w-6 !h-6' />
                    <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base leading-[30px] relative w-fit tracking-[-0.20px] whitespace-nowrap">
                      4.8
                    </span>
                  </div>

                  <span className="relative w-fit [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base tracking-[-0.20px] leading-[30px] whitespace-nowrap">
                    (1.5K Reviews)
                  </span>
                </div>

                <div className='relative w-56 h-[37.59px]'>
                  <div className='relative w-[196px] h-[42px] -top-0.5 -left-0.5'>
                    {avatarImages.map((avatar, index) => (
                      <img
                        key={index}
                        className='absolute w-[42px] h-[42px] top-0 object-cover'
                        style={{ left: `${index * 31}px` }}
                        alt={avatar.alt}
                        src={avatar.src}
                      />
                    ))}

                    <div className='absolute w-[38px] h-[38px] top-0.5 left-[159px]'>
                      <div className='relative w-[42px] h-[42px] -top-0.5 -left-0.5 bg-colorsothers-colorblue-gray25 rounded-[100px] border-2 border-solid border-colorsbase-00'>
                        <User className='!absolute !w-[19px] !h-[19px] !top-[9px] !left-[9px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img className='relative w-[407px] h-[498px] ml-[-5.00px]' alt='Group' src={group23} />
            </div>
          </div>

          <div className='flex items-start relative self-stretch w-full flex-[0_0_auto]'>
            {bottomSections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col h-[191px] items-center justify-center gap-2.5 px-6 py-8 relative flex-1 grow ${section.bgColor}`}
              >
                <div className='flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative'>
                  <div className='flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]'>
                    <Ellipse4_5 className='!relative !w-9 !h-9' />
                    <h3 className="relative w-fit [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-[90px] whitespace-nowrap">
                      {section.title}
                    </h3>
                  </div>

                  <p className="relative w-[228px] mr-[-0.50px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-[normal]">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <header className='flex w-[1512px] items-center gap-[408px] px-[120px] py-6 absolute top-0 left-0'>
        <div className='inline-flex items-center gap-[383px] relative flex-[0_0_auto] mr-[-0.06px]'>
          <div className='inline-flex items-center gap-[110px] relative flex-[0_0_auto]'>
            <div className='inline-flex items-center gap-2 relative flex-[0_0_auto]'>
              <div className='relative w-[42.06px] h-[38px]'>
                <div className='relative w-[39px] h-[38px] left-0.5'>
                  <div className='absolute w-[39px] h-[29px] top-[9px] left-0'>
                    <img className='absolute w-2 h-2.5 top-0 left-0' alt='Ellipse' src={ellipse6} />

                    <img className='absolute w-2 h-2.5 top-0 left-[31px]' alt='Ellipse' src={ellipse9} />

                    <img className='absolute w-[31px] h-[22px] top-[7px] left-1' alt='Vector' src={vector1} />
                  </div>

                  <img className='absolute w-[9px] h-3 top-0 left-[9px]' alt='Ellipse' src={ellipse7} />

                  <img className='absolute w-[9px] h-3 top-0 left-[21px]' alt='Ellipse' src={ellipse8} />
                </div>
              </div>

              <span className="relative w-fit [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-base tracking-[-0.20px] leading-[30px] whitespace-nowrap">
                PetCourse
              </span>
            </div>

            <nav className='inline-flex items-center justify-center gap-[52px] relative flex-[0_0_auto]'>
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href='#'
                  className="relative w-fit mt-[-1.00px] [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-base tracking-[-0.20px] leading-[30px] whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className='inline-flex items-center justify-center gap-[38px] relative flex-[0_0_auto]'>
            <div className='inline-flex items-center justify-center gap-[63px] relative flex-[0_0_auto]'>
              <button className='gap-2.5 px-6 py-2 bg-[#f7613e] rounded-xl inline-flex items-center justify-center relative flex-[0_0_auto] hover:bg-[#e5552d] transition-colors'>
                <span className="relative w-fit mt-[-1.00px] [font-family:'Dela_Gothic_One-Regular',Helvetica] font-normal text-white text-[15px] tracking-[-0.20px] leading-[90px] whitespace-nowrap">
                  Liên hệ với chúng tôi
                </span>
              </button>
            </div>

            <div className='relative w-12 h-12 bg-[#b9f863] rounded-3xl'>
              <span className="absolute top-[18px] left-3 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#3843d0] text-base tracking-[-0.20px] leading-[90px] whitespace-nowrap">
                VN
              </span>
            </div>

            <UserCircle className='!relative !w-14 !h-14' />
          </div>
        </div>
      </header>
    </section>
  )
}
