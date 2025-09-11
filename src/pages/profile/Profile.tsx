import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { AppContext } from '@/contexts/app-context'
import { AuthInput } from '@/components/auth-input'
import { LuUser, LuMail, LuSave, LuX, LuPenTool } from 'react-icons/lu'
import { Lock } from 'lucide-react'

interface ChangePasswordForm {
  current_password: string
  new_password: string
  confirm_password: string
}

const Profile = () => {
  const { profile } = useContext(AppContext)
  const [isEditingPassword, setIsEditingPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ChangePasswordForm>()

  const new_password = watch('new_password')

  // Mutation để đổi mật khẩu (cần implement API)
  const changePasswordMutation = useMutation({
    mutationFn: (data: ChangePasswordForm) => {
      // TODO: Implement change password API call
      console.log('Change password data:', data)
      return Promise.resolve({ message: 'Password changed successfully' })
    },
    onSuccess: () => {
      alert('Đổi mật khẩu thành công!')
      setIsEditingPassword(false)
      reset()
    },
    onError: (error: any) => {
      alert(error.message || 'Có lỗi xảy ra khi đổi mật khẩu')
    }
  })

  const onSubmit = (data: ChangePasswordForm) => {
    changePasswordMutation.mutate(data)
  }

  const handleCancelEdit = () => {
    setIsEditingPassword(false)
    reset()
  }

  if (!profile) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-gray-500'>Vui lòng đăng nhập để xem thông tin cá nhân</div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[#3843D0]'>
      <div className='h-[104px]'></div>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 border-2 rounded-2xl shadow-lg pt-8 mt-8 bg-white'>
        {/* Profile Information */}
        <div className='bg-white  mb-6'>
          <div className='px-6 py-4 '>
            <h2 className='text-xl font-semibold text-center text-primary'>Thông tin tài khoản</h2>
          </div>
          <div className='px-6 py-6 space-y-6'>
            {/* Email */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full'>
                  <LuMail className='text-blue-600' size={20} />
                </div>
                <div>
                  <label className='text-sm font-medium text-gray-700'>Email</label>
                  <p className='text-gray-900 font-medium'>{profile.email}</p>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full'>
                  <Lock className='text-orange-600' size={20} />
                </div>
                <div>
                  <label className='text-sm font-medium text-gray-700'>Mật khẩu</label>
                  <p className='text-gray-900 font-medium'>••••••••</p>
                </div>
              </div>
              {!isEditingPassword && (
                <button
                  onClick={() => setIsEditingPassword(true)}
                  className='flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors'
                >
                  <LuPenTool size={16} />
                  Đổi mật khẩu
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Change Password Form */}
        {isEditingPassword && (
          <div className='bg-white rounded-lg shadow-sm border border-[#3843D0]'>
            <div className='px-6 py-4 '>
              <h2 className='text-lg font-semibold text-gray-900'>Đổi mật khẩu</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='px-6 py-6 space-y-2'>
              <AuthInput
                name='current_password'
                type='password'
                labelValue='Mật khẩu hiện tại'
                labelIcon={Lock}
                placeholder='Nhập mật khẩu hiện tại'
                register={register}
                rules={{
                  required: 'Vui lòng nhập mật khẩu hiện tại'
                }}
                errorMessage={errors.current_password?.message}
              />

              <AuthInput
                name='new_password'
                type='password'
                labelValue='Mật khẩu mới'
                labelIcon={Lock}
                placeholder='Nhập mật khẩu mới'
                register={register}
                rules={{
                  required: 'Vui lòng nhập mật khẩu mới',
                  minLength: {
                    value: 6,
                    message: 'Mật khẩu phải có ít nhất 6 ký tự'
                  }
                }}
                errorMessage={errors.new_password?.message}
              />

              <AuthInput
                name='confirm_password'
                type='password'
                labelValue='Xác nhận mật khẩu mới'
                labelIcon={Lock}
                placeholder='Nhập lại mật khẩu mới'
                register={register}
                rules={{
                  required: 'Vui lòng xác nhận mật khẩu mới',
                  validate: (value: string) => value === new_password || 'Mật khẩu xác nhận không khớp'
                }}
                errorMessage={errors.confirm_password?.message}
              />

              <div className='flex gap-3 pt-4'>
                <button
                  type='submit'
                  disabled={changePasswordMutation.isPending}
                  className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                >
                  <LuSave size={16} />
                  {changePasswordMutation.isPending ? 'Đang lưu...' : 'Lưu thay đổi'}
                </button>
                <button
                  type='button'
                  onClick={handleCancelEdit}
                  className='flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors'
                >
                  <LuX size={16} />
                  Hủy
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
