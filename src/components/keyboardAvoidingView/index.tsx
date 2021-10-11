import React from 'react'

import { Platform } from 'react-native'

import * as S from './styles'

export type KeyboardAvoidingViewProps = {
  children: JSX.Element
}

export const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = ({
  children,
}) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined

  return (
    <S.SafeAreaViewWrapper>
      <S.KeyboardAvoidingViewWrapper behavior={behavior}>
        {children}
      </S.KeyboardAvoidingViewWrapper>
    </S.SafeAreaViewWrapper>
  )
}
