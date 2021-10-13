import { Image, View, ImageBackground } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
  flex: 1;
`

export const Logo = styled(Image)`
  margin-top: 62px;
  margin-left: auto;
  margin-right: auto;
`

export const Content = styled(View)`
  flex: 1;
  padding: 0 22px 62px 22px;
`

export const Background = styled(ImageBackground)`
  flex: 1;
`
