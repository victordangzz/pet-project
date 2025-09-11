import { Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { AuthInput } from '@/components/auth-input'
import * as yup from 'yup'
import { schema } from '../../utils/validation'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import userApi from '../../apis/user.api'
import httpStatusCode from '@/constants/httpStatusCode'
import { setAccessTokenToLS, setRefreshTokenToLS, setProfileToLS } from '@/utils/auth'
const formData = schema.pick(['email', 'password'])
type FormData = yup.InferType<typeof formData>

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const verifyMessage = location.state?.message

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(formData) as Resolver<FormData>
  })
  const loginMutation = useMutation({
    mutationFn: (body: FormData) => userApi.login(body)
  })

  const handleSubmitForm = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        // Save tokens and profile to localStorage
        const responseData = data.data.data
        setAccessTokenToLS(responseData.access_token)
        setRefreshTokenToLS(responseData.refresh_token)
        setProfileToLS(responseData.user)

        // Navigate to home page
        navigate('/')
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        if (error.status === httpStatusCode.UnprocessableEntity) {
          const formError = error.response?.data?.errors
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData]['msg'],
                type: 'Server'
              })
            })
          }
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
          {/* Success message from verify email */}
          {verifyMessage && (
            <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
              <div className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                {verifyMessage}
              </div>
            </div>
          )}

          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-[#1E40AF] mb-8'>ĐĂNG NHẬP</h2>
          </div>

          <form className='space-y-6' onSubmit={handleSubmitForm}>
            <div className='space-y-4'>
              {/* <AuthInput
                labelValue='Email'
                labelIcon={Mail}
                name='email'
                type='email'
                placeholder='example@email.com'
                autoComplete='email'
                required
              /> */}
              <AuthInput
                labelValue='Email'
                name='email'
                type='email'
                placeholder='Enter your email'
                labelIcon={Mail}
                register={register}
                errorMessage={errors?.email?.message as string}
                setValue={setValue}
                autoComplete='username'
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
                autoComplete='current-password'
              />

              {/* <AuthInput
                labelValue='Password'
                labelIcon={Lock}
                name='password'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                required
              /> */}
            </div>

            <div>
              <button
                type='submit'
                className='w-full bg-[#1E40AF] text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
              >
                Đăng Nhập
              </button>
            </div>

            <div className='text-center'>
              <p className='text-gray-600 italic mb-4'>Hoặc</p>
              <Link
                to='/register'
                className='w-full bg-white border-2 border-[#1E40AF] text-[#1E40AF] py-3 px-4 rounded-lg font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors inline-block text-center'
              >
                Đăng Ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
