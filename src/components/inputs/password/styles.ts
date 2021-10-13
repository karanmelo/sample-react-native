import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components'

import { sg } from '../../../styles/styleGuide'

export const IconWrapper = styled(Icon)`
  height: 100%;
  padding: ${sg.fontSize.small};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${sg.fontSize.medium};
  color: ${({ theme }) =>
    theme.name === 'light' ? sg.colors.gray : sg.colors.lightGray};
`
