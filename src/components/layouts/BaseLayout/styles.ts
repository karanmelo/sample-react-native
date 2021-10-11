import { Image, View, ScrollView } from 'react-native'
import styled from 'styled-components'

export const Container = styled(ScrollView)`
  flex: 1;

  background-color: ${props => props.theme.colors.body};
`

export const Logo = styled(Image)`
  margin-top: 62px;
  margin-left: auto;
  margin-right: auto;
`

export const Content = styled(View)`
  margin-top: 40px;
  padding: 0 22px 62px 22px;
`
