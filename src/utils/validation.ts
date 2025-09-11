import * as yup from 'yup'

interface InitialSchema {
  label: string
}

interface StringSchemaHandler extends Pick<InitialSchema, 'label'> {
  options?: {
    min?: number
    max?: number
    optional?: boolean
  }
}

function handleConfirmPasswordYup(field: string) {
  return yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .min(6, 'Xác nhận mật khẩu tối thiểu 6 ký tự')
    .max(160, 'Xác nhận mật khẩu tối đa 160 ký tự')
    .oneOf([yup.ref(field)], 'Xác nhận mật khẩu không trùng khớp')
}

const emailSchema = yup
  .string()
  .required('Email là bắt buộc')
  .min(5, 'Email tối thiểu 5 ký tự')
  .max(160, 'Email tối đa 160 ký tự')
  .email('Email không hợp lệ')

function stringSchemaHandler({ label, options }: StringSchemaHandler) {
  let stringSchema = yup.string()

  if (options && options.max !== undefined) {
    stringSchema = stringSchema.max(options.max, `${label} tối đa ${options.max} ký tự`)
  }

  if (options && options.min !== undefined) {
    stringSchema = stringSchema.min(options.min, `${label} tối thiểu ${options.min} ký tự`)
  }

  if (options && options.optional) {
    stringSchema = stringSchema.optional()
  } else if (options && !options.optional) {
    stringSchema = stringSchema.required(`${label} là bắt buộc`)
  }
  return stringSchema
}

export const schema = yup.object({
  email: emailSchema,
  password: stringSchemaHandler({ label: 'Mật khẩu', options: { min: 6, max: 160 } }) as yup.StringSchema<
    string,
    yup.AnyObject,
    undefined,
    ''
  >,
  confirm_password: handleConfirmPasswordYup('password')
})
