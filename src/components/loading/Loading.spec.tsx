import React from 'react'

import renderer from 'react-test-renderer'

import { Loading } from './index'

describe('Component Loading', () => {
  it('should render component', async () => {
    const loading = renderer.create(<Loading />).toJSON()

    expect(loading).toMatchInlineSnapshot(`
      <View
        className="sc-bdfBQB urud"
      >
        <ActivityIndicator
          animating={true}
          color="#974CFD"
          size="small"
        />
      </View>
    `)
  })
})
