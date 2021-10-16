import React from 'react'

import { BaseLayout } from '../../components/Layouts'
import { Row } from '../../styles/utils'
import { SignOutModal } from './components'
import { useSettings } from './hooks/useSettings'
import * as S from './styles'

export const SettingsContainer: React.FC = () => {
  const {
    username,
    isSignOut,
    onClickToSignOut,
    onConfirmSignOut,
    onCancelSignOut,
  } = useSettings()

  return (
    <BaseLayout>
      <S.SettingsContainer>
        <Row marginTop={16}>
          <S.SettingsContent>
            <S.SettingsOption onPress={() => true}>
              <>
                <S.ProfileIcon name="user" />
                <S.SettingsTitle>Dados pessoais</S.SettingsTitle>
              </>
            </S.SettingsOption>
            <S.SettingsOption onPress={() => true}>
              <>
                <S.LockPasswordIcon name="lock" />
                <S.SettingsTitle>Alterar senha</S.SettingsTitle>
              </>
            </S.SettingsOption>
            <S.SettingsOption onPress={onClickToSignOut}>
              <>
                <S.LogoutIcon name="logout" />
                <S.SettingsTitle>Sair</S.SettingsTitle>
              </>
            </S.SettingsOption>
          </S.SettingsContent>
        </Row>
        <Row marginTop={16}>
          <S.Line />
        </Row>
        <Row marginTop={32}>
          <S.Header>
            <S.Avatar>
              <S.AvatarLabel>{username.slice(0, 1)}</S.AvatarLabel>
            </S.Avatar>
            <S.Profile>
              <S.Username numberOfLines={1} ellipsizeMode="tail">
                {username}
              </S.Username>
            </S.Profile>
          </S.Header>
        </Row>
        <SignOutModal
          title="Sair?"
          description="Por favor, confirme se deseja sair do aplicativo"
          visible={isSignOut}
          confirmText="Confirmar"
          confirmTheme="primary"
          cancelText="Cancelar"
          cancelTheme="outline"
          onConfirm={() => onConfirmSignOut()}
          onCancel={() => onCancelSignOut()}
          onClose={() => onCancelSignOut()}
        />
      </S.SettingsContainer>
    </BaseLayout>
  )
}
