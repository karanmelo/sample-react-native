import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components'

import { sg } from '../../../styles/styleGuide'

export type IconWrapper = {
  disabled: boolean
}

export const IconWrapper = styled(Icon)<IconWrapper>`
  height: 100%;
  padding: ${sg.fontSize.small};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${sg.fontSize.medium};
  color: ${({ disabled, theme }) =>
    disabled || theme.name === 'light' ? sg.colors.gray : sg.colors.lightGray};
`
