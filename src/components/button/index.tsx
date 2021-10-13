import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  text?: string
  outline?: boolean
  padding?: string
  height?: number
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  text,
  outline = false,
  padding = '13px 0',
  onPress,
}) => {
  return (
    <S.ButtonWrapper padding={padding} outline={outline} onPress={onPress}>
      <S.Text padding={padding} outline={outline}>
        {text}
      </S.Text>
    </S.ButtonWrapper>
  )
}
