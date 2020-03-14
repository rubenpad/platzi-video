import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { create } from 'react-test-renderer'
import ProviderStoreMock from '../../__mocks__/ProviderStoreMock'
import Signup from '../Signup'

configure({ adapter: new Adapter() })

describe('Sumbit form on signup test', () => {
  test('Match Snapshot', () => {
    const signup = create(
      <ProviderStoreMock>
        <Signup />
      </ProviderStoreMock>
    )
    expect(signup.toJSON()).toMatchSnapshot()
  })

  it('Calls and executes preventDefault fucntion on submit form', () => {
    const preventDefault = jest.fn()
    const wrapper = mount(
      <ProviderStoreMock>
        <Signup />
      </ProviderStoreMock>
    )
    wrapper.find('form').simulate('submit', { preventDefault })
    expect(preventDefault).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})
