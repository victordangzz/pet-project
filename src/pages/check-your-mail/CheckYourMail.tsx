import { useLocation, useNavigate } from 'react-router-dom'
import { Mail, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

const CheckYourMail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const email = location.state?.email
  const message = location.state?.message
  const type = location.state?.type || 'verification' // 'verification' hoặc 'forgot-password'

  useEffect(() => {
    // If no email in state, redirect to appropriate page
    if (!email) {
      if (type === 'forgot-password') {
        navigate('/forgot-password')
      } else {
        navigate('/register')
      }
    }
  }, [email, navigate, type])

  if (!email) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-gray-600'>Đang chuyển hướng...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Header background */}
      <div className='h-[114px] bg-[#3B4FEA]'></div>

      {/* Main content */}
      <div className='flex items-center justify-center px-4 py-8'>
        <div className='max-w-md w-full text-center'>
          {/* Success icon */}
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
              <CheckCircle className='w-8 h-8 text-green-600' />
            </div>
          </div>

          {/* Title */}
          <h2 className='text-3xl font-bold text-[#1E40AF] mb-4'>Kiểm tra email của bạn</h2>

          {/* Success message */}
          {message && (
            <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
              <div className='flex items-center justify-center'>
                <Mail className='w-5 h-5 mr-2' />
                {message}
              </div>
            </div>
          )}

          {/* Email info */}
          <div className='mb-6'>
            <p className='text-gray-600 mb-2'>
              {type === 'forgot-password'
                ? 'Chúng tôi đã gửi link reset mật khẩu đến:'
                : 'Chúng tôi đã gửi email xác thực đến:'}
            </p>
            <p className='text-lg font-semibold text-[#1E40AF] bg-gray-100 py-2 px-4 rounded-lg'>{email}</p>
          </div>

          {/* Instructions */}
          <div className='bg-blue-50 p-4 rounded-lg mb-6'>
            <h3 className='font-semibold text-[#1E40AF] mb-2'>Hướng dẫn:</h3>
            <ul className='text-sm text-gray-700 text-left space-y-1'>
              <li>• Kiểm tra hộp thư đến của bạn</li>
              <li>• Nhấp vào liên kết {type === 'forgot-password' ? 'reset mật khẩu' : 'xác thực'} trong email</li>
              <li>• Nếu không thấy email, hãy kiểm tra thư mục spam</li>
              <li>• Email có thể mất vài phút để đến</li>
            </ul>
          </div>

          {/* Actions */}
          <div className='space-y-4'>
            <button
              onClick={() => window.location.reload()}
              className='w-full bg-[#1E40AF] text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
            >
              {type === 'forgot-password' ? 'Tôi đã reset mật khẩu' : 'Tôi đã xác thực email'}
            </button>

            <button
              onClick={() => navigate(type === 'forgot-password' ? '/forgot-password' : '/register')}
              className='w-full bg-white border-2 border-[#FF6B35] text-[#FF6B35] py-3 px-4 rounded-lg font-medium hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors'
            >
              {type === 'forgot-password' ? 'Gửi lại email reset' : 'Gửi lại email xác thực'}
            </button>
          </div>

          {/* Help text */}
          <p className='text-sm text-gray-500 mt-6'>
            Cần hỗ trợ? Liên hệ với chúng tôi qua{' '}
            <a href='mailto:support@example.com' className='text-[#FF6B35] hover:text-[#e55a2b]'>
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckYourMail
