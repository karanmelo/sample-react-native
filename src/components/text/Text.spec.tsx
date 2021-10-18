import React from 'react'

import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { lightTheme } from '../../styles/themes'
import { Text } from './'

describe('Component - Text', () => {
  const theme = lightTheme

  it('should be render component', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Text>Teste</Text>
      </ThemeProvider>,
    )

    expect(component).toMatchSnapshot()
  })
})
