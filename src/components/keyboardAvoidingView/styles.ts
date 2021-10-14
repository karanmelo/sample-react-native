import { KeyboardAvoidingView, SafeAreaView } from 'react-native'
import styled from 'styled-components'

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background: ${props => props.theme.colors.primary};
`
export const KeyboardAvoidingViewWrapper = styled(KeyboardAvoidingView)`
  flex: 1;
`
