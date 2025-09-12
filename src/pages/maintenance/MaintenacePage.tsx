import React from 'react'
import { PiPlugs } from 'react-icons/pi'
import { IoMdSettings } from 'react-icons/io'
import { motion } from 'framer-motion'
const MaintenancePage = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center p-8 px-30'
      style={{ background: 'linear-gradient(135deg, #066738 0%, #044a28 100%)' }}
    >
      <div className='flex justify-between text-white max-w-4xl mx-auto'>
        <div className='flex items-start justify-center pr-10 '>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 3 // quay 1 vòng trong 3s
            }}
          >
            <IoMdSettings className='w-60 h-60 text-white' />
          </motion.div>
        </div>
        <div>
          <h1 className='text-6xl md:text-6xl font-semibold mb-8 leading-tight' style={{ color: '#ffb01b' }}>
            Hệ thống đang
            <br />
            bảo trì <PiPlugs className='inline-block text-white pl-4 text-7xl' />
          </h1>
          <p className='text-xl md:text-2xl font-medium leading-relaxed' style={{ color: '#ffb01b' }}>
            Vui lòng quay lại sau với các cập
            <br />
            nhật mới nhất
          </p>
          <div className='mt-12 flex justify-center'>
            <div className='flex space-x-2'>
              <div
                className='w-3 h-3 rounded-full animate-bounce'
                style={{ backgroundColor: '#ffb01b', animationDelay: '0ms' }}
              ></div>
              <div
                className='w-3 h-3 rounded-full animate-bounce'
                style={{ backgroundColor: '#ffb01b', animationDelay: '150ms' }}
              ></div>
              <div
                className='w-3 h-3 rounded-full animate-bounce'
                style={{ backgroundColor: '#ffb01b', animationDelay: '300ms' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaintenancePage
