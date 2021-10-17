import { View } from 'react-native'
import styled from 'styled-components'

export type RowProps = {
  marginTop?: number
}

export const Row = styled(View)<RowProps>`
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : 0)};
`

export const Line = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.button};
`
