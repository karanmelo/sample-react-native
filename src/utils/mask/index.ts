import { mask } from './vanilla'

export const dateMask = mask('**/**/****')
export const cpfMask = mask('***.***.***-**')
export const cepMask = mask('*****-***')
export const cnpjMask = mask('**.***.***/****-**')
export const phoneMask = mask('** * ****-****')
export const landlinePhoneMask = mask('** ****-****')

export const justNumbers = (value: string) => value.replace(/[^0-9]+/g, '')
export const justLetters = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
