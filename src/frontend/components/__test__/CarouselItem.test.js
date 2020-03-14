import React from 'react'
import { create } from 'react-test-renderer'
import ProviderStoreMock from '../../__mocks__/ProviderStoreMock'
import CarouselItem from '../CarouselItem'

describe('Carousel component test', () => {
  test('Match Snapshot', () => {
    const carouselItem = create(
      <ProviderStoreMock>
        <CarouselItem />
      </ProviderStoreMock>
    )
    expect(carouselItem.toJSON()).toMatchSnapshot()
  })
})
