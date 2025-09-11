import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import userApi from '@/apis/user.api'

interface VerifyState {
  loading: boolean
  success: boolean
  error: string | null
}

const VerifyEmailPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [verifyState, setVerifyState] = useState<VerifyState>({
    loading: false,
    success: false,
    error: null
  })

  // Extract token from URL parameters
  const getTokenFromURL = () => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('token')
  }

  // Mutation for email verification
  const verifyEmailMutation = useMutation({
    mutationFn: (token: string) => userApi.verifyEmail({ email_verify_token: token })
  })

  useEffect(() => {
    const token = getTokenFromURL()

    if (!token) {
      setVerifyState({
        loading: false,
        success: false,
        error: 'Token không hợp lệ hoặc không tồn tại'
      })
      return
    }

    // Start verification process
    setVerifyState((prev) => ({ ...prev, loading: true }))

    verifyEmailMutation.mutate(token, {
      onSuccess: () => {
        setVerifyState({
          loading: false,
          success: true,
          error: null
        })

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login', {
            state: { message: 'Email đã được xác thực thành công! Vui lòng đăng nhập.' }
          })
        }, 3000)
      },
      onError: (error: any) => {
        const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra khi xác thực email'
        setVerifyState({
          loading: false,
          success: false,
          error: errorMessage
        })
      }
    })
  }, [location.search, navigate])

  // Render loading state
  if (verifyState.loading) {
    return (
      <div className='bg-[#064BB5] w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4'></div>
        <span className='text-white text-2xl font-medium'>Đang xác thực email...</span>
      </div>
    )
  }

  // Render success state
  if (verifyState.success) {
    return (
      <div className='bg-[#064BB5] w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='bg-white rounded-full p-4 mb-6'>
          <svg className='w-12 h-12 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
          </svg>
        </div>
        <span className='text-white text-3xl font-bold mb-4'>Xác thực thành công!</span>
        <p className='text-white text-lg text-center max-w-md mb-6'>
          Email của bạn đã được xác thực thành công. Bạn sẽ được chuyển hướng đến trang đăng nhập.
        </p>
        <div className='flex items-center text-white text-sm'>
          <span>Chuyển hướng sau 3 giây...</span>
        </div>
      </div>
    )
  }

  // Render error state
  return (
    <div className='bg-[#064BB5] w-full min-h-screen flex flex-col items-center justify-center'>
      <div className='bg-white rounded-full p-4 mb-6'>
        <svg className='w-12 h-12 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div>
      <span className='text-white text-3xl font-bold mb-4'>Xác thực thất bại!</span>
      <p className='text-white text-lg text-center max-w-md mb-6'>{verifyState.error}</p>
      <button
        onClick={() => navigate('/login')}
        className='bg-white text-[#064BB5] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'
      >
        Quay lại đăng nhập
      </button>
    </div>
  )
}

export default VerifyEmailPage
