import React from 'react'

import renderer from 'react-test-renderer'

import * as hooks from '../../store/theme'
import { lightTheme } from '../../styles/themes'
import { Loading } from './'

describe('Component - Loading', () => {
  const theme = lightTheme

  beforeAll(() => {
    jest
      .spyOn(hooks, 'useTheme')
      .mockImplementation(() => ({ theme, toggleTheme: jest.fn() }))
  })

  it('should be render component', async () => {
    const component = renderer.create(<Loading />)

    expect(component).toMatchSnapshot()
  })
})
