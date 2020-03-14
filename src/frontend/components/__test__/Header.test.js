import React from 'react'
import { create } from 'react-test-renderer'
import ProviderStoreMock from '../../__mocks__/ProviderStoreMock'
import Header from '../Header'

describe('Header component test', () => {
  test('Match Snapshot', () => {
    const header = create(
      <ProviderStoreMock>
        <Header />
      </ProviderStoreMock>
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})
