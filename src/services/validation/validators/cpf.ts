import { Validator } from '..'

export const cpfValidator: Validator = (value?: string) => {
  if (!value) return null

  const justNumbers: string = value.replace(/[^0-9.]+/g, '')

  if (justNumbers.length !== 11) {
    return 'CPF inválido'
  }

  return null
}
