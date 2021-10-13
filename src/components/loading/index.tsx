import React from 'react'

import { ActivityIndicator } from 'react-native'

import { useTheme } from '../../store'
import * as S from './styles'

export type LoadingProps = {
  size?: number | 'small' | 'large' | undefined
}

export const Loading: React.FC<LoadingProps> = ({ size = 'small' }) => {
  const { theme } = useTheme()

  return (
    <S.Container>
      <ActivityIndicator
        color={theme.colors.border}
        animating={true}
        size={size}
      />
    </S.Container>
  )
}
