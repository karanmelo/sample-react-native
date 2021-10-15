import { useState } from 'react'

import Toast from 'react-native-toast-message'

import { useIsMounted } from '../../../hooks'
import { useAuth } from '../../../store/auth'
import { SingInEnum, SingInType } from '../types'
import { validator } from '../valdiations/validation'

export const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean | undefined>(
    undefined,
  )

  const { signIn } = useAuth()
  const isMounted = useIsMounted()

  const [formData, setFormData] = useState<SingInType>({
    [SingInEnum.USER]: '',
    [SingInEnum.PASSWORD]: '',
  })

  const changeData = (field: string) => (value: string) => {
    setFormData(state => ({
      ...state,
      [field]: value,
    }))
  }

  const handleSignIn = async () => {
    setLoading(true)
    setFormSubmitted(true)

    try {
      const formIsValid = await validator(formData)

      if (!formIsValid.isValid) {
        if (!isMounted.current) return
        return Toast.show({
          type: 'error',
          text1: 'Erro ao validar os dados',
          text2: 'Verifique se digitou corretamente e tente novamente',
        })
      }

      await signIn(formData)

      if (!isMounted.current) return
      return Toast.show({
        type: 'success',
        text1: 'Login efetuado com sucesso!',
      })
    } catch (error) {
      if (!isMounted.current) return
      const parsedError = error as Error

      return Toast.show({
        type: 'error',
        text1: 'Erro ao tentar fazer login',
        text2: parsedError.message,
      })
    } finally {
      if (isMounted.current) {
        setLoading(false)
        setFormSubmitted(undefined)
      }
    }
  }

  return {
    loading,
    formData,
    formSubmitted,
    setFormSubmitted,
    changeData,
    handleSignIn,
  }
}
