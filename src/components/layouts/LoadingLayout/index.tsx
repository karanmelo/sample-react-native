import React from 'react'

import { Loading } from '../..'
import { BaseLayout } from '../BaseLayout'
import * as S from './styles'

export const LoadingLayout: React.FC = () => (
  <BaseLayout>
    <S.LoadingContainer>
      <Loading size="large" />
    </S.LoadingContainer>
  </BaseLayout>
)
