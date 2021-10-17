import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export type ModalViewProps = {
  size: number
}

export const ModalView = styled(View)<{ size: string }>`
  position: absolute;
  width: 100%;
  min-height: ${props => props.size};
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const ModalHeader = styled(View)`
  align-items: center;

  padding: 10px;
`

export const ModalContent = styled(View)`
  padding: 15px 35px;
`

export const CloseButton = styled(Icon)`
  font-size: ${sg.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.button};
`
