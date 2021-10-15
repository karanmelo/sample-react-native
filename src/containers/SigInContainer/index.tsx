import React from 'react'

import { Button, Card, Loading, TextInput } from '../../components'
import { PasswordInput } from '../../components/inputs'
import { BaseLayout } from '../../components/layouts/'
import { composite } from '../../services/validation/composite'
import {
  passwordValidator,
  requiredValidator,
} from '../../services/validation/validators'
import { Row } from '../../styles/utils'
import { useSignIn } from './hooks/useSignIn'
import * as S from './styles'
import { SingInEnum } from './types'

export const SigInContainer: React.FC = () => {
  const { formData, loading, formSubmitted, changeData, handleSignIn } =
    useSignIn()

  return (
    <BaseLayout opacity={1}>
      <S.LoginContainer>
        <Card height={420}>
          <S.CardContainer>
            <Row marginTop={24}>
              <TextInput
                label="Usuário"
                value={formData.user}
                onChange={(value: string) => {
                  changeData(SingInEnum.USER)(value.toString())
                }}
                disabled={loading}
                touched={formSubmitted}
              />
            </Row>
            <Row marginTop={32}>
              <PasswordInput
                label="Senha"
                value={formData.password}
                onChange={(value: string) => {
                  changeData(SingInEnum.PASSWORD)(value.toString())
                }}
                validator={composite([requiredValidator, passwordValidator])}
                disabled={loading}
                touched={formSubmitted}
              />
            </Row>
            <Row marginTop={56}>
              <Button
                text="Acessar"
                padding={'18px 0'}
                onPress={handleSignIn}
              />
            </Row>
            {loading && (
              <Row marginTop={32}>
                <Loading size="large" />
              </Row>
            )}
          </S.CardContainer>
        </Card>
      </S.LoginContainer>
    </BaseLayout>
  )
}
