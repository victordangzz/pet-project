import { useLocation, useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { AuthInput } from '@/components/auth-input'
import * as yup from 'yup'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import userApi from '../../apis/user.api'
import { useEffect } from 'react'

function handleConfirmPasswordYup(field: string) {
  return yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .min(6, 'Xác nhận mật khẩu tối thiểu 6 ký tự')
    .max(160, 'Xác nhận mật khẩu tối đa 160 ký tự')
    .oneOf([yup.ref(field)], 'Xác nhận mật khẩu không trùng khớp')
}

const formSchema = yup.object({
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(6, 'Mật khẩu tối thiểu 6 ký tự')
    .max(160, 'Mật khẩu tối đa 160 ký tự'),
  confirm_password: handleConfirmPasswordYup('password')
})

type FormData = yup.InferType<typeof formSchema>

function ResetPassword() {
  const location = useLocation()
  const navigate = useNavigate()

  // Extract token from URL parameters
  const getTokenFromURL = () => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('token')
  }

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(formSchema) as Resolver<FormData>
  })

  const resetPasswordMutation = useMutation({
    mutationFn: (body: { forgot_password_token: string; password: string; confirm_password: string }) =>
      userApi.resetPassword(body)
  })

  useEffect(() => {
    const token = getTokenFromURL()
    if (!token) {
      navigate('/forgot-password')
    }
  }, [location.search, navigate])

  const handleSubmitForm = handleSubmit((data) => {
    const token = getTokenFromURL()
    if (!token) {
      navigate('/forgot-password')
      return
    }

    resetPasswordMutation.mutate(
      {
        forgot_password_token: token,
        password: data.password,
        confirm_password: data.confirm_password
      },
      {
        onSuccess: () => {
          // Navigate to login with success message
          navigate('/login', {
            state: {
              message: 'Mật khẩu đã được cập nhật thành công! Vui lòng đăng nhập với mật khẩu mới.'
            }
          })
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại'
          setError('password', {
            message: errorMessage,
            type: 'Server'
          })
        }
      }
    )
  })

  return (
    <div className='min-h-screen bg-white'>
      {/* Header background */}
      <div className='h-[114px] bg-[#3B4FEA]'></div>

      {/* Main content */}
      <div className='flex items-center justify-center px-4 py-8'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-[#1E40AF] mb-4'>ĐẶT LẠI MẬT KHẨU</h2>
            <p className='text-gray-600'>Nhập mật khẩu mới cho tài khoản của bạn</p>
          </div>

          <form className='space-y-6' onSubmit={handleSubmitForm}>
            <div className='space-y-4'>
              <AuthInput
                labelValue='Mật khẩu mới'
                name='password'
                type='password'
                placeholder='Nhập mật khẩu mới'
                labelIcon={Lock}
                register={register}
                errorMessage={errors?.password?.message as string}
                setValue={setValue}
                autoComplete='new-password'
              />

              <AuthInput
                labelValue='Xác nhận mật khẩu mới'
                name='confirm_password'
                type='password'
                placeholder='Nhập lại mật khẩu mới'
                labelIcon={Lock}
                register={register}
                errorMessage={errors?.confirm_password?.message as string}
                setValue={setValue}
                autoComplete='new-password'
              />
            </div>

            <div>
              <button
                type='submit'
                disabled={resetPasswordMutation.isPending}
                className='w-full bg-[#1E40AF] text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
              >
                {resetPasswordMutation.isPending ? 'Đang cập nhật...' : 'Cập nhật mật khẩu'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
