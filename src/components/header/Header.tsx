import { useState } from 'react'
import { PiUserCircle } from 'react-icons/pi'
import { IoClose, IoMenu } from 'react-icons/io5'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { LuBookText, LuUserRound } from 'react-icons/lu'
import { TbPhoneRinging } from 'react-icons/tb'

function Header() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className='absolute top-0 left-0 z-20 w-full h-16 lg:h-[104px] px-5 pt-4 md:px-10 md:pt-6 lg:px-28 bg-transparent'>
        <div className='flex items-center justify-between h-full w-full'>
          {/* Left group: Logo + Navigation */}
          <div className='flex items-center flex-shrink-0'>
            <div className='lg:mr-[110px]'>
              <img src='/images/Logo.png' alt='petCourse Logo' className='h-8 md:h-10 lg:h-12' />
            </div>

            <nav className='hidden lg:flex items-center gap-6 lg:gap-10'>
              <a href='/store' className='text-white font-bold hover:text-gray-200 transition-colors'>
                Cửa hàng
              </a>
              <a href='/courses' className='text-white font-bold hover:text-gray-200 transition-colors'>
                Khóa học
              </a>
            </nav>
          </div>

          {/* Right group: Contact + Language + User (desktop only) */}
          <div className='hidden lg:flex items-center gap-6 lg:gap-9'>
            <a
              href='/contact'
              className='bg-[#FF6B35] text-white px-4 lg:px-9 py-2 rounded-3xl 
              text-sm font-medium hover:bg-[#e55a2b] transition-colors'
            >
              Liên hệ với chúng tôi
            </a>
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className='bg-[#D4FF4F] text-[#18006A] font-bold rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-sm lg:text-base shadow-md hover:bg-[#c9f542] transition-colors'
            >
              {lang === 'vi' ? 'VN' : 'EN'}
            </button>
            <PiUserCircle
              size={48}
              color='#fff'
              className='cursor-pointer hover:opacity-80 transition-opacity lg:w-[52px] lg:h-[52px]'
            />
          </div>

          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 text-white hover:text-gray-200 transition-colors'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
          >
            <IoMenu className='text-2xl md:text-4xl' />
          </button>
        </div>
      </header>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className='fixed inset-0 z-40 bg-black bg-opacity-50' onClick={() => setMenuOpen(false)}>
          <div
            className='fixed top-0 left-0 z-50 w-full bg-[#3B4FEA] text-white transform transition-transform duration-300 ease-in-out'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative p-6 pt-16'>
              {/* Close button */}
              <button
                className='absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors'
                onClick={() => setMenuOpen(false)}
                aria-label='Close menu'
              >
                <IoClose size={24} />
              </button>

              {/* Mobile navigation */}
              <nav className='flex flex-col gap-6'>
                <a
                  href='/store'
                  className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors'
                >
                  <HiOutlineBuildingStorefront size={24} />
                  Cửa hàng
                </a>

                <a
                  href='/courses'
                  className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors'
                >
                  <LuBookText size={24} />
                  Khóa học
                </a>

                <div className='flex items-center gap-3 text-lg font-bold py-2'>
                  <button
                    onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                    className='bg-[#D4FF4F] text-[#18006A] font-bold rounded-full w-10 h-10 flex items-center justify-center text-base shadow-md hover:bg-[#c9f542] transition-colors'
                  >
                    {lang === 'vi' ? 'VN' : 'EN'}
                  </button>
                  <span>Ngôn ngữ: {lang === 'vi' ? 'Tiếng Việt' : 'English'}</span>
                </div>

                <a
                  href='/login'
                  className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors'
                >
                  <LuUserRound size={24} />
                  Đăng nhập/ Đăng ký
                </a>

                <a
                  href='/contact'
                  className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors'
                >
                  <TbPhoneRinging size={24} />
                  Liên hệ với chúng tôi
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
