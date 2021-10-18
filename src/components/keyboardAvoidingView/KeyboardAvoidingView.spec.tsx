import React from 'react'

import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { lightTheme } from '../../styles/themes'
import { KeyboardAvoidingView } from './'

describe('Component - KeyboardAvoidingView', () => {
  const theme = lightTheme

  it('should be render component', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <KeyboardAvoidingView>
          <View />
        </KeyboardAvoidingView>
      </ThemeProvider>,
    )

    expect(component).toMatchSnapshot()
  })

  it('should be render component with iOS platform', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      Platform: { OS: 'ios' },
      select: () => null,
    }))

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <KeyboardAvoidingView>
          <View />
        </KeyboardAvoidingView>
      </ThemeProvider>,
    )

    expect(component).toMatchSnapshot()
  })
})
