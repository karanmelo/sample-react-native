import React from 'react'

import { Modal, Button } from '../../../../components'
import { Row } from '../../../../styles/utils'
import * as S from './styles'

export type SignOutModalProps = {
  visible: boolean
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void | Promise<void>
  onCancel: () => void
  onClose: () => void
  confirmTheme?: 'outline' | 'primary'
  cancelTheme?: 'outline' | 'primary'
}

export const SignOutModal: React.FC<SignOutModalProps> = ({
  visible,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  onClose,
  confirmTheme = 'primary',
  cancelTheme = 'primary',
}) => {
  const handleClickOnConfirm = async () => {
    await onConfirm()
    onClose()
  }

  const handleClickOnCancel = () => {
    onCancel()
    onClose()
  }

  return (
    <Modal visible={visible} onClose={onClose}>
      <Row>
        <S.Header>
          <S.Title>{title}</S.Title>
          <Row marginTop={6}>
            <S.Message>{description}</S.Message>
          </Row>
        </S.Header>
      </Row>
      <Row marginTop={26}>
        <Button
          text={confirmText}
          onPress={handleClickOnConfirm}
          outline={confirmTheme === 'outline'}
        />
      </Row>
      <Row marginTop={14}>
        <Button
          text={cancelText}
          onPress={handleClickOnCancel}
          outline={cancelTheme === 'outline'}
        />
      </Row>
    </Modal>
  )
}
