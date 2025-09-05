import { useState } from 'react'
import { PiUserCircle } from 'react-icons/pi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { LuBookText } from 'react-icons/lu'
import { LuUserRound } from 'react-icons/lu'
import { TbPhoneRinging } from 'react-icons/tb'
import { IoMenu } from 'react-icons/io5'

function Header() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className='md:h-[104px] h-[64px] flex md:items-center md:justify-between
       px-10 bg-transparent w-full z-20 shadow-none absolute top-0 left-0'
      >
        <div className='wp-content md:flex md:items-center md:justify-between flex items-center h-full w-full'>
          {/* Left group: Logo + Cửa hàng + Khóa học */}
          <div className='flex md:items-center items-center   flex-shrink'>
            <div className='sm:mr-[60px] md:mr-[110px] flex-shrink-0'>
              <img src='/images/Logo.png' alt='petCourse Logo' className='h-10' />
            </div>

            <div className='flex items-center gap-6 sm:gap-10 md:gap-13 min-w-0'>
              <a href='/store' className='no-underline text-white font-bold hidden md:inline truncate'>
                Cửa hàng
              </a>
              <a href='/courses' className='no-underline text-white font-bold hidden md:inline truncate'>
                Khóa học
              </a>
            </div>
          </div>

          {/* Right group: Liên hệ + VN + User icon (desktop) */}
          <div className='items-center gap-9 hidden md:flex md:mx[110px] '>
            <a href='/contact' className='bg-[#FF6B35] text-white px-6 py-2 rounded-3xl text-15px no-underline'>
              Liên hệ với chúng tôi
            </a>
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className='bg-[#D4FF4F] text-[#18006A] font-bold rounded-full w-12 h-12 flex items-center justify-center text-base shadow-md'
            >
              {lang === 'vi' ? 'VN' : 'EN'}
            </button>
            <PiUserCircle size={52} color='#fff' className='cursor-pointer' />
          </div>
        </div>
        {/* Hamburger menu icon (mobile) */}
        <button className='md:hidden' onClick={() => setMenuOpen(true)}>
          <IoMenu size={36} color='#ffffff' />
        </button>
      </header>
      {/* Mobile menu slide down */}
      {menuOpen && (
        <div className='fixed inset-0 z-40' onClick={() => setMenuOpen(false)}>
          <div
            className={`fixed z-50 top-0 left-0 w-full bg-[#3B4FEA] text-white transition-transform duration-300 ease-in-out ${
              menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='p-6 flex flex-col gap-6 relative'>
              <button className='absolute top-4 right-4' onClick={() => setMenuOpen(false)}>
                <IoClose size={32} />
              </button>
              <a href='/store' className='flex items-center gap-3 text-lg font-bold mt-10'>
                {/* icon store */}
                <HiOutlineBuildingStorefront size={24} />
                Cửa hàng
              </a>
              <a href='/courses' className='flex items-center gap-3 text-lg font-bold'>
                {/* icon course */}
                <LuBookText size={24} />
                Khóa học
              </a>
              <div className='flex items-center gap-3 text-lg font-bold'>
                <button
                  onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                  className='bg-[#D4FF4F] text-[#18006A] font-bold rounded-full w-10 h-10 flex items-center justify-center text-base shadow-md'
                >
                  VN
                </button>
                <span>Ngôn ngữ : Tiếng Việt</span>
              </div>
              <a href='/login' className='flex items-center gap-3 text-lg font-bold'>
                <LuUserRound size={28} />
                Đăng nhập/ Đăng ký
              </a>
              <a href='/contact' className='flex items-center gap-3 text-lg font-bold mb-6'>
                <TbPhoneRinging size={24} />
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
