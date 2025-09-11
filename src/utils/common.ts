import httpStatusCode from '@/constants/httpStatusCode'
import type { ErrorResponseApi } from '@/types/common'
import axios, { AxiosError } from 'axios'

export function isAxiosError<TypeError>(error: unknown): error is AxiosError<TypeError> {
  return axios.isAxiosError(error)
}
export function isAxiosUnprocessableEntityError<UnprocessableEntityError>(
  error: unknown
): error is AxiosError<UnprocessableEntityError> {
  return isAxiosError(error) && error.response?.status === httpStatusCode.UnprocessableEntity
}
export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === httpStatusCode.Unauthorized
}

export function isAxiosExpiredTokenError<ExpiredTokenError>(error: unknown): error is AxiosError<ExpiredTokenError> {
  return (
    isAxiosUnauthorizedError<ErrorResponseApi<{ name: string; message: string }>>(error) &&
    error.response?.data?.data?.name === 'EXPIRED_TOKEN'
  )
}

export function formatedTime(isoDate?: string) {
  const date = isoDate ? new Date(isoDate) : null
  return date
    ? date.toLocaleString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh'
      })
    : ''
}

export function formatedDate(isoDate?: string) {
  const date = isoDate ? new Date(isoDate) : null
  return date
    ? date.toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Asia/Ho_Chi_Minh'
      })
    : ''
}

export const getAvatarUrl = (nameAvatar?: string) =>
  nameAvatar ? `${import.meta.env.VITE_SERVER_URL}image/${nameAvatar}` : '/images/empty.png'

export const getFileUrl = (filename?: string) => (filename ? `${import.meta.env.VITE_SERVER_URL}file/${filename}` : '')

export const getFilesUrl = (filename?: string) =>
  filename ? `${import.meta.env.VITE_SERVER_URL}files/${filename}` : ''
export const getDocumentFileUrl = (filename?: string) =>
  filename ? `${import.meta.env.VITE_SERVER_URL}document-files/${filename}` : ''

export function formatPriceCurrency(input: string): string {
  //  Xóa dấu phân cách nghìn, đổi dấu phẩy thành dấu chấm
  const cleaned = input
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^\d.-]/g, '')

  //  Parse số và làm tròn
  const number = Number(cleaned)
  const rounded = Math.round(number)

  //  Format lại số có dấu âm, dấu ngăn cách nghìn, đơn vị đ
  return rounded.toLocaleString('vi-VN')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filterPayload<T extends Record<string, any>>(payload: T): T {
  for (const key in payload) {
    const value = payload[key]
    if (value === undefined || value === null || value === '') {
      delete payload[key]
    }
  }
  return payload
}


