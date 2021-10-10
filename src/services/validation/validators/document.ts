import { Validator } from '..'
import { justNumbers } from '../../../utils/mask'

export const documentValidator: Validator = (value?: string) => {
  if (!value) return null

  const document: string = justNumbers(value)

  if (document.length !== 11 && document.length !== 14) {
    return 'Documento inválido'
  }

  return null
}
