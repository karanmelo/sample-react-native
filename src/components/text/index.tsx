import React from 'react'

import * as S from './styles'

export const Text: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  )
}
