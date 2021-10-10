import { Validator } from '..'

export const phoneValidator: Validator = (value?: string) => {
  if (!value) return null

  const justNumbers: string = value.replace(/[^0-9.]+/g, '')

  if (justNumbers.length !== 11) {
    return 'Telefone inválido'
  }

  return null
}

export const landlinePhoneValidator: Validator = (value?: string) => {
  if (!value) return null

  const justNumbers: string = value.replace(/[^0-9.]+/g, '')

  if (justNumbers.length !== 10) {
    return 'Telefone inválido'
  }

  return null
}
