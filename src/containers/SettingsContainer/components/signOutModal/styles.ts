import { Text, View } from 'react-native'
import styled from 'styled-components'

import { sg } from '../../../../styles/styleGuide'

export const Header = styled(View)``

export const Title = styled(Text)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: bold;
  font-size: ${sg.fontSize.medium};

  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`

export const Message = styled(Text)`
  font-family: ${sg.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${sg.fontSize.small};

  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`
