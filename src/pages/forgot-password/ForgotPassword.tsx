import { Link, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { AuthInput } from '@/components/auth-input'
import * as yup from 'yup'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import userApi from '../../apis/user.api'

const formSchema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .min(5, 'Email tối thiểu 5 ký tự')
    .max(160, 'Email tối đa 160 ký tự')
    .email('Email không hợp lệ')
})

type FormData = yup.InferType<typeof formSchema>

function ForgotPassword() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(formSchema) as Resolver<FormData>
  })

  const forgotPasswordMutation = useMutation({
    mutationFn: (body: FormData) => userApi.forgotPassword(body)
  })

  const handleSubmitForm = handleSubmit((data) => {
    forgotPasswordMutation.mutate(data, {
      onSuccess: () => {
        // Navigate to check your mail page with success message
        navigate('/check-your-mail', {
          state: {
            email: data.email,
            type: 'forgot-password',
            message: 'Chúng tôi đã gửi email reset mật khẩu đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư.'
          }
        })
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại'
        setError('email', {
          message: errorMessage,
          type: 'Server'
        })
      }
    })
  })

  return (
    <div className='min-h-screen bg-white'>
      {/* Header background */}
      <div className='h-[114px] bg-[#3B4FEA]'></div>

      {/* Main content */}
      <div className='flex items-center justify-center px-4 py-8'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-[#1E40AF] mb-4'>QUÊN MẬT KHẨU</h2>
            <p className='text-gray-600'>Nhập địa chỉ email của bạn và chúng tôi sẽ gửi link reset mật khẩu</p>
          </div>

          <form className='space-y-6' onSubmit={handleSubmitForm}>
            <div className='space-y-4'>
              <AuthInput
                labelValue='Email'
                name='email'
                type='email'
                placeholder='Nhập địa chỉ email của bạn'
                labelIcon={Mail}
                register={register}
                errorMessage={errors?.email?.message as string}
                setValue={setValue}
                autoComplete='email'
              />
            </div>

            <div>
              <button
                type='submit'
                disabled={forgotPasswordMutation.isPending}
                className='w-full bg-[#1E40AF] text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
              >
                {forgotPasswordMutation.isPending ? 'Đang xử lý...' : 'Gửi Email Reset'}
              </button>
            </div>

            <div className='text-center'>
              <p className='text-gray-600 mb-4'>Nhớ mật khẩu?</p>
              <Link
                to='/login'
                className='w-full bg-white border-2 border-[#1E40AF] text-[#1E40AF] py-3 px-4 rounded-lg font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors inline-block text-center'
              >
                Quay lại đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
