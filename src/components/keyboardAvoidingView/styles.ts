import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background: ${props => props.theme.colors.primary};
`
export const KeyboardAvoidingViewWrapper = styled(KeyboardAvoidingView)`
  flex: 1;
`
