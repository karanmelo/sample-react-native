import { Validator } from '..'

export const passwordValidator: Validator = (value?: string) => {
  if (!value) return null

  const capitalLetters = /[A-Z]/
  const smallLetters = /[a-z]/
  const numbers = /[0-9]/
  const specialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/

  if (value.length < 8) {
    return 'A senha deve possuir no mínimo 8 caracteres'
  }

  if (!capitalLetters.test(value)) {
    return 'A senha deve possuir pelo menos uma letra maiúscula'
  }

  if (!smallLetters.test(value)) {
    return 'A senha deve possuir pelo menos uma letra minúscula'
  }

  if (!numbers.test(value)) {
    return 'A senha deve possuir pelo menos um número'
  }

  if (!specialCharacters.test(value)) {
    return 'A senha deve possuir pelo menos uma caracter especial, como @%$#&'
  }

  return null
}
