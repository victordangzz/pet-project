import type { SuccessResponseApi } from '@/types/common'
import http from '@/utils/http'
import type { UserSuccessResponeApi } from '@/types/user'
import type { RegisterReqBody } from '@/types/user'

export const URL_LOGIN = 'users/login'
export const URL_LOGOUT = 'users/logout'
export const URL_REFRESH_TOKEN = 'users/refresh-token'
const URL = 'users'
const userApi = {
  login(body: { email: string; password: string }) {
    return http.post<UserSuccessResponeApi>(URL_LOGIN, body)
  },
  register(body: RegisterReqBody) {
    return http.post<{ message: string }>(URL + '/register', body)
  },
  logout(body: { refresh_token: string }) {
    return http.post<{ message: string }>(URL_LOGOUT, body)
  },
  refreshToken(body: { refresh_token: string }) {
    return http.post<SuccessResponseApi<{ access_token: string; refresh_token: string; user: object }>>(
      URL_REFRESH_TOKEN,
      body
    )
  },
  verifyEmail(body: { email_verify_token: string }) {
    return http.post<{ message: string }>(URL + '/verify-email', body)
  },
  forgotPassword(body: { email: string }) {
    return http.post<{ message: string }>(URL + '/forgot-password', body)
  },
  verifyForgotPassword(body: { forgot_password_token: string }) {
    return http.post<{ message: string }>(URL + '/verify-forgot-password', body)
  },
  resetPassword(body: { forgot_password_token: string; password: string; confirm_password: string }) {
    return http.post<{ message: string }>(URL + '/reset-password', body)
  }
}

export default userApi
