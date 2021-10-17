import { View } from 'react-native'
import styled from 'styled-components'

import { Text as CText } from '../../components/Text/styles'
import { sg } from '../../styles/styleGuide'

export const UpdatePasswordContainer = styled(View)`
  flex: 1;
  padding: 0 20px;

  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled(CText)`
  font-size: ${sg.fontSize.xxlarge};
`
