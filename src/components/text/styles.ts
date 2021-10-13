import { Text as RNText, View } from 'react-native'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export const Wrapper = styled(View)``

export const Text = styled(RNText)`
  font-size: 18px;
  font-family: ${sg.fontFamily.primary};
  font-weight: 400;
  color: ${props => props.theme.colors.text};
`
