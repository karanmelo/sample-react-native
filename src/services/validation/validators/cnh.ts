import { Validator } from '..'

export const cnhValidator: Validator = (value?: string) => {
  if (!value) return null
  const justNumbers: string = value.replace(/[^0-9.]+/g, '')

  if (justNumbers.length !== 11) {
    return 'CNH inválida'
  }
  return null
}
