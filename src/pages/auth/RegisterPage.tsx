import { Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { AuthInput } from '@/components/auth-input'
import * as yup from 'yup'
import { schema } from '../../utils/validation'
import { useNavigate } from 'react-router-dom'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import userApi from '../../apis/user.api'
import httpStatusCode from '@/constants/httpStatusCode'

const formData = schema.pick(['email', 'password', 'confirm_password'])
type FormData = yup.InferType<typeof formData>
type RegisterData = FormData // Bây giờ RegisterData giống FormData

function RegisterPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(formData) as Resolver<FormData>
  })

  const registerMutation = useMutation({
    mutationFn: (body: RegisterData) => userApi.register(body)
  })

  const handleSubmitForm = handleSubmit((data) => {
    // Server cần cả 3 fields: email, password, confirm_password
    const registerData: RegisterData = {
      email: data.email.trim(),
      password: data.password,
      confirm_password: data.confirm_password
    }

    console.log('Sending register data with confirm_password:', registerData)
    console.log('Original form data:', data)

    registerMutation.mutate(registerData, {
      onSuccess: () => {
        // Navigate to check your mail page
        navigate('/check-your-mail', {
          state: {
            email: data.email,
            message: 'Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.'
          }
        })
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        console.log('Full register error:', error) // Debug log
        console.log('Error response:', error.response) // Debug log
        console.log('Error data:', error.response?.data) // Debug log

        if (error.status === httpStatusCode.UnprocessableEntity) {
          const formError = error.response?.data?.errors
          if (formError) {
            console.log('Form errors:', formError) // Debug log
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData]['msg'],
                type: 'Server'
              })
            })
          }
        } else {
          // Hiển thị lỗi chung
          console.error('Register error:', error)
        }
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
            <div className='flex items-center justify-center space-x-4 mb-8'>
              <Link to='/login' className='px-6 py-2 text-[#FF6B35] border-b-2 border-transparent hover:text-[#e55a2b]'>
                Have an account? <span className='font-medium'>Log in</span>
              </Link>
            </div>
            <h2 className='text-3xl font-bold text-[#1E40AF] mb-8'>ĐĂNG KÝ</h2>
          </div>

          <form className='space-y-6' onSubmit={handleSubmitForm}>
            <div className='space-y-4'>
              <AuthInput
                labelValue='Email'
                name='email'
                type='email'
                placeholder='example@email.com'
                labelIcon={Mail}
                register={register}
                errorMessage={errors?.email?.message as string}
                setValue={setValue}
                autoComplete='email'
              />

              <AuthInput
                labelValue='Password'
                name='password'
                type='password'
                placeholder='Password'
                labelIcon={Lock}
                register={register}
                errorMessage={errors?.password?.message as string}
                setValue={setValue}
                autoComplete='new-password'
              />

              <AuthInput
                labelValue='Confirm Password'
                name='confirm_password'
                type='password'
                placeholder='Confirm Password'
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
                disabled={registerMutation.isPending}
                className='w-full bg-[#FF6B35] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#e55a2b] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
              >
                {registerMutation.isPending ? 'Đang tạo tài khoản...' : 'Tiếp tục'}
              </button>
            </div>

            <div className='text-center'>
              <p className='text-gray-600 italic mb-4'>Hoặc</p>
              <Link
                to='/login'
                className='w-full bg-white border-2 border-[#1E40AF] text-[#1E40AF] py-3 px-4 rounded-lg font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors inline-block text-center'
              >
                Đăng Nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
