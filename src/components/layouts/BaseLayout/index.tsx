import React from 'react'

import { KeyboardAvoidingView } from '../../keyboardAvoidingView'
import * as S from './styles'

type BaseLayoutProps = {
  children: JSX.Element
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <KeyboardAvoidingView>
    <S.Background
      source={require('../../../assets/images/signin_background.jpg')}
      resizeMode="cover"
    >
      <S.Container>
        <S.Logo source={require('../../../assets/images/logo.png')} />

        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Background>
  </KeyboardAvoidingView>
)
