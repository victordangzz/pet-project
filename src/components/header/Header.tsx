import { useState, useRef, useEffect } from 'react'
import { PiUserCircle } from 'react-icons/pi'
import { IoClose, IoMenu } from 'react-icons/io5'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { LuBookText, LuUserRound, LuLogOut, LuUser } from 'react-icons/lu'
import { TbPhoneRinging } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app-context'
import { getRefreshTokenFromLS } from '@/utils/auth'
import { useMutation } from '@tanstack/react-query'
import userApi from '@/apis/user.api'

type HeaderProps = {
  variant?: 'main' | 'sub'
}

function Header({ variant = 'main' }: HeaderProps) {
  const isMain = variant === 'main'
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const refresh_token = getRefreshTokenFromLS()
  const logoutMutation = useMutation({
    mutationFn: () => userApi.logout({ refresh_token }),
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })
  const handleLogout = () => {
    logoutMutation.mutate()
    setDropdownOpen(false)
  }
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header className='absolute top-0 left-0 z-20 w-full h-16 lg:h-[104px] px-5 pt-4 md:px-10 md:pt-6 lg:px-28 bg-transparent'>
        <div className='flex items-center justify-between h-full w-full'>
          {/* Left group: Logo + Navigation */}
          <div className='flex items-center flex-shrink-0'>
            <div className='lg:mr-[60px] xl:mr-[110px]'>
              <Link to='/'>
                <img
                  src={isMain ? '/images/Logo.png' : 'images/logo-bg-white.png'}
                  alt='petCourse Logo'
                  className='h-8 md:h-8 lg:h-10 xl:h-12'
                />
              </Link>
            </div>

            <nav
              className={` ${isMain ? 'text-white hover:text-gray-200' : 'text-black'} hidden lg:flex items-center gap-6 lg:gap-6 xl:gap-10  font-bold lg:text-[18px] xl:text-[16px] transition-colors`}
            >
              <Link to='/store'>Cửa hàng</Link>
              <Link to='/courses'>Khóa học</Link>
              <Link to='/blog'>Blog</Link>
            </nav>
          </div>

          {/* Right group: Contact + Language + User (desktop only) */}
          <div className='hidden lg:flex items-center gap-6 xl:gap-9'>
            <a
              href='/contact'
              className='bg-[#FF6B35] text-white px-4 lg:px-9 py-2 rounded-3xl 
              text-sm font-medium hover:bg-[#e55a2b] transition-colors'
            >
              Liên hệ với chúng tôi
            </a>
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className='bg-[#D4FF4F] text-[#18006A] font-bold rounded-full lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex items-center justify-center text-sm lg:text-base shadow-md hover:bg-[#c9f542] transition-colors'
            >
              {lang === 'vi' ? 'VN' : 'EN'}
            </button>

            {/* User Authentication Section */}
            {isAuthenticated && profile ? (
              <div className='relative' ref={dropdownRef}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className='focus:outline-none'>
                  <PiUserCircle
                    size={48}
                    className={` ${isMain ? 'text-white' : 'text-[#064BB5]'} cursor-pointer hover:opacity-80 transition-opacity lg:w-[52px] lg:h-[52px]`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className='absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50'>
                    <div className='px-4 py-2 border-b border-gray-200'>
                      <p className='text-sm text-gray-600'>Xin chào,</p>
                      <p className='font-semibold text-gray-800 truncate'>{profile.email}</p>
                    </div>
                    <Link
                      to='/profile'
                      className='flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors'
                      onClick={() => setDropdownOpen(false)}
                    >
                      <LuUser size={16} />
                      Hồ sơ cá nhân
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors text-left'
                    >
                      <LuLogOut size={16} />
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to='/login'
                className='bg-white text-[#18006A] font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base'
              >
                Login
              </Link>
            )}
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

                {/* Mobile User Section */}
                {isAuthenticated && profile ? (
                  <>
                    <div className='border-t border-white border-opacity-20 pt-4 mt-4'>
                      <div className='flex items-center gap-3 text-lg font-bold mb-4'>
                        <LuUserRound size={24} />
                        <div>
                          <p className='text-sm text-gray-200'>Xin chào,</p>
                          <p className='text-base truncate'>{profile.email}</p>
                        </div>
                      </div>
                      <Link
                        to='/profile'
                        className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors mb-3'
                        onClick={() => setMenuOpen(false)}
                      >
                        <LuUser size={24} />
                        Hồ sơ cá nhân
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout()
                          setMenuOpen(false)
                        }}
                        className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors w-full text-left'
                      >
                        <LuLogOut size={24} />
                        Đăng xuất
                      </button>
                    </div>
                  </>
                ) : (
                  <Link
                    to='/login'
                    className='flex items-center gap-3 text-lg font-bold hover:text-gray-200 transition-colors'
                    onClick={() => setMenuOpen(false)}
                  >
                    <LuUserRound size={24} />
                    Đăng nhập/ Đăng ký
                  </Link>
                )}

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
