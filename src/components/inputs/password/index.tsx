import React, { useState } from 'react'

import { TextInput, TextInputProps } from '../Input'
import * as S from './styles'

export type PasswordInputProps = Omit<TextInputProps, 'icon'>

export const PasswordInput: React.FC<PasswordInputProps> = props => {
  const [showPassword, setShowPassword] = useState(false)
  const { disabled } = props

  const handleChangePassorwdVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={!showPassword}
      icon={
        <S.IconWrapper
          name={showPassword ? 'eye' : 'eye-off'}
          onPress={() => !disabled && handleChangePassorwdVisibility()}
        />
      }
    />
  )
}
