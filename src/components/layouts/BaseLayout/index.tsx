import React from 'react'

import { KeyboardAvoidingView } from '../../KeyboardAvoidingView'
import * as S from './styles'

type BaseLayoutProps = {
  children: JSX.Element
  opacity?: number
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  opacity = 0.3,
}) => (
  <KeyboardAvoidingView>
    <S.Background
      source={require('../../../assets/images/signin_background.jpg')}
      imageStyle={{
        opacity,
      }}
      resizeMode="cover"
    >
      <S.Container>
        <S.Logo source={require('../../../assets/images/logo.png')} />

        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Background>
  </KeyboardAvoidingView>
)
