import { Validator } from '..'

export const cnpjValidator: Validator = (value?: string) => {
  if (!value) return null

  const justNumbers: string = value.replace(/[^0-9.]+/g, '')

  if (justNumbers.length !== 14) {
    return 'CNPJ inválido'
  }

  return null
}
