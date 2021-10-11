import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${sg.colors.dark};
`
export const KeyboardAvoidingViewWrapper = styled(KeyboardAvoidingView)`
  flex: 1;
`
