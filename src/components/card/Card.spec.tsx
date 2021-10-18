import React from 'react'

import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../../styles/themes'
import { Card } from './'

describe('Component - Button', () => {
  it('should be render component', () => {
    const component = renderer.create(
      <Card>
        <View />
      </Card>,
    )

    expect(component).toMatchSnapshot()
  })

  it('should be render component with props', () => {
    const component = renderer.create(
      <ThemeProvider theme={lightTheme}>
        <Card width={10} height={10} border={true}>
          <View />
        </Card>
      </ThemeProvider>,
    )

    expect(component.root.props.children.props.height).toEqual(10)
    expect(component).toMatchSnapshot()
  })

  it('should be render component with dark theme', () => {
    const component = renderer.create(
      <ThemeProvider theme={darkTheme}>
        <Card width={10} height={10} border={true}>
          <View />
        </Card>
      </ThemeProvider>,
    )

    expect(component).toMatchSnapshot()
  })
})
