export type UserVerifyStatus = 'Unverified' | 'Verified' | 'Banned'
import type { SuccessResponseApi } from './common'

export interface User {
  id: string
  email: string
  verify: UserVerifyStatus
}

export type UserSuccessResponeApi = SuccessResponseApi<{
  access_token: string
  refresh_token: string
  expires_access_token: number
  expires_refresh_token: number
  user: User
}>

export type RefreshTokenReponse = SuccessResponseApi<{
  access_token: string
  refresh_token: string
  user: User
}>
export type RegisterReqBody = {
  email: string
  password: string
  confirm_password: string
}
