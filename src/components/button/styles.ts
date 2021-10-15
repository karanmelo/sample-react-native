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
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, outline }) =>
    !outline ? theme.colors.border : 'transparent'};

  color: ${props => (props.outline ? sg.colors.purple : sg.colors.white)};
`

export const Text = styled(RNText)<ButtonWrapperProps>`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: bold;
  font-size: ${sg.fontSize.small};
  line-height: 16px;

  color: ${({ theme, outline }) =>
    outline ? theme.colors.border : sg.colors.white};
`
