import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  text?: string
  outline?: boolean
  padding?: string
  height?: number
  disabled?: boolean
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  text,
  outline = false,
  padding = '13px 0',
  disabled = false,
  onPress,
}) => {
  return (
    <S.ButtonWrapper
      padding={padding}
      outline={outline}
      disabled={disabled}
      onPress={() => !disabled && onPress && onPress()}
    >
      <S.Text padding={padding} outline={outline}>
        {text}
      </S.Text>
    </S.ButtonWrapper>
  )
}
