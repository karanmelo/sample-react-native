import { Text as RNText, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export type ButtonWrapperProps = {
  outline: boolean
  padding: string
}

export const ButtonWrapper = styled(TouchableOpacity)<ButtonWrapperProps>`
  width: 100%;
  padding: ${props => props.padding};

  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.border};

  color: ${props => (props.outline ? sg.colors.purple : sg.colors.white)};
`

export const Text = styled(RNText)<ButtonWrapperProps>`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: bold;
  font-size: ${sg.fontSize.small};
  line-height: 16px;

  color: ${props => (props.outline ? sg.colors.purple : sg.colors.white)};
`
