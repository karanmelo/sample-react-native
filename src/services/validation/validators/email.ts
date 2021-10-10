import { Validator } from '..'

const EMAIL_REGEX = /\S+@\S+\.\S+/i

export const emailValidator: Validator = (value?: string) => {
  if (!value) return null

  if (!EMAIL_REGEX.test(value)) return EmailErrors.INVALID_PATTERN

  return null
}

export const EmailErrors = {
  INVALID_PATTERN: 'Email inválido',
}
