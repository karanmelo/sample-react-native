import React from 'react'

import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { BaseLayout } from '.'
import { lightTheme } from '../../../styles/themes'

describe('Component - BaseLayout', () => {
  const theme = lightTheme

  it('should be render component', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <BaseLayout>
          <View />
        </BaseLayout>
      </ThemeProvider>,
    )

    expect(component).toMatchSnapshot()
  })
})
