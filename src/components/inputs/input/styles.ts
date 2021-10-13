import { View, TextInput, Text } from 'react-native'
import styled from 'styled-components'

import { sg } from '../../../styles/styleGuide'

export const Wrapper = styled(View)`
  width: 100%;
  padding: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export type InputWrapperProps = {
  size: number
}

export const InputWrapper = styled(View)<InputWrapperProps>`
  width: 100%;
  height: ${({ size }) => `${size}px`};
  padding: 0px;
  margin: 0px;

  flex-direction: row;
  align-items: center;

  border-bottom-color: ${props => props.theme.colors.border};
  border-bottom-width: 2px;
`

export type LabelProps = {
  hasValue: boolean
}

export const Label = styled(Text)<LabelProps>`
  position: absolute;
  top: ${({ hasValue }) => (hasValue ? '-16px' : '12px')};

  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ hasValue }) =>
    hasValue ? sg.fontSize.small : sg.fontSize.medium};
  line-height: 22px;

  color: ${({ theme }) =>
    theme.name === 'light' ? sg.colors.gray : sg.colors.lightGray};
`
export const Error = styled(Text)`
  margin-bottom: 8px;

  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: 700;
  font-size: ${sg.fontSize.small};
  line-height: 22px;

  color: ${sg.colors.red};
`

export type InputProps = {
  disabled: boolean
}

export const Input = styled(TextInput)<InputProps>`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;

  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${sg.fontSize.small};

  color: ${({ disabled, theme }) =>
    disabled
      ? theme.name === 'light'
        ? sg.colors.gray
        : sg.colors.lightGray
      : theme.colors.text};
`

export const Icon = styled(View)`
  height: 100%;
`
