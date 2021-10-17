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
        <S.ModalHeader>
          <S.CloseButton name="grip-lines" onPress={handleToggleModal} />
        </S.ModalHeader>
        {children}
      </S.ModalView>
    </RNModal>
  )
}
