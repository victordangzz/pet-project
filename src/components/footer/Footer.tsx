import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-primary text-white px-10 py-20 lg:px-30 lg:py-40'>
      {/* Top section */}
      <div className='flex flex-col lg:flex-row lg:justify-between gap-8'>
        {/* Left - Logo + Social */}
        <div className='flex flex-col gap-4 lg:w-[30%]  items-center lg:items-start mb-6 lg:mb-0'>
          <img src='/images/Logo.png' alt='PetCourse Logo' className='w-[180px]' />
          <p className='mb-3 montserrat text-[15px]'>Connect with us</p>
          <div className='flex gap-4 text-xl montserrat'>
            <FaInstagram className='cursor-pointer hover:text-gray-300 transition-colors' />
            <FaTiktok className='cursor-pointer hover:text-gray-300 transition-colors' />
            <FaFacebookF className='cursor-pointer hover:text-gray-300 transition-colors' />
            <FaYoutube className='cursor-pointer hover:text-gray-300 transition-colors' />
          </div>
        </div>

        {/* Right - Links (Mobile: 2 columns, Desktop: horizontal) */}
        <div className='flex justify-around lg:justify-between lg:w-[60%]  lg:gap-16 text-left lg:text-left'>
          {/* Left Links Column */}
          <div className='flex flex-col gap-2 lg:gap-4'>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              Courses
            </a>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              About Us
            </a>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              Help Center
            </a>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              Blogs
            </a>
          </div>

          {/* Right Links Column */}
          <div className='flex flex-col gap-2 lg:gap-4'>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              Privacy
            </a>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              Terms of Service
            </a>
            <a href='#' className='text-[16px] lg:text-[20px] hover:text-gray-300 transition-colors'>
              Pet Training Course
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className='border-t border-gray-400/50 mt-8 pt-6 lg:mt-12 lg:pt-8 flex flex-col lg:flex-row lg:justify-between gap-2 text-[14px] lg:text-[16px] text-left'>
        <p>2023 Pet Training Course , Online Tutorials and Feedback</p>
        <p className='lg:text-right'>Powered by Socitech</p>
      </div>
    </footer>
  )
}
