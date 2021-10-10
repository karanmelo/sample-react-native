import React from 'react'

import { ActivityIndicator } from 'react-native'

import { sg } from '../../styles/styleGuide'
import * as S from './styles'

export type LoadingProps = {
  size?: number | 'small' | 'large' | undefined
}

export const Loading: React.FC<LoadingProps> = ({ size = 'small' }) => {
  return (
    <S.Container>
      <ActivityIndicator
        color={sg.colors.purple}
        animating={true}
        size={size}
      />
    </S.Container>
  )
}
