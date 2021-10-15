import React from 'react'

import { Modal as RNModal } from 'react-native'

import * as S from './styles'

export type ModalProps = {
  visible: boolean
  onClose: () => void
  size?: string
  onRequestClose?: () => void
}

export const Modal: React.FC<ModalProps> = ({
  children,
  visible = false,
  onClose,
  size = '300px',
  onRequestClose,
}) => {
  const handleToggleModal = () => {
    onClose()
  }

  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={onRequestClose}
    >
      <S.ModalView size={size}>
        <S.CloseButton name="window-close" onPress={handleToggleModal} />
        {children}
      </S.ModalView>
    </RNModal>
  )
}
