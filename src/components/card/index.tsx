import React from 'react'

import * as S from './styles'

export type CardProps = {
  children: JSX.Element | JSX.Element[]
  width?: number
  height?: number
  border?: boolean
}

export const Card: React.FC<CardProps> = ({
  height,
  width,
  children,
  border = false,
}) => (
  <S.CardContainer height={height} width={width} border={border}>
    {children}
  </S.CardContainer>
)
