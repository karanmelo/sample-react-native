import { View } from 'react-native'
import styled from 'styled-components'

import { sg } from '../../styles/styleGuide'

export type CardContainerProps = {
  width?: number
  height?: number
  border?: boolean
}

export const CardContainer = styled(View)<CardContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  max-height: ${({ height }) => (height ? `${height}px` : 'auto')};

  border-radius: 8px;
  border: ${({ border, theme }) =>
    border
      ? theme.name === 'dark'
        ? `1px solid ${sg.colors.white}`
        : `1px solid ${sg.colors.lightGray}`
      : 'transparent'};

  overflow: hidden;
`
