import React, { useState } from 'react'

import { TextInput, TextInputProps } from '../input'
import * as S from './styles'

export type PasswordInputProps = Omit<TextInputProps, 'icon'>

export const PasswordInput: React.FC<PasswordInputProps> = props => {
  const { disabled = false } = props
  const [showPassword, setShowPassword] = useState(false)

  const handleChangePassorwdVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={!showPassword}
      icon={
        <S.IconWrapper
          disabled={disabled}
          name={showPassword ? 'eye-off' : 'eye'}
          onPress={handleChangePassorwdVisibility}
        />
      }
    />
  )
}
