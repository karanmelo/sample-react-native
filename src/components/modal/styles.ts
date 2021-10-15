import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export type ModalViewProps = {
  size: number
}

export const ModalView = styled(View)<{ size: string }>`
  position: absolute;

  width: 100%;
  min-height: ${props => props.size};
  padding: 45px;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 35px;
`

export const CloseButton = styled(Icon)`
  position: absolute;
  right: 22px;
  top: 22px;

  font-size: ${sg.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.text};

  z-index: 10;
`
