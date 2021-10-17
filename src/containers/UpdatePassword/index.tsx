import React from 'react'

import { useNavigation } from '@react-navigation/core'

import { Button, Loading } from '../../components'
import { PasswordInput } from '../../components/Inputs'
import { Row } from '../../styles/utils'
import { useUpdatePasswordData } from './hooks/useUpdatePasswordData'
import * as S from './styles'
import { UpdatePasswordEnum } from './types'
import { updatePasswordValidation } from './validations'

export const UpdatePasswordContainer: React.FC = () => {
  const { formData, formSubmitted, loading, changeData, submitForm } =
    useUpdatePasswordData()

  const navigation = useNavigation()

  return (
    <S.UpdatePasswordContainer>
      <Row>
        <S.Text>Alterar senha</S.Text>
      </Row>
      <Row marginTop={64}>
        <PasswordInput
          label="Nova senha"
          value={formData.password}
          onChange={changeData(UpdatePasswordEnum.PASSWORD)}
          validator={updatePasswordValidation.password}
          touched={formSubmitted}
          asyncValidation={true}
          disabled={loading}
        />
      </Row>
      <Row marginTop={32}>
        <PasswordInput
          label="Confirmar senha"
          value={formData.confirmPassword}
          onChange={changeData(UpdatePasswordEnum.CONFIRM_PASSWORD)}
          validator={updatePasswordValidation.password}
          touched={formSubmitted}
          asyncValidation={true}
          disabled={loading}
        />
      </Row>
      <Row marginTop={32}>
        <Button text="Confirmar" onPress={submitForm} />
      </Row>
      <Row marginTop={8}>
        <Button
          text="Voltar"
          outline={true}
          disabled={loading}
          onPress={() => {
            navigation.goBack()
          }}
        />
      </Row>
      {loading && (
        <Row marginTop={32}>
          <Loading size="large" />
        </Row>
      )}
    </S.UpdatePasswordContainer>
  )
}
