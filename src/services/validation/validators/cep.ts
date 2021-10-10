import { Validator } from '..'

export const cepValidator: Validator = (value?: any) => {
  if (!value) return null

  const justNumbers: string = value.replace(/[^0-9.]+/g, '')

  if (justNumbers.length !== 8) {
    return 'Cep inválido'
  }

  return null
}
