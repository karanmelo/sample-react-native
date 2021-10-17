import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import { UpdatePasswordType } from '../types'
import { validateUpdatePasswordForm } from '../validations'

export enum Status {
  OK = 'ok',
  ERROR = 'error',
}

export type SubmitResponse = {
  status: Status
  data?: UpdatePasswordType
  message?: string | [] | {}
}

export const useUpdatePasswordData = () => {
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean | undefined>(
    undefined,
  )

  const [formData, setFormData] = useState<UpdatePasswordType>({
    password: '',
    confirmPassword: '',
  })

  const navigation = useNavigation()

  const validationForm = async (
    data: UpdatePasswordType,
  ): Promise<SubmitResponse> => {
    const { isValid, errors } = await validateUpdatePasswordForm(data)

    if (!isValid) {
      return {
        status: Status.ERROR,
        message: errors,
      }
    }

    return {
      status: Status.OK,
      data: formData,
    }
  }

  const changeData = (field: string) => (value: string) => {
    setFormData(state => ({
      ...state,
      [field]: value,
    }))
  }

  const submitForm = async () => {
    setLoading(true)
    setFormSubmitted(true)

    const response: SubmitResponse = await validationForm(formData)

    if (response.status === Status.ERROR) {
      const keys: string[] = Object.keys(
        JSON.parse(JSON.stringify(response.message)),
      )

      const message =
        JSON.parse(JSON.stringify(response.message))[keys[0]] ||
        JSON.parse(JSON.stringify(response.message))[keys[1]] ||
        'Verifique os valores informados'

      Toast.show({
        type: 'error',
        text1: 'Erro ao validar a senha',
        text2: message,
      })
    }

    if (response.status === Status.OK) {
      if (response.data) {
        setFormData(response.data)
        navigation.goBack()

        Toast.show({
          type: 'success',
          text1: 'Senha atualizada com sucesso',
        })
      }
    }

    setLoading(false)
    setFormSubmitted(undefined)
  }

  return {
    loading,
    formData,
    formSubmitted,
    setFormSubmitted,
    setLoading,
    changeData,
    setFormData,
    validationForm,
    submitForm,
  }
}
