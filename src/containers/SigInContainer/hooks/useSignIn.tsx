import { useState } from 'react'

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
        return console.log(formIsValid.errors)
      }

      await signIn(formData)
    } catch (error) {
      console.log(error)
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
