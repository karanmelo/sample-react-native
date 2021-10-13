import { View } from 'react-native'
import styled from 'styled-components'

export const LoginContainer = styled(View)`
  flex: 1;
  justify-content: center;

  margin-bottom: 40px;
`
export const CardContainer = styled(View)`
  height: 100%;
  padding: 60px 20px;

  background-color: ${({ theme }) =>
    theme.name === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
`
