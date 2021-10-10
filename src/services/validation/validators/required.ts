import { Validator } from '..'

export const requiredValidator: Validator = (value?: any) => {
  if (!value) {
    return RequiredErrors.REQUIRED
  }

  if (typeof value === 'string' && !value.trim()) {
    return RequiredErrors.REQUIRED
  }

  return null
}

export const RequiredErrors = {
  REQUIRED: 'Campo obrigatório',
}
